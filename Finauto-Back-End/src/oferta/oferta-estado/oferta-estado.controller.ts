import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertaEstadoService } from './oferta-estado.service';
import { CreateOfertaEstadoDto } from './dto/create-oferta-estado.dto';
import { UpdateOfertaEstadoDto } from './dto/update-oferta-estado.dto';

// asi van a ser los nomencladores no editables de los proyectos
@Controller('oferta-estado')
export class OfertaEstadoController {
  constructor(private readonly ofertaEstadoService: OfertaEstadoService) {}


  @Get()
  findAll() {
    return this.ofertaEstadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertaEstadoService.findOne(id);
  }
}
