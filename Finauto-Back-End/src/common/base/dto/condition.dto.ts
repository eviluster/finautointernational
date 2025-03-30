import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MultilanguageDto } from './multilanguage.dto';
import { LogicalOperators } from '../utils/Builder/enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EnumTypeOf } from 'src/common/enum/typeOf.enum';

export class ConditionDto {
  @ApiProperty()
  table: string;
  @ApiProperty()
  field: string;

  @ApiProperty({
    default: EnumTypeOf.STRING
  })
  @IsEnum(EnumTypeOf)
  fieldType: EnumTypeOf = EnumTypeOf.STRING

  @ApiPropertyOptional({
    type: String
  })
  @IsString()
  @IsOptional()
  objectIndex?: string 
  @ApiProperty()
  value: any | Date | boolean | string | MultilanguageDto | [];
  @ApiProperty()
  operator: LogicalOperators
}
