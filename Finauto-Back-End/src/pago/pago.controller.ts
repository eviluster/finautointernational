import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagoService } from './pago.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('pago')
export class PagoController extends BaseControllerCRUD<
CreatePagoDto,
UpdatePagoDto,
PagoService
> {
  constructor(private readonly Service: PagoService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}