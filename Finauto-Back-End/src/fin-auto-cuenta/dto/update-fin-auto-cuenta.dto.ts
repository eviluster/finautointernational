import { PartialType } from '@nestjs/swagger';
import { CreateFinAutoCuentaDto } from './create-fin-auto-cuenta.dto';

export class UpdateFinAutoCuentaDto extends PartialType(CreateFinAutoCuentaDto) {}
