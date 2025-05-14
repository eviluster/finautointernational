import { PartialType } from '@nestjs/swagger';
import { CreatePiezaAccesorioDto } from './create-pieza-accesorio.dto';

export class UpdatePiezaAccesorioDto extends PartialType(CreatePiezaAccesorioDto) {}
