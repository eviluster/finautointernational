import { BasicInformationEntity } from "src/common/base/entities";
import { Section } from "src/sections/entities/section.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity('oferta')
export class Oferta extends BasicInformationEntity{

@ManyToOne(() => Section, )
// (section) => section.ofertas
section: Section;



}
