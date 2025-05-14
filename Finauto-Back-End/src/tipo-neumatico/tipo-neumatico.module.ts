import { Module } from '@nestjs/common';
import { TipoNeumaticoService } from './tipo-neumatico.service';
import { TipoNeumaticoController } from './tipo-neumatico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNeumatico } from './entities/tipo-neumatico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoNeumatico])],
  controllers: [TipoNeumaticoController],
  providers: [TipoNeumaticoService],
  exports: [TipoNeumaticoService],
})
export class TipoNeumaticoModule {}
