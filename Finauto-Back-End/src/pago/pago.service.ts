import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Pago } from './entities/pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { Configuracion } from 'src/configuracion/entities/configuracion.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { CodeEnum } from 'src/common/enum/code.enum';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { StateEnum } from 'src/reserva/enum/state.enum';
import { StatusEnum } from 'src/producto/enum/state.enum.dto';

@Injectable()
export class PagoService   extends BaseServiceCRUD<
Pago,
CreatePagoDto,
UpdatePagoDto> {
  constructor(
    @InjectRepository(Pago)
    private readonly repository: Repository<Pago>,
    @InjectRepository(Configuracion)
    private readonly configuracionRepository: Repository<Configuracion>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {
    super(repository)
  }

  async getConfigPago(): Promise<Configuracion> {
    const config = await this.configuracionRepository.findOne({
      order: {
        createdAt: 'ASC', // Ordena por fecha de creación ascendente
      },
    });    
    return config;
  }
  override async create(createDto: CreatePagoDto): Promise<ReturnDto> {

    // pregunto por el estado de la reserva
    const reserva = await this.reservaRepository.findOne({
      where: {
        id: createDto.reserva_id,
      },
    });
    if (!reserva) {
      return {
        isSuccess: false,
        returnCode: CodeEnum.BAD_REQUEST,
        errorMessage: {
          es: `the Reserva with id ${createDto.reserva_id} do not exist`,
        },
      };
    }
    if (reserva.state !== StateEnum.Ordenado) {
      // registro el pago
      return super.create(createDto);
    }
    else {
    // 1 obtener el config % de pago para inicio prod
    const config = await this.getConfigPago();
      // obtengo todos los pagos de esta reserva
      const pagos = await this.repository.find({
        where: {
          reserva_id: {id:createDto.reserva_id},
        },
      });
      // obtengo el total de pagos
      const totalPagos = pagos.reduce((total, pago) => total + pago.monto, 0);
      // pregunto si el produnct de la reserva es tipo oferta
      if (reserva.producto.status === StatusEnum.Offert) {
      // si total pagos + monto de pago es mayor al precio de la oferta de la reserva cambio a en produccion el estado de la reserva
        if (totalPagos + createDto.monto > reserva.producto.offertPrice) {
          reserva.state = StateEnum.EnProduccion;
          await this.reservaRepository.save(reserva);
        }
      }
      else {
      // si total pagos + monto de pago es mayor al total de la reserva cambio a en produccion el estado de la reserva
        if (totalPagos + createDto.monto > reserva.producto.price) {
          reserva.state = StateEnum.EnProduccion;
          await this.reservaRepository.save(reserva);
        }
      }
    }
    return super.create(createDto);
  }





  async getByID(deleteDto: DeleteDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const entity = await this.repository.findOne({  
      where: {
        id: deleteDto.id,
      },
    });
    if (!entity) {
      returnDto.isSuccess = false;
      returnDto.returnCode = CodeEnum.BAD_REQUEST;
      returnDto.errorMessage = {
        es: `the Item with id ${deleteDto.id} do not exist`,
      };
    } else {
      returnDto.data = entity;
    }
    return returnDto;
  } 

}
