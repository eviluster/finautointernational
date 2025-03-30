import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoVehiculoSuplementoService } from './producto-vehiculo-suplemento.service';
import { CreateProductoVehiculoSuplementoDto } from './dto/create-producto-vehiculo-suplemento.dto';
import { UpdateProductoVehiculoSuplementoDto } from './dto/update-producto-vehiculo-suplemento.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('producto-vehiculo-suplemento')
export class ProductoVehiculoSuplementoController  extends BaseControllerCRUD<
CreateProductoVehiculoSuplementoDto,
UpdateProductoVehiculoSuplementoDto,
ProductoVehiculoSuplementoService
> {
  constructor(private readonly Service: ProductoVehiculoSuplementoService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}