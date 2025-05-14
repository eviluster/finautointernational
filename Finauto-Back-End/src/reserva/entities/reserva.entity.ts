import { Comercial } from 'src/comercial/entities/comercial.entity';
import { BasicInformationEntity } from 'src/common/base/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { StateEnum } from '../enum/state.enum';
import { Producto } from 'src/producto/entities/producto.entity';
import { User } from 'src/user/entities/user.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { Country } from 'src/country/entities/country.entity';

@Entity('reserva')
export class Reserva extends BasicInformationEntity {
  @Column()
  apellido: string;
  @Column()
  correo: string;
  @Column()
  fecha: string;
  @Column()
  hora: string;
  @Column()
  direccion: string;

  @ManyToOne(() => Comercial, { nullable: true })
  // (comercial) => comercial.reservas,
  comercial: Comercial;

  @ManyToOne(() => Producto, { nullable: false, eager: true })
  producto: Producto;

  @Column({ type: 'enum', enum: StateEnum, default: StateEnum.Ordenado })
  state: StateEnum;
  //  Para Pasar a producido
  @Column({ type: 'varchar', nullable: true })
  vin: string;
  @Column({ type: 'varchar', nullable: true })
  motor: string;

  //  Para Pasar a embarcado
  @Column({ type: 'varchar', nullable: true })
  bl: string;
  @Column({ type: 'varchar', nullable: true })
  contenedor: string;

  @Column({ type: 'varchar', nullable: true })
  telefonoSolicitante: string;

  @Column({ type: 'varchar', nullable: true })
  fechaSolicitud: string;
  @Column({ type: 'varchar', nullable: true })
  comentarios: string;

  // @ManyToOne(() => Country, { nullable: false, eager: true })
  // country: Country;

  // @Column({ type: 'varchar', nullable: true })
  // dni: string;

  @ManyToOne(() => User, { nullable: false, eager: true })
  user: User;
}
