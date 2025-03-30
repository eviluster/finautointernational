import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaPiezaAccesorioDto } from './create-categoria-pieza-accesorio.dto';

export class UpdateCategoriaPiezaAccesorioDto extends PartialType(CreateCategoriaPiezaAccesorioDto) {}
