import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateEquipoGarageDto  extends BaseExtendedDto {

  
  @ApiProperty({ type: [String], required: false, minItems: 1, maxItems: 10 })
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  galery: string[];


}
