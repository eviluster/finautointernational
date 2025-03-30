import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaTipoService } from './persona-tipo.service';
import { CreatePersonaTipoDto } from './dto/create-persona-tipo.dto';
import { UpdatePersonaTipoDto } from './dto/update-persona-tipo.dto';

@Controller('persona-tipo')
export class PersonaTipoController {
  constructor(private readonly personaTipoService: PersonaTipoService) {}


  @Get()
  findAll() {
    return this.personaTipoService.findAll();
  }

}
