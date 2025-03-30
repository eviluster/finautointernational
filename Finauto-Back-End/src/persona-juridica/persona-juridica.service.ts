import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { CreatePersonaDto } from './dto/create-persona-juridica.dto';
import { UpdatePersonaDto } from './dto/update-persona-juridica.dto';
import { Persona } from './entities/persona-juridica.entity';

@Injectable()
export class PersonaService  extends BaseServiceCRUD<Persona,CreatePersonaDto,UpdatePersonaDto> {
  constructor(
    @InjectRepository(Persona)
    private readonly repository: Repository<Persona>,
  ) {
    super(repository)
  }
}