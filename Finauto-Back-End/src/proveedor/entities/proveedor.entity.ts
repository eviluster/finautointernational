import { Entity } from 'typeorm';
import { JuridicPerson } from '../../common/base/entities';
import { ApiProperty } from '@nestjs/swagger';
import { MultilanguageDto } from '../../common/base/dto';

@Entity('proveedores')
export class Proveedor extends JuridicPerson {
  @ApiProperty({ type: () => MultilanguageDto })
  name: MultilanguageDto;

  @ApiProperty({ type: () => MultilanguageDto })
  description: MultilanguageDto;
}
