import { CajaCambio } from "src/caja-cambio/entities/caja-cambio.entity";
import { BasicEntity } from "src/common/base/entities";
import { EquipoGarage } from "src/equipo-garage/entities/equipo-garage.entity";
import { NombreTipoSuspension } from "src/nombre-tipo-suspension/entities/nombre-tipo-suspension.entity";
import { Parte } from "src/parte/entities/parte.entity";
import { Servicio } from "src/servicio/entities/servicio.entity";
import { TipoNeumatico } from "src/tipo-neumatico/entities/tipo-neumatico.entity";
import { TipoSuspension } from "src/tipo-suspension/entities/tipo-suspension.entity";
import { Traccion } from "src/traccion/entities/traccion.entity";
import { VehicleSuplement } from "src/vehicle-suplement/entities/vehicle-suplement.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('producto')
export class Producto extends BasicEntity {

    @Column({})
    photo: string;

    @Column({
        type: 'enum',
        enum: ['stock', 'published', 'inactive'],
        default: 'stock'
    })
    status: 'stock' | 'published' | 'inactive';


    @ManyToOne(() => Servicio,  { nullable:true, eager: true })
    servicio: Servicio;

    @ManyToOne(() => Parte, { nullable: true, eager: true })
    parte: Parte;

    @ManyToOne(() => EquipoGarage, { nullable: true, eager: true })
    equipoGarage: EquipoGarage;

    @ManyToOne(() => Vehicle,  { nullable:true, eager: true })
    vehicle: Vehicle;

}
