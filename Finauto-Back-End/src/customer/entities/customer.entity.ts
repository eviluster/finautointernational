import { BasicInformationEntity } from "src/common/base/entities";
import { Column, Entity } from "typeorm";
@Entity('customer')
export class Customer extends BasicInformationEntity {

    @Column()
    email: string;

}
