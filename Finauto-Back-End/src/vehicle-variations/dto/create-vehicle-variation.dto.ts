import { IsNotEmpty, IsString } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateVehicleVariationDto  extends BaseExtendedDto{

    @IsString()
    @IsNotEmpty()
    value: string;
}
