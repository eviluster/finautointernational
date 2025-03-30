import { PartialType } from '@nestjs/swagger';
import { CreateVehicleVariationsTypeDto } from './create-vehicle-variations-type.dto';

export class UpdateVehicleVariationsTypeDto extends PartialType(CreateVehicleVariationsTypeDto) {}
