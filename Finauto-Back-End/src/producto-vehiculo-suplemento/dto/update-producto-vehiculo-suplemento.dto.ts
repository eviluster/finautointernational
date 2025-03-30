import { PartialType } from '@nestjs/swagger';
import { CreateProductoVehiculoSuplementoDto } from './create-producto-vehiculo-suplemento.dto';

export class UpdateProductoVehiculoSuplementoDto extends PartialType(CreateProductoVehiculoSuplementoDto) {}
