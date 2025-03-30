import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, Min, MinLength } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateParteDto  extends BaseExtendedDto {
    
    @ApiProperty()
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    marca: string;

    @ApiProperty()
    @IsNotEmpty()
    @Min(1)
    @IsNumber()
    precioBase: number;
                   
    @ApiProperty()
    @IsNotEmpty()
    @IsString({each: true})
    @MinLength(1, {each: true})
    @IsArray()
    @ArrayMaxSize(10)
    galery: string[];
}
