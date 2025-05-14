import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MultilanguageDto {

  @ApiProperty()
  @IsString()
  es?: string;

  @ApiProperty()
  @IsString()
  en?: string;

  [index: string]: string;
}
