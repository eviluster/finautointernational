import { BasicInformationEntity } from "src/common/base/entities";
import { CustomerAddressType } from "src/customer-address-type/entities/customer-address-type.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity('customer_address')
export class CustomerAddress extends BasicInformationEntity {
    @Column()
    addessLineOne: string;

    @Column()
    addessLineTwo: string;

    @Column()
    cityTown: string;

    @Column()
    postalCode: string;

    @ManyToOne(() => CustomerAddressType,{eager: true})
    @JoinColumn()
    customerAddressType: CustomerAddressType;

    @ManyToOne(() => Customer, { eager: true })
    @JoinColumn()
    customer: Customer;

}
