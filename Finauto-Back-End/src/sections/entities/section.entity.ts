import { ExtendedEntity } from 'src/common/base/entities';
import { MultilanguageType } from '../../common/base/types/multilanguage.type';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity('sections')
export class Section extends ExtendedEntity {
  @Column('json')
  title: MultilanguageType;
}
