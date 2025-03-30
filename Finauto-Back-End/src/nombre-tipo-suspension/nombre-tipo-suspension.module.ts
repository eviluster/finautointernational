import { Module } from '@nestjs/common';
import { NombreTipoSuspensionService } from './nombre-tipo-suspension.service';
import { NombreTipoSuspensionController } from './nombre-tipo-suspension.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NombreTipoSuspension } from './entities/nombre-tipo-suspension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NombreTipoSuspension])],
  controllers: [NombreTipoSuspensionController],
  providers: [NombreTipoSuspensionService],
  exports: [NombreTipoSuspensionService],
})
export class NombreTipoSuspensionModule {}
