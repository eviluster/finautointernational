import { Module } from '@nestjs/common';
import { ProductoVehiculoSuplementoService } from './producto-vehiculo-suplemento.service';
import { ProductoVehiculoSuplementoController } from './producto-vehiculo-suplemento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoVehiculoSuplemento } from './entities/producto-vehiculo-suplemento.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { VehicleSuplement } from 'src/vehicle-suplement/entities/vehicle-suplement.entity';
import { ProductoModule } from 'src/producto/producto.module';
import { VehicleSuplementModule } from 'src/vehicle-suplement/vehicle-suplement.module';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProductoVehiculoSuplemento,
    Producto,
    VehicleSuplement]),
    ProductoModule,
    VehicleSuplementModule],
  controllers: [ProductoVehiculoSuplementoController],
  providers: [ProductoVehiculoSuplementoService],
  exports: [ProductoVehiculoSuplementoService],
})
export class ProductoVehiculoSuplementoModule {}
