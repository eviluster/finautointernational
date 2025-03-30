import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto/multilanguage.dto';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class SearchComercialDto {
  @ApiProperty({ type: () => MultilanguageDto })
  @IsOptional()
  name?: MultilanguageDto = { es: null, en: null };
}
