import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleVariationsService } from './vehicle-variations.service';
import { CreateVehicleVariationDto } from './dto/create-vehicle-variation.dto';
import { UpdateVehicleVariationDto } from './dto/update-vehicle-variation.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('vehicle-variations')
export class VehicleVariationsController extends BaseControllerCRUD<
CreateVehicleVariationDto,
UpdateVehicleVariationDto,
VehicleVariationsService
> {
  constructor(private readonly Service: VehicleVariationsService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}