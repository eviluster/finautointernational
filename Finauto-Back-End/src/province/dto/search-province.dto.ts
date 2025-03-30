import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto/multilanguage.dto';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class SearchProvinceDto {
  @ApiProperty({ type: () => MultilanguageDto })
  @IsOptional()
  name?: MultilanguageDto = { es: null, en: null };

  @ApiProperty({ type: () => MultilanguageDto })
  @IsOptional()
  description?: MultilanguageDto  = { es: null, en: null };

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isCapital?: boolean;

  // @ApiProperty({ type: () => MultilanguageDto })
  // @IsOptional()
  // countryName?: MultilanguageDto = { es: null, en: null };
  }
