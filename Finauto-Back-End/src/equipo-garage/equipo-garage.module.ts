import { Module } from '@nestjs/common';
import { EquipoGarageService } from './equipo-garage.service';
import { EquipoGarageController } from './equipo-garage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoGarage } from './entities/equipo-garage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EquipoGarage])],
  controllers: [EquipoGarageController],
  providers: [EquipoGarageService],
  exports: [EquipoGarageService],
})
export class EquipoGarageModule {}
