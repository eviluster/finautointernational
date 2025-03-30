import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { ReturnDto } from 'src/common/base/dto';
import { SearchModeloDto } from './dto/search-modelo.dto';

@Injectable()
export class ModelosService extends BaseServiceCRUD<Modelo,CreateModeloDto,UpdateModeloDto> {
  constructor(
    @InjectRepository(Modelo)
    private readonly repository: Repository<Modelo>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchModeloDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('modelo');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`modelo.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`modelo.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`modelo.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`modelo.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
