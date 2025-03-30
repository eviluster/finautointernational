import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraccionService } from './traccion.service';
import { CreateTraccionDto } from './dto/create-traccion.dto';
import { UpdateTraccionDto } from './dto/update-traccion.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTraccionDto } from './dto/search-traccion.dto';

@Controller('traccion')
export class TraccionController  extends BaseControllerCRUD<
CreateTraccionDto,
UpdateTraccionDto,
TraccionService
> {
  constructor(private readonly Service: TraccionService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTraccionDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
