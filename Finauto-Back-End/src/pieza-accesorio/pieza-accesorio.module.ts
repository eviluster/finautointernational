import { Module } from '@nestjs/common';
import { PiezaAccesorioService } from './pieza-accesorio.service';
import { PiezaAccesorioController } from './pieza-accesorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PiezaAccesorio } from './entities/pieza-accesorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PiezaAccesorio])],
  controllers: [PiezaAccesorioController],
  providers: [PiezaAccesorioService],
  exports: [PiezaAccesorioService],
})
export class PiezaAccesorioModule {}
