import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUm } from './entities/tipo-um.entity';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { Injectable } from '@nestjs/common';
import { CreateTipoUmDto } from './dto/create-tipo-um.dto';
import { UpdateTipoUmDto } from './dto/update-tipo-um.dto';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoUnidadMedidaDto } from './dto/search-tipo-unidad-medida.dto';

@Injectable()
export class TipoUmService extends BaseServiceCRUD<TipoUm,CreateTipoUmDto,UpdateTipoUmDto> {
  constructor(
    @InjectRepository(TipoUm)
    private readonly repository: Repository<TipoUm>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTipoUnidadMedidaDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('tipo-unidad-medida');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-unidad-medida.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`tipo-unidad-medida.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-unidad-medida.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`tipo-unidad-medida.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
