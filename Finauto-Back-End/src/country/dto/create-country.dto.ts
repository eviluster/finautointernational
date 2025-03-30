import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';
import { MultilanguageDto } from 'src/common/base/dto';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateCountryDto extends BaseExtendedDto {

  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsInt()
  numericCode: number;

}
