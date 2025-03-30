import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Traccion } from 'src/traccion/entities/traccion.entity';
import { TraccionModule } from 'src/traccion/traccion.module';
import { CajaCambio } from 'src/caja-cambio/entities/caja-cambio.entity';
import { CajaCambioModule } from 'src/caja-cambio/caja-cambio.module';
import { EnginesModule } from 'src/engines/engines.module';
import { MarcasModule } from 'src/marcas/marcas.module';
import { ModelosModule } from 'src/modelos/modelos.module';
import { TipoFrenoController } from 'src/tipo-freno/tipo-freno.controller';
import { TipoFrenoModule } from 'src/tipo-freno/tipo-freno.module';
import { TipoNeumaticoModule } from 'src/tipo-neumatico/tipo-neumatico.module';
import { TipoSuspensionService } from 'src/tipo-suspension/tipo-suspension.service';
import { NombreTipoSuspensionModule } from 'src/nombre-tipo-suspension/nombre-tipo-suspension.module';
import { TipoSuspensionModule } from 'src/tipo-suspension/tipo-suspension.module';

@Module({
  imports:[TypeOrmModule.forFeature([Vehicle]),
  CajaCambioModule,
  EnginesModule,
  MarcasModule,
  ModelosModule,
  TipoFrenoModule,
  TipoNeumaticoModule,
  TraccionModule,
  TipoSuspensionModule,
  NombreTipoSuspensionModule
],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
