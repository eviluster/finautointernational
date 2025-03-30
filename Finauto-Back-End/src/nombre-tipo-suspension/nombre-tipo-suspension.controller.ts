import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NombreTipoSuspensionService } from './nombre-tipo-suspension.service';
import { CreateNombreTipoSuspensionDto } from './dto/create-nombre-tipo-suspension.dto';
import { UpdateNombreTipoSuspensionDto } from './dto/update-nombre-tipo-suspension.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchNombreTipoSuspensionDto } from './dto/search-nombre-tipo-suspension.dto';
import { ReturnDto } from 'src/common/base/dto';

@Controller('nombre-tipo-suspension')
export class NombreTipoSuspensionController  extends BaseControllerCRUD<
CreateNombreTipoSuspensionDto,
UpdateNombreTipoSuspensionDto,
NombreTipoSuspensionService
> {
  constructor(private readonly Service: NombreTipoSuspensionService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchNombreTipoSuspensionDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
