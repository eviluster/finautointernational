import { BasicInformationEntity } from "src/common/base/entities";
import { Section } from "src/sections/entities/section.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { StateEnum } from "../enum/state.enum.dto";
import { Producto } from "src/producto/entities/producto.entity";

@Entity('oferta')
export class Oferta extends BasicInformationEntity{

@ManyToOne(() => Section, )
// (section) => section.ofertas
section: Section;

@ManyToOne(() => Producto)
// , (producto) => producto.ofertas)
producto: Producto;

@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
precio: number;

@Column({ type: 'date', nullable: true })
fechaVigencia: Date;

@Column({ type: 'enum', enum: StateEnum, default: StateEnum.Disponible })
state: StateEnum;

}
