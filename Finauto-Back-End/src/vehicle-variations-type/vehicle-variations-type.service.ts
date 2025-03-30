import { Injectable } from '@nestjs/common';
import { CreateVehicleVariationsTypeDto } from './dto/create-vehicle-variations-type.dto';
import { UpdateVehicleVariationsTypeDto } from './dto/update-vehicle-variations-type.dto';

@Injectable()
export class VehicleVariationsTypeService {
  create(createVehicleVariationsTypeDto: CreateVehicleVariationsTypeDto) {
    return 'This action adds a new vehicleVariationsType';
  }

  findAll() {
    return `This action returns all vehicleVariationsType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleVariationsType`;
  }

  update(id: number, updateVehicleVariationsTypeDto: UpdateVehicleVariationsTypeDto) {
    return `This action updates a #${id} vehicleVariationsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleVariationsType`;
  }
}
