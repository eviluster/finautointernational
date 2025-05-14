import { PartialType } from '@nestjs/swagger';
import { CreateEquipoGarageDto } from './create-equipo-garage.dto';

export class UpdateEquipoGarageDto extends PartialType(CreateEquipoGarageDto) {}
