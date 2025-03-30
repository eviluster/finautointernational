import { PartialType } from '@nestjs/swagger';
import { CreateVehicleVariationDto } from './create-vehicle-variation.dto';

export class UpdateVehicleVariationDto extends PartialType(CreateVehicleVariationDto) {}
