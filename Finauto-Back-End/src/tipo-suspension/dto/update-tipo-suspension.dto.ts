import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTipoSuspensionDto } from './create-tipo-suspension.dto';
import { IsString, IsUUID, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateTipoSuspensionDto extends PartialType(CreateTipoSuspensionDto) {
    @ApiProperty()
    @IsString()
    @IsUUID()
    id: string;  
  
    @ApiProperty()
    @IsNotEmpty()
    rules: RulesDto
}
