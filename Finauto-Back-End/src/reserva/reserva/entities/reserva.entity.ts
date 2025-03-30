import { Comercial } from "src/comercial/entities/comercial.entity";
import { BasicInformationEntity } from "src/common/base/entities";
import { Contrato } from "src/contrato/entities/contrato.entity";
import { Oferta } from "src/oferta/entities/oferta.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('reserva')
export class Reserva extends BasicInformationEntity{

    @Column()
    apellido:string
    @Column()
    correo:string
    @Column()
    fecha:string
    @Column()
    hora:string
    @Column()
    direccion:string

    @ManyToOne(() => Comercial, { nullable:true})
    // (comercial) => comercial.reservas, 
    comercial: Comercial;

@ManyToOne(() => Oferta, { nullable: true })
oferta: Oferta;

@ManyToOne(() => Contrato, { nullable: true })
contrato: Contrato;
}
