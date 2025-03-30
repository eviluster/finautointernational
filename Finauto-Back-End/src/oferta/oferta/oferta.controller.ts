import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertaService } from './oferta.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('oferta')
export class OfertaController  extends BaseControllerCRUD<
CreateOfertaDto,
UpdateOfertaDto,
OfertaService
> {
  constructor(private readonly Service: OfertaService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}