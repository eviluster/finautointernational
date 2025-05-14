import { Injectable } from '@nestjs/common';
import { CreateCategoriaPiezaAccesorioDto } from './dto/create-categoria-pieza-accesorio.dto';
import { UpdateCategoriaPiezaAccesorioDto } from './dto/update-categoria-pieza-accesorio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { CategoriaPiezaAccesorio } from './entities/categoria-pieza-accesorio.entity';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { SearchCategoriaPiezaAccesorioDto } from './dto/search-categoria-pieza-accesorio.dto';

@Injectable()
export class CategoriaPiezaAccesorioService extends BaseServiceCRUD<
CategoriaPiezaAccesorio,
CreateCategoriaPiezaAccesorioDto,
UpdateCategoriaPiezaAccesorioDto> {
  constructor(
    @InjectRepository(CategoriaPiezaAccesorio)
    private readonly repository: Repository<CategoriaPiezaAccesorio>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchCategoriaPiezaAccesorioDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('categoria_pieza_accesorio');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`categoria_pieza_accesorio.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`categoria_pieza_accesorio.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`categoria_pieza_accesorio.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`categoria_pieza_accesorio.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
