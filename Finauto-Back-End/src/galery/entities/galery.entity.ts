import { Entity, Column } from 'typeorm';
import { BasicInformationEntity } from 'src/common/base/entities';

@Entity('galery')
export class Galery extends BasicInformationEntity {
  @Column()
  photo: string;
}
