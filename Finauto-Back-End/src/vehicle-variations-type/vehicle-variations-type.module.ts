import { Module } from '@nestjs/common';
import { VehicleVariationsTypeService } from './vehicle-variations-type.service';
import { VehicleVariationsTypeController } from './vehicle-variations-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleVariationsType } from './entities/vehicle-variations-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleVariationsType])],
  controllers: [VehicleVariationsTypeController],
  providers: [VehicleVariationsTypeService],
  exports: [VehicleVariationsTypeService],
})
export class VehicleVariationsTypeModule {}
