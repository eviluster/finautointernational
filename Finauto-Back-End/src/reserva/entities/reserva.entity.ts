import { Comercial } from "src/comercial/entities/comercial.entity";
import { BasicInformationEntity } from "src/common/base/entities";
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
}
