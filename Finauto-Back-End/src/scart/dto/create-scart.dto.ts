import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsArray, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateScartDto extends BaseExtendedDto {

  @IsArray()
  @IsNotEmpty()
  @MinLength(1)
  @IsString({ each: true }) 
  productIds: string[];

  @IsArray()
  @IsNotEmpty()
  @MinLength(1)
  quantities: number[];
}
