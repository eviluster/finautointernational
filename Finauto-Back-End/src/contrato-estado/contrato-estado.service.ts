import { Injectable } from '@nestjs/common';
import { CreateContratoEstadoDto } from './dto/create-contrato-estado.dto';
import { UpdateContratoEstadoDto } from './dto/update-contrato-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { ContratoEstado } from './entities/contrato-estado.entity';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { SearchProvinceDto } from 'src/province/dto/search-province.dto';

@Injectable()
export class ContratoEstadoService  extends BaseServiceCRUD<
ContratoEstado,
CreateContratoEstadoDto,
UpdateContratoEstadoDto> {
  constructor(
    @InjectRepository(ContratoEstado)
    private readonly repository: Repository<ContratoEstado>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchProvinceDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('province');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`province.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`province.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`province.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`province.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      if(searchDto.country)
      {
        if(searchDto.country!= undefined &&
          searchDto.country != null &&
          searchDto.country && searchDto.country.trim() !== '')
        { 
          queryBuilder.andWhere(`province.country.id = :provinceId`, { provinceId: searchDto.country });
        }
      }
      if(searchDto.isCapital!= undefined &&
        searchDto.isCapital != null )
      { 
        queryBuilder.andWhere(`province.isCapital = :isCapital`, { isCapital: searchDto.isCapital });
      }
      
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
