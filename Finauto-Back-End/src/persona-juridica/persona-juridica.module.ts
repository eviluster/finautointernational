import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona-juridica.entity';
import { PersonaController } from './persona-juridica.controller';
import { PersonaService } from './persona-juridica.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],

  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
