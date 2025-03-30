import { Injectable } from '@nestjs/common';
import { CreateTipoSuspensionDto } from './dto/create-tipo-suspension.dto';
import { UpdateTipoSuspensionDto } from './dto/update-tipo-suspension.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSuspension } from './entities/tipo-suspension.entity';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoSuspensionDto } from './dto/search-tipo-suspension.dto';

@Injectable()
export class TipoSuspensionService extends BaseServiceCRUD<
TipoSuspension,
CreateTipoSuspensionDto,
UpdateTipoSuspensionDto
> {
  constructor(
    @InjectRepository(TipoSuspension)
    private readonly repository: Repository<TipoSuspension>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTipoSuspensionDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('marca');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`marca.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`marca.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`marca.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`marca.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
