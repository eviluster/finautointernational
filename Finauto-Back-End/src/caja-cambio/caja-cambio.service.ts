import { Injectable } from '@nestjs/common';
import { CreateCajaCambioDto } from './dto/create-caja-cambio.dto';
import { UpdateCajaCambioDto } from './dto/update-caja-cambio.dto';
import { ReturnDto } from 'src/common/base/dto/return.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { CajaCambio } from './entities/caja-cambio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchCajaCambioDto } from './dto/search-caja-cambio.dto';

@Injectable()
export class CajaCambioService  extends BaseServiceCRUD<
CajaCambio,
CreateCajaCambioDto,
UpdateCajaCambioDto> {
  constructor(
    @InjectRepository(CajaCambio)
    private readonly repository: Repository<CajaCambio>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchCajaCambioDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('caja_cambio');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`caja_cambio.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`caja_cambio.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`caja_cambio.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`caja_cambio.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
