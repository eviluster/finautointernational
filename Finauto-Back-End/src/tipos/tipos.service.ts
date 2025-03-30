import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tipo } from './entities/tipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoDto } from './dto/search-tipo.dto';

@Injectable()
export class TiposService extends BaseServiceCRUD<Tipo,CreateTipoDto,UpdateTipoDto> {
  constructor(
    @InjectRepository(Tipo)
    private readonly repository: Repository<Tipo>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTipoDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('tipo');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`tipo.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`tipo.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
