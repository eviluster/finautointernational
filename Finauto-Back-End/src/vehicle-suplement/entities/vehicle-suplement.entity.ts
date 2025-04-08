import { BasicInformationEntity } from "src/common/base/entities";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
@Entity('vehicle_entity')
export class VehicleSuplement extends BasicInformationEntity {
    
    @ManyToOne(() => Vehicle, vehicle => vehicle.supplements,
    {nullable:true})
    @JoinColumn({ name: 'vehicle_id' })
    vehicle_id: Vehicle

    @Column({nullable: false})
    price: number
}
