import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateProductoDto  extends BaseExtendedDto{
    photo: string;

    status: 'stock' | 'published' | 'inactive';

    servicio: string;

    parte: string;

    equipoGarage: string;

    vehicle: string;
   
}
