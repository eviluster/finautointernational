import { PartialType } from '@nestjs/swagger';
import { CreateOfertaEstadoDto } from './create-oferta-estado.dto';

export class UpdateOfertaEstadoDto extends PartialType(CreateOfertaEstadoDto) {}
