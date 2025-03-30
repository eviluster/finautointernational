import { Module } from '@nestjs/common';
import { OfertaService } from './oferta.service';
import { OfertaController } from './oferta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oferta } from './entities/oferta.entity';
import { OfertaEstado } from 'src/oferta-estado/entities/oferta-estado.entity';
import { OfertaEstadoModule } from 'src/oferta-estado/oferta-estado.module';
import { ContratoModule } from 'src/contrato/contrato.module';

@Module({
  imports: [TypeOrmModule.forFeature([Oferta]),
  OfertaEstadoModule,
  ContratoModule],
  controllers: [OfertaController],
  providers: [OfertaService],
  exports: [OfertaService],
})
export class OfertaModule {}
