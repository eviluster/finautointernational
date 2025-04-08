import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MultilanguageDto } from "src/common/base/dto";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";
import { RulesDto } from "src/common/base/dto/rules.dto";

export class CreateCustomerDto  extends BaseExtendedDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    lineOne: string;
    lineTwo: string;
    cityTown: string;
    postalCode: string;

}
