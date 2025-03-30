import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTipoFrenoDto } from './create-tipo-freno.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateTipoFrenoDto extends PartialType(CreateTipoFrenoDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string;  
   
  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
