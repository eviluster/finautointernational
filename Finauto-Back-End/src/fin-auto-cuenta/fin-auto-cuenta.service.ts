import { Injectable } from '@nestjs/common';
import { CreateFinAutoCuentaDto } from './dto/create-fin-auto-cuenta.dto';
import { UpdateFinAutoCuentaDto } from './dto/update-fin-auto-cuenta.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinAutoCuenta } from './entities/fin-auto-cuenta.entity';

@Injectable()
export class FinAutoCuentaService  extends BaseServiceCRUD<
FinAutoCuenta,
CreateFinAutoCuentaDto,
UpdateFinAutoCuentaDto> {
  constructor(
    @InjectRepository(FinAutoCuenta)
    private readonly repository: Repository<FinAutoCuenta>,
  ) {
    super(repository)
  }
  // async searchByField(searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   const returnDto = new ReturnDto();

  //     const queryBuilder = this.repository.createQueryBuilder('engine');
  //      if(searchDto.name != undefined && 
  //         searchDto.name != null )
  //     {
  //       if(searchDto.name.es != undefined && 
  //         searchDto.name.es != null && 
  //         searchDto.name.es && searchDto.name.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`engine.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
  //       }
  //       if(searchDto.name.en != undefined && 
  //         searchDto.name.en != null && 
  //         searchDto.name.en && searchDto.name.en.trim() !== '')

  //       {
  //         queryBuilder.andWhere(`engine.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
  //       }
  //     }
  //     if(searchDto.description)
  //     {
  //       if(searchDto.description.es != undefined &&
  //         searchDto.description.es != null &&
  //         searchDto.description.es && searchDto.description.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`engine.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
  //       }
  //       if(searchDto.description.en != undefined &&
  //         searchDto.description.en != null &&
  //         searchDto.description.en && searchDto.description.en.trim() !== '')
  //       {
  //         queryBuilder.andWhere(`engine.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
  //       }
  //     }
  //     returnDto.data = await queryBuilder.getMany();
  
  //   return returnDto;
  // }
}