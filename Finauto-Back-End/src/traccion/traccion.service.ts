import { Injectable } from '@nestjs/common';
import { CreateTraccionDto } from './dto/create-traccion.dto';
import { UpdateTraccionDto } from './dto/update-traccion.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Traccion } from './entities/traccion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTraccionDto } from './dto/search-traccion.dto';

@Injectable()
export class TraccionService extends BaseServiceCRUD<
Traccion,
CreateTraccionDto,
UpdateTraccionDto
> {
  constructor(
    @InjectRepository(Traccion)
    private readonly repository: Repository<Traccion>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTraccionDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('traccion');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`traccion.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`traccion.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`traccion.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`traccion.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
