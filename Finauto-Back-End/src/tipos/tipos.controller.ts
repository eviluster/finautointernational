import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from '../common/base/dto';
import { SearchDto } from 'src/common/base/dto/search.dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchTipoDto } from './dto/search-tipo.dto';

@ApiTags('Tipos')
@Controller('tipos')
export class TiposController extends BaseControllerCRUD<
CreateTipoDto,
UpdateTipoDto,
TiposService
> {
  constructor(private readonly Service: TiposService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
