import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { ProductoModule } from 'src/producto/producto.module';
import { ServicioModule } from 'src/servicio/servicio.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva]),
  ProductoModule,
  ServicioModule,
  ],
  controllers: [ReservaController],
  providers: [ReservaService],
  exports: [ReservaService],
})
export class ReservaModule {}
