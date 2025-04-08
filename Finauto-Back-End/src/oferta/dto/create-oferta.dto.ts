import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateOfertaDto  extends BaseExtendedDto{
section: string;
contrato: string;
precio: number;
ofertaEstado: string;
fechaVigencia: Date;
}
