import { Entity, Column } from 'typeorm';
import { BasicInformationEntity } from 'src/common/base/entities';

@Entity('venta')
export class Venta extends BasicInformationEntity {
  @Column()
  scart: string;

  @Column()
  producto: string;

  @Column()
  cantidad: number;
}
