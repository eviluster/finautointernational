import { PartialType } from '@nestjs/swagger';
import { CreateProveedorPersonaDto } from './create-proveedor-persona.dto';

export class UpdateProveedorPersonaDto extends PartialType(CreateProveedorPersonaDto) {}
