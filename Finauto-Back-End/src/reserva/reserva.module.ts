import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { OfertaModule } from 'src/oferta/oferta.module';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva]),
  ProductoModule,
  OfertaModule],
  controllers: [ReservaController],
  providers: [ReservaService],
  exports: [ReservaService],
})
export class ReservaModule {}
