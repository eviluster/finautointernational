import { PartialType } from '@nestjs/swagger';
import { CreateTipoNeumaticoDto } from './create-tipo-neumatico.dto';

export class UpdateTipoNeumaticoDto extends PartialType(CreateTipoNeumaticoDto) {}
