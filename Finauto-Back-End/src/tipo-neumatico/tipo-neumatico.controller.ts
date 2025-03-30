import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoNeumaticoService } from './tipo-neumatico.service';
import { CreateTipoNeumaticoDto } from './dto/create-tipo-neumatico.dto';
import { UpdateTipoNeumaticoDto } from './dto/update-tipo-neumatico.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoNeumaticoDto } from './dto/search-tipo-neumatico.dto';

@Controller('tipo-neumatico')
export class TipoNeumaticoController  extends BaseControllerCRUD<
CreateTipoNeumaticoDto,
UpdateTipoNeumaticoDto,
TipoNeumaticoService
> {
  constructor(private readonly Service: TipoNeumaticoService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoNeumaticoDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
