import { PartialType } from '@nestjs/swagger';
import { CreatePersonaDto } from './create-persona-juridica.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {}
