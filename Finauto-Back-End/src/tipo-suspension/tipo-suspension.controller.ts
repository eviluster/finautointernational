import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoSuspensionService } from './tipo-suspension.service';
import { CreateTipoSuspensionDto } from './dto/create-tipo-suspension.dto';
import { UpdateTipoSuspensionDto } from './dto/update-tipo-suspension.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoSuspensionDto } from './dto/search-tipo-suspension.dto';

@Controller('tipo-suspension')
export class TipoSuspensionController extends BaseControllerCRUD<
CreateTipoSuspensionDto,
UpdateTipoSuspensionDto,
TipoSuspensionService
> {
  constructor(private readonly Service: TipoSuspensionService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoSuspensionDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
