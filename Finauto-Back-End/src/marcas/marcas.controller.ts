import {
  Controller,
  Get,
  Body,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from "../common/base/dto";
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchMarcaDto } from './dto/search-marca.dto';

@ApiTags('Marcas')
@Controller('marcas')
export class MarcasController extends BaseControllerCRUD<
CreateMarcaDto,
UpdateMarcaDto,
MarcasService
> {
  constructor(private readonly Service: MarcasService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchMarcaDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
