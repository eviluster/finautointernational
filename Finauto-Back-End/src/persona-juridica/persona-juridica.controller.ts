import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { CreatePersonaDto } from './dto/create-persona-juridica.dto';
import { UpdatePersonaDto } from './dto/update-persona-juridica.dto';
import { PersonaService } from './persona-juridica.service';

@Controller('persona')
export class PersonaController extends BaseControllerCRUD<
CreatePersonaDto,
UpdatePersonaDto,
PersonaService>{
  constructor(private readonly PersonaService: PersonaService) {
    super(PersonaService)
  }
}