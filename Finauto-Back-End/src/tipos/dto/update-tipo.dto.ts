import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTipoDto } from './create-tipo.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateTipoDto extends PartialType(CreateTipoDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string;  
  @ApiProperty({
    type: RulesDto
  })
  @IsNotEmpty()
  rules: RulesDto 
}
