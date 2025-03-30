import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEngineDto } from './create-engine.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { MethodEnum } from '../../common/enum/method.enum';
import { KindEnum } from '../../common/enum/kind.enum';
import { IsString, IsUUID } from 'class-validator';

export class UpdateEngineDto extends PartialType(CreateEngineDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string; 
  rules: RulesDto = {
    method: MethodEnum.UPDATE,
    comparisonKind: KindEnum.UINQUE,
    field: ['id', 'name'],
  };
}
