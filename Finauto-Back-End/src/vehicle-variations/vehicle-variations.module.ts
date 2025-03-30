import { Module } from '@nestjs/common';
import { VehicleVariationsService } from './vehicle-variations.service';
import { VehicleVariationsController } from './vehicle-variations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleVariation } from './entities/vehicle-variation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleVariation])],
  controllers: [VehicleVariationsController],
  providers: [VehicleVariationsService],
  exports: [VehicleVariationsService],
})
export class VehicleVariationsModule {}
