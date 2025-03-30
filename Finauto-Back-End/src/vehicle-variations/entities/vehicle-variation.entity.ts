import { BasicInformationEntity } from "src/common/base/entities";
import { Column, Entity } from "typeorm";

@Entity('vehicle_variation')
export class VehicleVariation extends BasicInformationEntity {
    @Column()
    value: string;

}
