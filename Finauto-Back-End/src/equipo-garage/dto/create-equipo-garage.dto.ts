import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateEquipoGarageDto extends BaseExtendedDto {
  @IsNumber()
  precioBase: number;

  @ApiProperty({ type: [String], required: false, minItems: 1, maxItems: 10 })
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  galery: string[];
}
