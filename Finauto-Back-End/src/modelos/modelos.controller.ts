import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchModeloDto } from './dto/search-modelo.dto';
import { ReturnDto } from 'src/common/base/dto';

@Controller('modelos')
export class ModelosController  extends BaseControllerCRUD<
CreateModeloDto,
UpdateModeloDto,
ModelosService
> {
  constructor(private readonly Service: ModelosService) {
    super(Service);
  }
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchModeloDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
