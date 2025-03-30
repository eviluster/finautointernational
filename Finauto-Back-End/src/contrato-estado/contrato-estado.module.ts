import { Module } from '@nestjs/common';
import { ContratoEstadoService } from './contrato-estado.service';
import { ContratoEstadoController } from './contrato-estado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoEstado } from './entities/contrato-estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoEstado])],
  controllers: [ContratoEstadoController],
  providers: [ContratoEstadoService],
  exports: [ContratoEstadoService],
})
export class ContratoEstadoModule {}
