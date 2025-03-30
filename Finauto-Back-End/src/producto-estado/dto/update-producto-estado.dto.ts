import { PartialType } from '@nestjs/swagger';
import { CreateProductoEstadoDto } from './create-producto-estado.dto';

export class UpdateProductoEstadoDto extends PartialType(CreateProductoEstadoDto) {}
