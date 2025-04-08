import { BasicInformationEntity } from "src/common/base/entities";
import { Column, Entity } from "typeorm";
@Entity('customer')
export class Customer extends BasicInformationEntity {

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    addessLineOne: string;

    @Column({nullable: true})
    addessLineTwo: string;

    @Column({nullable: true})
    cityTown: string;

    @Column({nullable: true})
    postalCode: string;

}
