import { BasicEntity } from 'src/common/base/entities';
import { Column, Entity } from 'typeorm';
@Entity('configuracion')
export class Configuracion extends BasicEntity {
  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  porcientoConfReserva: number;

  @Column()
  porcientoMinPrice: number;

  @Column()
  tiempoGarantia: number;

  @Column({ nullable: true })
  importPriceCar: number;

  @Column({ nullable: true })
  importPriceService: number;

  @Column({ nullable: true })
  importPriceParte: number;

  @Column({ nullable: true })
  importPriceEquipoGarage: number;

  @Column()
  kmGarantia: number;

  @Column()
  validezOferta: number;
}
