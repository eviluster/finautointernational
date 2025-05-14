import { Entity, Column } from 'typeorm';
import { BasicInformationEntity } from 'src/common/base/entities';

@Entity('scart')
export class Scart extends BasicInformationEntity {

  @Column('simple-array', { nullable: true })
  productIds: string[];

  @Column('simple-array', { nullable: true })
  quantities: number[];
}
