import { Injectable } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Proveedor } from './entities/proveedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { SearchProveedorDto } from './dto/search-proveedor.dto';

@Injectable()
export class ProveedorService extends BaseServiceCRUD<Proveedor,CreateProveedorDto,UpdateProveedorDto> {
  constructor(
    @InjectRepository(Proveedor)
    private readonly repository: Repository<Proveedor>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchProveedorDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('proveedor');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`proveedor.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`proveedor.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`proveedor.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`proveedor.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
