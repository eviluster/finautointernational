import { Module } from '@nestjs/common';
import { PersonaTipoService } from './persona-tipo.service';
import { PersonaTipoController } from './persona-tipo.controller';
import { PersonaTipo } from './entities/persona-tipo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaTipo])],
  controllers: [PersonaTipoController],
  providers: [PersonaTipoService],
  exports: [PersonaTipoService],
})
export class PersonaTipoModule {}
