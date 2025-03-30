import { BasicInformationEntity } from "src/common/base/entities";
import { Section } from "src/sections/entities/section.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Entity, ManyToOne } from "typeorm";
@Entity('contrato')
// Arreglar relacion a producto
export class Contrato extends BasicInformationEntity {

    @ManyToOne(() => Section,{ nullable:true})
    //  (section) => section.contratos
    section: Section;

    @ManyToOne(() => Vehicle,  { nullable:true})
    // (vehicle) => vehicle.contratos,
    vehicle: Vehicle;
    // parte=>pieza
// estados de contrato
// Abierto1  
// equip garage,piezas access ++ catec , servicio  = prod de glorieta
    // Producto
// estado => Prod   => Envio => Almacenado => Entregado => Cancelado => En Oferta
                          // => reservado
}
