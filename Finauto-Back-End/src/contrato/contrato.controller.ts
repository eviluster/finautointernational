import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('contrato')
export class ContratoController  extends BaseControllerCRUD<
CreateContratoDto,
UpdateContratoDto,
ContratoService
> {
  constructor(private readonly Service: ContratoService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}