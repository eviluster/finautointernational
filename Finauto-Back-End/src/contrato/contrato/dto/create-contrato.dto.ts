import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateContratoDto  extends BaseExtendedDto{
    section: string;
    vehicle: string;
    producto: string;
    contratoEstado: string;
    precio: number;
}
