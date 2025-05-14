import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { PiezaAccesorio } from 'src/pieza-accesorio/entities/pieza-accesorio.entity';
import { EquipoGarage } from 'src/equipo-garage/entities/equipo-garage.entity';
import { EquipoGarageModule } from 'src/equipo-garage/equipo-garage.module';
import { ServicioModule } from 'src/servicio/servicio.module';
import { Configuracion } from 'src/configuracion/entities/configuracion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      Vehicle,
      Servicio,
      Configuracion,
      PiezaAccesorio,
      EquipoGarage,
    ]),
    VehicleModule,
    ServicioModule,
    EquipoGarageModule,
  ],

  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductoModule {}
