import { IsArray, IsString, MinLength } from "class-validator";
import { BasicInformationEntity } from "src/common/base/entities";
import { Column, Entity } from "typeorm";
@Entity('equipo_garage')
export class EquipoGarage extends BasicInformationEntity {
               
    @Column({type:'simple-array', nullable: true, array: true})
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]
}
