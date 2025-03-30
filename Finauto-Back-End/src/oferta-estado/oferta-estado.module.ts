import { Module } from '@nestjs/common';
import { OfertaEstadoService } from './oferta-estado.service';
import { OfertaEstadoController } from './oferta-estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfertaEstado } from './entities/oferta-estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OfertaEstado])],
  controllers: [OfertaEstadoController],
  providers: [OfertaEstadoService],
  exports: [OfertaEstadoService],
})
export class OfertaEstadoModule {}
