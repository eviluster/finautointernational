import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { Not, IsNull } from 'typeorm';
import { StatusEnum } from './enum/state.enum.dto';
import { Configuracion } from 'src/configuracion/entities/configuracion.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { EquipoGarage } from 'src/equipo-garage/entities/equipo-garage.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

@Injectable()
export class ProductoService  extends BaseServiceCRUD<
Producto,
CreateProductoDto,
UpdateProductoDto> {
  constructor(
    @InjectRepository(Producto)
    private readonly repository: Repository<Producto>,
    @InjectRepository(Configuracion)
    private readonly configuracionRepository: Repository<Configuracion>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(EquipoGarage)
    private readonly equipoGarageRepository: Repository<EquipoGarage>,
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {
    super(repository)
  }
async productTipoServicio():Promise<ReturnDto>{
    const productos = await this.repository.find({ 
        relations: ['servicio'],
        where: {
            servicio: Not(IsNull())  // Esto asegura que solo traiga productos que tienen servicio
        }
    });
   
    return { 
      data: productos,
      isSuccess: true,
      returnCode: 200
    };
  }

  async productEnOferta(): Promise<ReturnDto> {
    const productos = await this.repository.find({ 
        where: {
        status: StatusEnum.Offert
        }
    });
   
    return { 
      data: productos,
      isSuccess: true,
      returnCode: 200
    };
  }
  
  override async create(createDto: CreateProductoDto): Promise<ReturnDto> {
    //   const returnDto = new ReturnDto
    // if(createDto.price > 0){
    // const config = await this.configuracionRepository.findOne({
    //   order: {
    //     createdAt: 'ASC', // Ordena por fecha de creación ascendente
    //   },
    // });
    // const porcent = config.porcientoMinPrice
    // if (createDto.servicio) {
    //   const servicio = await this.servicioRepository.findOne({
    //     where: {
    //       id: createDto.servicio
    //     }
    //   })
    //   if (servicio) {
    //     if(servicio.precioBase + ((porcent*servicio.precioBase)/100) > createDto.price){
    //     returnDto.isSuccess = false
    //     returnDto.returnCode = 400
    //     returnDto.errorMessage = { es: 'Precio de producto no puede ser menor al precio base.' };
    //     return returnDto
    //     }
    //    }
    //   }
    
    // if (createDto.parte) {
    //   const parte = await this.parteRepository.findOne({
    //     where: {
    //       id: createDto.parte
    //     }
    //   })
    //   if (parte) {
    //     if(parte.precioBase + ((porcent*parte.precioBase)/100) > createDto.price){
    //     returnDto.isSuccess = false
    //     returnDto.returnCode = 400
    //     returnDto.errorMessage = { es: 'Precio de producto no puede ser menor al precio base.' };
    //     return returnDto
    //     }
    //    }

    // }
    
    // if(createDto.equipoGarage){
    //    const equipoGarage = await this.equipoGarageRepository.findOne({
    //     where: {
    //       id: createDto.equipoGarage
    //     }
    //   })
    //   if (equipoGarage) {
    //     if(equipoGarage.precioBase + ((porcent*equipoGarage.precioBase)/100) > createDto.price){
    //     returnDto.isSuccess = false
    //     returnDto.returnCode = 400
    //     returnDto.errorMessage = { es: 'Precio de producto no puede ser menor al precio base.' };
    //     return returnDto
    //     }
    //    }
    //  } 

    //  if(createDto.vehicle){
    //    let vehicle = await this.vehicleRepository.findOne({
    //     where: {
    //       id: createDto.vehicle
    //       }
    //     })
    //     if (vehicle) {
    //       if(vehicle.PrecioBase + ((porcent*vehicle.PrecioBase)/100) > createDto.price){
    //       returnDto.isSuccess = false
    //       returnDto.returnCode = 400
    //       returnDto.errorMessage = { es: 'Precio de producto no puede ser menor al precio base.' };
    //       return returnDto
    //       }
    //      }
    //     }
    //   }
    return super.create(createDto)
  }
}
