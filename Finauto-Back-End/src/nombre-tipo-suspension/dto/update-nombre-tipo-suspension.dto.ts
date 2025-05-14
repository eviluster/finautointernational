import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNombreTipoSuspensionDto } from './create-nombre-tipo-suspension.dto';
import { IsString, IsUUID, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateNombreTipoSuspensionDto extends PartialType(CreateNombreTipoSuspensionDto) {
    @ApiProperty()
    @IsString()
    @IsUUID()
    id: string;  
  
    @ApiProperty()
    @IsNotEmpty()
    rules: RulesDto
}
