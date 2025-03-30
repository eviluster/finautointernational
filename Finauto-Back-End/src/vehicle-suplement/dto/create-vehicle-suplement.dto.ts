import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";


export class CreateVehicleSuplementDto  extends BaseExtendedDto { 

@IsString()
@IsUUID()
@IsNotEmpty()
vehicle: string;

@IsString()
@IsUUID()
@IsNotEmpty()
@IsNumber()
price: number;
}
  
