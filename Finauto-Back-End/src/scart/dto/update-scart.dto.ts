import { PartialType } from '@nestjs/swagger';
import { CreateScartDto } from './create-scart.dto';

export class UpdateScartDto extends PartialType(CreateScartDto) {}
