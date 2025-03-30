import { Module } from '@nestjs/common';
import { VehicleSuplementService } from './vehicle-suplement.service';
import { VehicleSuplementController } from './vehicle-suplement.controller';
import { VehicleSuplement } from './entities/vehicle-suplement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleSuplement, Vehicle]),
  VehicleModule],
  controllers: [VehicleSuplementController],
  providers: [VehicleSuplementService],
  exports: [VehicleSuplementService],
})
export class VehicleSuplementModule {}
