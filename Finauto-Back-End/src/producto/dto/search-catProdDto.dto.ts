import { IsDate, IsString, IsUUID } from "class-validator";

export class SearchByCatprodDto {
    @IsString()
    @IsUUID()
    catprod:string
   
}
