import { IsArray, IsString, MinLength } from "class-validator";
import { BasicInformationEntity } from "src/common/base/entities";
import { Marca } from "src/marcas/entities/marca.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('parte')
export class Parte extends BasicInformationEntity {

    @ManyToOne(() => Marca, { nullable: true, eager: true })
    marca: Marca;

    @Column()
    precioBase: number;
                   
    @Column({type:'simple-array', nullable: true, array: true})
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]
}
