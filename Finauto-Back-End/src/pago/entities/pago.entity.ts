import { Comercial } from "src/comercial/entities/comercial.entity";
import { BasicInformationEntity } from "src/common/base/entities";
import { CuentaBancaria } from "src/cuenta-bancaria/entities/cuenta-bancaria.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Reserva } from "src/reserva/entities/reserva.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { EstadoPago } from "../enum/pago.enum";
import { CustomerCuenta } from "src/customer-cuenta/entities/customer-cuenta.entity";
import { FinAutoCuenta } from "src/fin-auto-cuenta/entities/fin-auto-cuenta.entity";

@Entity('pago')
export class Pago extends BasicInformationEntity {
    @ManyToOne(() => Customer)
    // customer => customer.pagos)
    @JoinColumn()
    customer: Customer;
    // #Factura
    @Column({ type: 'varchar', nullable: false, length: 100 })
    facturaNumero: string;
    // Monto
    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: false })
    monto: number;
    // Fecha de rgistro
    @Column({ type: 'date', nullable: false })
    fechaRegistro: Date;
    // Fecha de factura
    @Column({ type: 'date', nullable: false })
    fechaFactura: Date;
    // user => comercial => hizo venta
    @ManyToOne(() => Comercial)
    @JoinColumn({ name: 'comercial_id' })
    comercial_id: Comercial;

    @ManyToOne(() => CuentaBancaria)
    @JoinColumn({ name: 'cuentaBancariaOrigen' })
    cuentaBancariaOrigen: CustomerCuenta;

    @ManyToOne(() => FinAutoCuenta)
    @JoinColumn({ name: 'cuentaBancariaDestino' })
    cuentaBancariaDestino: FinAutoCuenta;

    // Reserva 
    @ManyToOne(() => Reserva)
    @JoinColumn({ name: 'reserva_id' })
    reserva_id: Reserva;
    
    @Column({ type: 'enum', enum: EstadoPago, default: EstadoPago.REGISTRADO })
    estado: EstadoPago;
}
