import { Module } from '@nestjs/common';
import { ParteService } from './parte.service';
import { ParteController } from './parte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parte } from './entities/parte.entity';
import { MarcasModule } from 'src/marcas/marcas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Parte]),
  MarcasModule],
  controllers: [ParteController],
  providers: [ParteService],
  exports: [ParteService],
})
export class ParteModule {}
