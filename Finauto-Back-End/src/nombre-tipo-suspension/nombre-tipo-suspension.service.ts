import { Injectable } from '@nestjs/common';
import { CreateNombreTipoSuspensionDto } from './dto/create-nombre-tipo-suspension.dto';
import { UpdateNombreTipoSuspensionDto } from './dto/update-nombre-tipo-suspension.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { NombreTipoSuspension } from './entities/nombre-tipo-suspension.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchNombreTipoSuspensionDto } from './dto/search-nombre-tipo-suspension.dto';
import { ReturnDto } from 'src/common/base/dto';

@Injectable()
export class NombreTipoSuspensionService extends BaseServiceCRUD<
NombreTipoSuspension,
CreateNombreTipoSuspensionDto,
UpdateNombreTipoSuspensionDto
> {
  constructor(
    @InjectRepository(NombreTipoSuspension)
    private readonly repository: Repository<NombreTipoSuspension>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchNombreTipoSuspensionDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('nombre-tipo-suspension');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`nombre-tipo-suspension.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`nombre-tipo-suspension.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`nombre-tipo-suspension.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`nombre-tipo-suspension.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
