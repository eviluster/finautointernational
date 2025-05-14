import { Module } from '@nestjs/common';
import { TipoFrenoService } from './tipo-freno.service';
import { TipoFrenoController } from './tipo-freno.controller';
import { TipoFreno } from './entities/tipo-freno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoFreno])],
  controllers: [TipoFrenoController],
  providers: [TipoFrenoService],
  exports: [TipoFrenoService],
})
export class TipoFrenoModule {}
