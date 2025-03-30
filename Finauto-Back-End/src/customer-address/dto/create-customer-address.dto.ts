import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { RulesDto } from "src/common/base/dto/rules.dto";

export class CreateCustomerAddressDto {
    @IsString()
    addessLineOne: string;

    @IsString()
    addessLineTwo: string;

    @IsString()
    cityTown: string;

    @IsString()
    postalCode: string;
    
    @IsString()
    customerAddressType: string;

    @IsString()
    @IsUUID()
    customer: string;

    @ApiProperty({ required: false })
    @IsOptional()
    rules?: RulesDto
}
