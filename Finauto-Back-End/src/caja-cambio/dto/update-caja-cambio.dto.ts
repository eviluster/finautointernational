import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCajaCambioDto } from './create-caja-cambio.dto';
import { IsUUID } from 'class-validator';

export class UpdateCajaCambioDto extends PartialType(CreateCajaCambioDto) {
    @ApiProperty()
    @IsUUID()
    id: string;
}
