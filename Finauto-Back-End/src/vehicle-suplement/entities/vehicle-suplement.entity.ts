import { BasicInformationEntity } from "src/common/base/entities";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
@Entity('vehicle_entity')
export class VehicleSuplement extends BasicInformationEntity {
    
    @Column({nullable: false})
    vehicleId: string

    @ManyToOne(() => Vehicle, vehicle => vehicle.supplements,
    {nullable:true})
    @JoinColumn()
    vehicle: Vehicle

    @Column({nullable: false})
    price: number
}
