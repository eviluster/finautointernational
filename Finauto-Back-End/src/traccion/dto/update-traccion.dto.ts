import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTraccionDto } from './create-traccion.dto';
import { IsString, IsUUID, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateTraccionDto extends PartialType(CreateTraccionDto) {
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
  