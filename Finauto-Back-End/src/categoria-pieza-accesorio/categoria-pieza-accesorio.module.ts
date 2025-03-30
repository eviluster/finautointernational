import { Module } from '@nestjs/common';
import { CategoriaPiezaAccesorioService } from './categoria-pieza-accesorio.service';
import { CategoriaPiezaAccesorioController } from './categoria-pieza-accesorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaPiezaAccesorio } from './entities/categoria-pieza-accesorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaPiezaAccesorio])],
  controllers: [CategoriaPiezaAccesorioController],
  providers: [CategoriaPiezaAccesorioService],
  exports: [CategoriaPiezaAccesorioService],
})
export class CategoriaPiezaAccesorioModule {}
