import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleVariationsTypeService } from './vehicle-variations-type.service';
import { CreateVehicleVariationsTypeDto } from './dto/create-vehicle-variations-type.dto';
import { UpdateVehicleVariationsTypeDto } from './dto/update-vehicle-variations-type.dto';

@Controller('vehicle-variations-type')
export class VehicleVariationsTypeController {
  constructor(private readonly vehicleVariationsTypeService: VehicleVariationsTypeService) {}
}
