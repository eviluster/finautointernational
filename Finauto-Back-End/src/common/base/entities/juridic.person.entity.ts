import { Column } from 'typeorm';
import { ExtendedEntity } from './extended.entity';
import { MultilanguageType } from '../types/multilanguage.type';

export abstract class JuridicPerson extends ExtendedEntity {
  @Column({})
  email: string;

  @Column()
  phone: string;

  @Column('json')
  direccion: MultilanguageType;
}
