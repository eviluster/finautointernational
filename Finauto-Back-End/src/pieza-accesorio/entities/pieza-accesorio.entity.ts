import { IsArray, IsString, MinLength } from "class-validator"
import { BasicInformationEntity } from "src/common/base/entities"
import { Column } from "typeorm"

export class PiezaAccesorio  extends BasicInformationEntity{
        
    @Column({}) 
    PrecioBase: number
                
    @Column({type:'simple-array', nullable: true, array: true})
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]
    
}
