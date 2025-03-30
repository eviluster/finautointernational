import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PiezaAccesorioService } from './pieza-accesorio.service';
import { CreatePiezaAccesorioDto } from './dto/create-pieza-accesorio.dto';
import { UpdatePiezaAccesorioDto } from './dto/update-pieza-accesorio.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('pieza-accesorio')
export class PiezaAccesorioController  extends BaseControllerCRUD<
CreatePiezaAccesorioDto,
UpdatePiezaAccesorioDto,
PiezaAccesorioService
> {
  constructor(private readonly Service: PiezaAccesorioService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}