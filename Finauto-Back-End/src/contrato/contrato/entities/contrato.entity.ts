import { BasicInformationEntity } from "src/common/base/entities";
import { ContratoEstado } from "src/contrato-estado/entities/contrato-estado.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Section } from "src/sections/entities/section.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, ManyToOne } from "typeorm";
@Entity('contrato')
// Arreglar relacion a producto
export class Contrato extends BasicInformationEntity {

    @ManyToOne(() => Section,{ nullable:true})
    //  (section) => section.contratos
    section: Section;

    @ManyToOne(() => Vehicle,  { nullable:true})
    // (vehicle) => vehicle.contratos,
    producto: Producto;
    @ManyToOne(() => ContratoEstado, { nullable: true })
    contratoEstado: ContratoEstado;

    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    precio: number;
    // parte=>pieza
// estados de contrato
// Abierto1  
// equip garage,piezas access ++ catec , servicio  = prod de glorieta
    // Producto
// estado => Prod   => Envio => Almacenado => Entregado => Cancelado => En Oferta
                          // => reservado
}
