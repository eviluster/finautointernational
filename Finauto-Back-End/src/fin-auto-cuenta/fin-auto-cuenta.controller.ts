import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinAutoCuentaService } from './fin-auto-cuenta.service';
import { CreateFinAutoCuentaDto } from './dto/create-fin-auto-cuenta.dto';
import { UpdateFinAutoCuentaDto } from './dto/update-fin-auto-cuenta.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('fin-auto-cuenta')
export class FinAutoCuentaController  extends BaseControllerCRUD<
CreateFinAutoCuentaDto,
UpdateFinAutoCuentaDto,
FinAutoCuentaService
> {
  constructor(private readonly Service: FinAutoCuentaService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}
