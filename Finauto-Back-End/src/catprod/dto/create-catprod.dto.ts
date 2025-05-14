import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateCatprodDto extends BaseExtendedDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(['vehicle', 'service', 'parte', 'equipo'])
  tipo: 'vehicle' | 'service' | 'parte' | 'equipo';
}
