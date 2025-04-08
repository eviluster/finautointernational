import { IsArray, IsString, MinLength } from "class-validator";
import { CajaCambio } from "src/caja-cambio/entities/caja-cambio.entity";
import { BasicInformationEntity } from "src/common/base/entities";
import { Engine } from "src/engines/entities/engine.entity";
import { Marca } from "src/marcas/entities/marca.entity";
import { Modelo } from "src/modelos/entities/modelo.entity";
import { NombreTipoSuspension } from "src/nombre-tipo-suspension/entities/nombre-tipo-suspension.entity";
import { TipoFreno } from "src/tipo-freno/entities/tipo-freno.entity";
import { TipoNeumatico } from "src/tipo-neumatico/entities/tipo-neumatico.entity";
import { TipoSuspension } from "src/tipo-suspension/entities/tipo-suspension.entity";
import { Traccion } from "src/traccion/entities/traccion.entity";
import { VehicleSuplement } from "src/vehicle-suplement/entities/vehicle-suplement.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('vehicle')
export class Vehicle extends BasicInformationEntity {
    // Caja Cambio
    @ManyToOne(() => CajaCambio,{ eager: true })
    cajaCambio: CajaCambio;
    // Engine
    @ManyToOne(() => Engine, { eager: true })
    engine: Engine;

    // marca
    @ManyToOne(() => Marca,{eager: true})
    marca: Marca;

    // modelo
    @ManyToOne(() => Modelo,{eager: true})
    modelo: Modelo;

    // tipo freno   
    @ManyToOne(() => TipoFreno,{ eager: true })
    tipoFreno: TipoFreno;

    // tipo Neumatico
    @ManyToOne(() => TipoNeumatico,{ eager: true } )
    tipoNeumatico: TipoNeumatico;

    // tracciones
    @ManyToOne(() => Traccion,{ eager: true })
    traccionDelantera: Traccion;    

    @ManyToOne(() => Traccion,{ eager: true })
    traccionTrasera: Traccion;

    // tipo suspension
    @ManyToOne(() => TipoSuspension,{ eager: true })
    tipoSuspension: TipoSuspension;
    
    // nombre tipo suspension
    @ManyToOne(() => NombreTipoSuspension,{ eager: true })
    nombreTipoSuspension: NombreTipoSuspension;

    // dimensiones array de 3 lugares
    @Column({ type: "simple-array", nullable: true })
    dimensiones: number[];

    @Column({ type: "simple-array", nullable: true })
    tamanoCajaCarga: number[];

    @Column({})
    asientos: number

    @Column({})
    distanciaSuelo: number

    @Column({})
    pesoVacio: number

    @Column({})
    desplazamiento: number

    @Column({})
    distanciaEjes: number

    @Column({})
    potenciaMax: number

    @Column({})
    torque: number

    @Column({})
    velocidadMax: number

    @Column({})
    capacitdadTanqueCombustible: number

    @Column({}) 
    PrecioBase: number
                
    @Column({type:'simple-array', nullable: true, array: true})
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]

    @OneToMany(() => VehicleSuplement, vehicleSuplement => vehicleSuplement.vehicle_id)
    supplements: VehicleSuplement[];
}
