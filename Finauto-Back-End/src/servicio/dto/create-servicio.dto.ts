import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString, Min, MinLength } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateServicioDto  extends BaseExtendedDto {

    @ApiProperty()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(1)
    precioBase: number;
                   
    @ApiProperty()
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]

}
