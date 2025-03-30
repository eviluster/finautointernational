import { BasicEntity } from "src/common/base/entities";
import { Producto } from "src/producto/entities/producto.entity";
import { VehicleSuplement } from "src/vehicle-suplement/entities/vehicle-suplement.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity('producto-vehiculo-suplemento')

export class ProductoVehiculoSuplemento  extends BasicEntity {
@ManyToOne(() => Producto, { nullable: false })
producto: Producto;

@ManyToOne(() => VehicleSuplement, { nullable: false, eager:true })
vehicleSuplement: VehicleSuplement;
}
