import { PartialType } from '@nestjs/swagger';
import { CreatePersonaTipoDto } from './create-persona-tipo.dto';

export class UpdatePersonaTipoDto extends PartialType(CreatePersonaTipoDto) {}
