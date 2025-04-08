import { Comercial } from "src/comercial/entities/comercial.entity";
import { BasicInformationEntity } from "src/common/base/entities";
import { Oferta } from "src/oferta/entities/oferta.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { StateEnum } from "../enum/state.enum";
import { Producto } from "src/producto/entities/producto.entity";

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

@ManyToOne(() => Producto, { nullable: true })
contrato: Producto;

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
}
