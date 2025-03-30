import { Module } from '@nestjs/common';
import { ProductoEstadoService } from './producto-estado.service';
import { ProductoEstadoController } from './producto-estado.controller';

@Module({
  controllers: [ProductoEstadoController],
  providers: [ProductoEstadoService],
})
export class ProductoEstadoModule {}
