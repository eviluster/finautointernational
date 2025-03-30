import { Entity } from 'typeorm';
import { ExtendedEntity } from '../../common/base/entities';

@Entity('engines')
export class Engine extends ExtendedEntity {}
