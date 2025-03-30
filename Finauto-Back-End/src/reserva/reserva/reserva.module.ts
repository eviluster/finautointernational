import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { ContratoModule } from 'src/contrato/contrato.module';
import { OfertaModule } from 'src/oferta/oferta.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva]),
  ContratoModule,
  OfertaModule],
  controllers: [ReservaController],
  providers: [ReservaService],
  exports: [ReservaService],
})
export class ReservaModule {}
