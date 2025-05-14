import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateVentaDto extends BaseExtendedDto {
  @IsNotEmpty()
  @IsString()
  scart: string;

  @IsNotEmpty()
  @IsString()
  producto: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
}
