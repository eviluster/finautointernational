import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contrato.entity';
import { ProductoModule } from 'src/producto/producto.module';
import { ContratoEstadoModule } from 'src/contrato-estado/contrato-estado.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato]),
  ProductoModule,
  ContratoEstadoModule],
  controllers: [ContratoController],
  providers: [ContratoService],
  exports: [ContratoService],
})
export class ContratoModule {}
