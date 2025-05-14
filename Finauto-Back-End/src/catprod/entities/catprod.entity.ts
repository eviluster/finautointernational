import { Entity, Column } from 'typeorm';
import { BasicInformationEntity } from 'src/common/base/entities';

@Entity('catprod')
export class Catprod extends BasicInformationEntity {
  @Column({
    type: 'enum',
    enum: ['vehicle', 'service', 'parte', 'equipo']
  })
  tipo: 'vehicle' | 'service' | 'parte' | 'equipo';

  
}
