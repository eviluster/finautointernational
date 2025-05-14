import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { CreateTipoPersonaDto } from './dto/create-tipo-persona-juridica.dto';
import { UpdateTipoPersonaDto } from './dto/update-tipo-persona-juridica.dto';
import { TipoPersonaService } from './tipo-persona-juridica.service';
import { SearchTipoPersonaJuridicaDto } from './dto/search-tipo-persona-juridica.dto';
import { ReturnDto } from 'src/common/base/dto';
 
@Controller('tipo-persona')
export class TipoPersonaController extends BaseControllerCRUD<CreateTipoPersonaDto,UpdateTipoPersonaDto,TipoPersonaService>{
  constructor(private readonly tipoPersonaService: TipoPersonaService) {
    super(tipoPersonaService)
  }  
    
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoPersonaJuridicaDto): Promise<ReturnDto> {
    return await this.tipoPersonaService.searchByField(searchDto);
  }

}