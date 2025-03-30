import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaPiezaAccesorioService } from './categoria-pieza-accesorio.service';
import { CreateCategoriaPiezaAccesorioDto } from './dto/create-categoria-pieza-accesorio.dto';
import { UpdateCategoriaPiezaAccesorioDto } from './dto/update-categoria-pieza-accesorio.dto';
import { ReturnDto } from 'src/common/base/dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchCategoriaPiezaAccesorioDto } from './dto/search-categoria-pieza-accesorio.dto';

@Controller('categoria-pieza-accesorio')
export class CategoriaPiezaAccesorioController extends BaseControllerCRUD<
CreateCategoriaPiezaAccesorioDto,
UpdateCategoriaPiezaAccesorioDto,
CategoriaPiezaAccesorioService
> {
  constructor(private readonly Service: CategoriaPiezaAccesorioService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchCategoriaPiezaAccesorioDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
