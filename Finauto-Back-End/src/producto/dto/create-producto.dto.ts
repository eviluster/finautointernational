import { BaseExtendedDto } from 'src/common/base/dto/base.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsDate,
  IsOptional,
  IsDateString,
  ValidateIf,
} from 'class-validator';
import { StatusEnum } from '../enum/state.enum.dto';

export class CreateProductoDto extends BaseExtendedDto {
  photo: string;

  status: 'stock' | 'published' | 'offert' | 'inactive';

  price: number;

  @ApiProperty({ type: String, format: 'uuid', nullable: false })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  servicio: string;

  @ApiProperty({ type: String, format: 'uuid', nullable: false })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  pieza: string;

  @ApiProperty({ type: String, format: 'uuid', nullable: false })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  equipoGarage: string;

  @ApiProperty({ type: String, format: 'uuid', nullable: false })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  vehicle: string;

  @ValidateIf((o) => o.status === StatusEnum.Offert)
  @IsDateString({}, { message: 'La vigencia debe ser fecha ISO válida' })
  vigencia?: string;

  @IsString()
  @IsUUID()
  catprod: string;
}
