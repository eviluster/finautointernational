import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto/multilanguage.dto';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateSectionDto  extends BaseExtendedDto {

  @ApiProperty({ type: () => MultilanguageDto })
  title: MultilanguageDto;

  @ApiProperty({ type: () => MultilanguageDto })
  headerText: MultilanguageDto;
}
