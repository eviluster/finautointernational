import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto/multilanguage.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class SearchMunicipalityDto {
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
  province?: string;

  // @ApiProperty({ type: () => MultilanguageDto })
  // @IsOptional()
  // provinceName?: MultilanguageDto = { es: null, en: null };
  }
