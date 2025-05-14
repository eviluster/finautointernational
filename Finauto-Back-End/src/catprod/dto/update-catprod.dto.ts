import { PartialType } from '@nestjs/swagger';
import { CreateCatprodDto } from './create-catprod.dto';

export class UpdateCatprodDto extends PartialType(CreateCatprodDto) {}
