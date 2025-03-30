import { Injectable } from '@nestjs/common';
import { CreateTipoNeumaticoDto } from './dto/create-tipo-neumatico.dto';
import { UpdateTipoNeumaticoDto } from './dto/update-tipo-neumatico.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { TipoNeumatico } from './entities/tipo-neumatico.entity';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchTipoNeumaticoDto } from './dto/search-tipo-neumatico.dto';

@Injectable()
export class TipoNeumaticoService extends BaseServiceCRUD<
TipoNeumatico,
CreateTipoNeumaticoDto,
UpdateTipoNeumaticoDto
> {
  constructor(
    @InjectRepository(TipoNeumatico)
    private readonly repository: Repository<TipoNeumatico>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchTipoNeumaticoDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('tipo-neumatico');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-neumatico.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`tipo-neumatico.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`tipo-neumatico.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`tipo-neumatico.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
