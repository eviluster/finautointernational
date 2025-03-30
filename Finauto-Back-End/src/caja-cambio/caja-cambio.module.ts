import { Module } from '@nestjs/common';
import { CajaCambioService } from './caja-cambio.service';
import { CajaCambioController } from './caja-cambio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CajaCambio } from './entities/caja-cambio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CajaCambio])],
  controllers: [CajaCambioController],
  providers: [CajaCambioService],
  exports: [CajaCambioService],
})
export class CajaCambioModule {}
