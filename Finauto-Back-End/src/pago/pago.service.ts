import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Pago } from './entities/pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { Configuracion } from 'src/configuracion/entities/configuracion.entity';

@Injectable()
export class PagoService   extends BaseServiceCRUD<
Pago,
CreatePagoDto,
UpdatePagoDto> {
  constructor(
    @InjectRepository(Pago)
    private readonly repository: Repository<Pago>,
    @InjectRepository(Configuracion)
    private readonly repositoryConfiguracion: Repository<Configuracion>,
  ) {
    super(repository)
  }

  async getConfigPago(): Promise<Configuracion> {
    const config = await this.repositoryConfiguracion.findOne({ where: { id: 'configPago' } });
    return config;
  }
  override async create(createDto: CreatePagoDto): Promise<ReturnDto> {

    // 1 obtener el config % de pago para inicio prod
    const config = await this.getConfigPago();

    // obtengo la reserva para saber si tiene mas pagos y cto es el tota
    

    const entity = super.create(createDto);
    return entity;
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
