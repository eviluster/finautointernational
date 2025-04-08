import { Module } from '@nestjs/common';
import { OfertaService } from './oferta.service';
import { OfertaController } from './oferta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oferta } from './entities/oferta.entity';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Oferta]),
  ProductoModule],
  controllers: [OfertaController],
  providers: [OfertaService],
  exports: [OfertaService],
})
export class OfertaModule {}
