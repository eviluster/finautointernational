import { PartialType } from '@nestjs/swagger';
import { CreateContratoEstadoDto } from './create-contrato-estado.dto';

export class UpdateContratoEstadoDto extends PartialType(CreateContratoEstadoDto) {}
