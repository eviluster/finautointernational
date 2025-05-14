import { ApiProperty } from "@nestjs/swagger";
import { MultilanguageDto } from "./multilanguage.dto";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { RulesDto } from "./rules.dto";

export class BaseExtendedDto {

    @ApiProperty({type: String})
    @IsOptional()
    @IsString()
    id?: string;

    @ApiProperty({ type: () => MultilanguageDto })
    name: MultilanguageDto  = { es: null, en: null };

    @ApiProperty({ type: () => MultilanguageDto })
    description: MultilanguageDto  = { es: null, en: null };

    @ApiProperty({ required: false, default: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean = true;

    @ApiProperty({ required: false })
    @IsOptional()
    rules?: RulesDto;
}

