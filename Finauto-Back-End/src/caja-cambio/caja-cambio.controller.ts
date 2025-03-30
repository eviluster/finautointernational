import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CajaCambioService } from './caja-cambio.service';
import { CreateCajaCambioDto } from './dto/create-caja-cambio.dto';
import { UpdateCajaCambioDto } from './dto/update-caja-cambio.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchCajaCambioDto } from './dto/search-caja-cambio.dto';

@Controller('caja-cambio')
export class CajaCambioController extends BaseControllerCRUD<
CreateCajaCambioDto,
UpdateCajaCambioDto,
CajaCambioService
> {
  constructor(private readonly Service: CajaCambioService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchCajaCambioDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
