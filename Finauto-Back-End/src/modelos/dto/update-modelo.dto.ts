import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateModeloDto } from './create-modelo.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateModeloDto extends PartialType(CreateModeloDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string; 
  
  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
