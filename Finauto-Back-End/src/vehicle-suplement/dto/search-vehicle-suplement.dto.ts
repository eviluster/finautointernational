import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto/multilanguage.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class SearchVehicleSuplementDto {
  @ApiProperty({ type: () => MultilanguageDto })
  @IsOptional()
  name?: MultilanguageDto = { es: null, en: null };

  @ApiProperty({ type: () => MultilanguageDto })
  @IsOptional()
  description?: MultilanguageDto  = { es: null, en: null };
  
  @IsUUID()
  @ApiProperty()
  @IsString()
  @IsOptional()  
  tipoUm?: string;
}
