import { ExtendedEntity } from 'src/common/base/entities';
import { Entity } from 'typeorm';

@Entity('tipos')
export class Tipo extends ExtendedEntity {}
