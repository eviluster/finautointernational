import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateProvinceDto  extends BaseExtendedDto{

  @ApiProperty()
  @IsString()
  countryId: string;

  // @ApiProperty()
  // @IsBoolean()
  // isCapital: boolean;

}
