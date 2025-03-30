import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoFreno } from './entities/tipo-freno.entity';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { Injectable } from '@nestjs/common';
import { CreateTipoFrenoDto } from './dto/create-tipo-freno.dto';
import { UpdateTipoFrenoDto } from './dto/update-tipo-freno.dto';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoFrenoDto } from './dto/search-tipo-freno.dto';

@Injectable()
export class TipoFrenoService extends BaseServiceCRUD<
TipoFreno,
CreateTipoFrenoDto,
UpdateTipoFrenoDto
> {
  constructor(
    @InjectRepository(TipoFreno)
    private readonly repository: Repository<TipoFreno>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTipoFrenoDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('tipo-freno');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-freno.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`tipo-freno.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-freno.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`tipo-freno.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
