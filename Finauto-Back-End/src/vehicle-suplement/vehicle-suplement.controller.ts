import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleSuplementService } from './vehicle-suplement.service';
import { CreateVehicleSuplementDto } from './dto/create-vehicle-suplement.dto';
import { UpdateVehicleSuplementDto } from './dto/update-vehicle-suplement.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchVehicleSuplementDto } from './dto/search-vehicle-suplement.dto';

@Controller('vehicle-suplement')
export class VehicleSuplementController extends BaseControllerCRUD<
CreateVehicleSuplementDto,
UpdateVehicleSuplementDto,
VehicleSuplementService
> {
  constructor(private readonly Service: VehicleSuplementService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchVehicleSuplementDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
}
