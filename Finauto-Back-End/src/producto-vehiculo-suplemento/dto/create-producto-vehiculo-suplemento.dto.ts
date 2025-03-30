import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateProductoVehiculoSuplementoDto  extends BaseExtendedDto{
@ApiProperty()
@IsString()
@IsUUID()
@IsNotEmpty()
producto: string;

@ApiProperty()
@IsString()
@IsUUID()
@IsNotEmpty()
vehicleSuplement: string;
}
 