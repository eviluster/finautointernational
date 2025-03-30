import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVehicleSuplementDto } from './create-vehicle-suplement.dto';
import { IsString, IsUUID, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateVehicleSuplementDto extends PartialType(CreateVehicleSuplementDto) {
    @ApiProperty()
    @IsString()
    @IsUUID()
    id: string;  
  
    @ApiProperty()
    @IsNotEmpty()
    rules: RulesDto
  }
  
