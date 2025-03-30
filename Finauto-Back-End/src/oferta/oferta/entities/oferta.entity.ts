import { BasicInformationEntity } from "src/common/base/entities";
import { Contrato } from "src/contrato/entities/contrato.entity";
import { OfertaEstado } from "src/oferta-estado/entities/oferta-estado.entity";
import { Section } from "src/sections/entities/section.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('oferta')
export class Oferta extends BasicInformationEntity{

@ManyToOne(() => Section, )
// (section) => section.ofertas
section: Section;

@ManyToOne(() => Contrato)
// , (contrato) => contrato.ofertas)
contrato: Contrato;

@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
precio: number;

@ManyToOne(() => OfertaEstado)
ofertaEstado: OfertaEstado;

@Column({ type: 'date', nullable: true })
fechaVigencia: Date;

}
