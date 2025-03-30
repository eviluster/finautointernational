import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { TipoFrenoService } from './tipo-freno.service';
import { CreateTipoFrenoDto } from './dto/create-tipo-freno.dto';
import { UpdateTipoFrenoDto } from './dto/update-tipo-freno.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from '../common/base/dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchTipoFrenoDto } from './dto/search-tipo-freno.dto';

@ApiTags('Tipos-freno')
@Controller('tipo-freno')
export class TipoFrenoController extends BaseControllerCRUD<
CreateTipoFrenoDto,
UpdateTipoFrenoDto,
TipoFrenoService
> {
  constructor(private readonly Service: TipoFrenoService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoFrenoDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
