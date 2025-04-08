import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";


export class CreateVehicleSuplementDto  extends BaseExtendedDto { 

    @IsString()
    @IsUUID()
    @IsNotEmpty()
    vehicle_id: string;

    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @IsNumber()
    price: number;
}
  
