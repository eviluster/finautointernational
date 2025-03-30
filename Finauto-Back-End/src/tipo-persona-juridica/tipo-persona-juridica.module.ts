import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPersona } from './entities/tipo-persona-juridica.entity';
import { TipoPersonaController } from './tipo-persona-juridica.controller';
import { TipoPersonaService } from './tipo-persona-juridica.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPersona])],
  controllers: [TipoPersonaController],
  providers: [TipoPersonaService],
  exports: [TipoPersonaService],
})
export class TipoPersonaModule {}
