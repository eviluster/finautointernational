import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Municipality } from './entities/municipality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchMunicipalityDto } from './dto/search-municipality.dto';
import { ReturnDto } from 'src/common/base/dto';

@Injectable()
export class MunicipalityService extends BaseServiceCRUD<Municipality,CreateMunicipalityDto,UpdateMunicipalityDto> {
  constructor(
    @InjectRepository(Municipality)
    private readonly repository: Repository<Municipality>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchMunicipalityDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('municipality');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`municipality.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`municipality.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`municipality.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`municipality.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      if(searchDto.province)
      {
        if(searchDto.province!= undefined &&
          searchDto.province != null &&
          searchDto.province && searchDto.province.trim() !== '')
        { 
          queryBuilder.andWhere(`municipality.province.id = :provinceId`, { provinceId: searchDto.province });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
