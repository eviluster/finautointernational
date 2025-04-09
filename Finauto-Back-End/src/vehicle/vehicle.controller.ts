import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('vehicle')
export class VehicleController extends BaseControllerCRUD<
CreateVehicleDto,
UpdateVehicleDto,
VehicleService
> {
  constructor(private readonly Service: VehicleService) {
    super(Service);
  }
}