import { BasicInformationEntity } from "src/common/base/entities";
import { CuentaBancaria } from "src/cuenta-bancaria/entities/cuenta-bancaria.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('finauto_cuenta')
export class FinAutoCuenta  extends BasicInformationEntity{
    @ManyToOne(() => CuentaBancaria)
// , (cuenta) => cuenta.customers)
@JoinColumn({ name: 'cuenta_bancaria_id' })
cuentaBancaria: CuentaBancaria;

}
