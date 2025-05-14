import { CajaCambio } from 'src/caja-cambio/entities/caja-cambio.entity';
import { BasicEntity } from 'src/common/base/entities';
import { EquipoGarage } from 'src/equipo-garage/entities/equipo-garage.entity';
import { NombreTipoSuspension } from 'src/nombre-tipo-suspension/entities/nombre-tipo-suspension.entity';
import { PiezaAccesorio } from 'src/pieza-accesorio/entities/pieza-accesorio.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { TipoNeumatico } from 'src/tipo-neumatico/entities/tipo-neumatico.entity';
import { TipoSuspension } from 'src/tipo-suspension/entities/tipo-suspension.entity';
import { Traccion } from 'src/traccion/entities/traccion.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { StateEnum, StatusEnum } from '../enum/state.enum.dto';
import { Catprod } from 'src/catprod/entities/catprod.entity';

@Entity('producto')
export class Producto extends BasicEntity {
  @Column({})
  photo: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.Stock,
  })
  status: StatusEnum;

  @Column({
    type: 'enum',
    enum: StateEnum,
    default: StateEnum.Disponible,
  })
  state: StateEnum;

  @ManyToOne(() => Servicio, { nullable: true, eager: true })
  servicio: Servicio;

  @ManyToOne(() => PiezaAccesorio, { nullable: true, eager: true })
  pieza: PiezaAccesorio;

  @ManyToOne(() => EquipoGarage, { nullable: true, eager: true })
  equipoGarage: EquipoGarage;

  @ManyToOne(() => Vehicle, { nullable: true, eager: true })
  vehicle: Vehicle;

  @Column({})
  price: number;

  @Column({ type: 'decimal', nullable: true })
  offertPrice: number;

  @Column({ type: 'timestamp', nullable: true })
  vigencia?: Date;

  @ManyToOne(() => Catprod, { nullable: true, eager: true })
  catprod: Catprod;
}
