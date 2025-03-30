import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { CreateTipoPersonaDto } from './create-tipo-persona-juridica.dto';

export class UpdateTipoPersonaDto extends PartialType(CreateTipoPersonaDto) {
    @ApiProperty({
        type: 'uuid'
    })
    @IsString()
    @IsUUID()
    id: string; 

    @ApiProperty()
    @IsNotEmpty() 
    rules: RulesDto 
    
}
