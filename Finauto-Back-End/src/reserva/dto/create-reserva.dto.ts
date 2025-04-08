import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateReservaDto  extends BaseExtendedDto{
apellido: string;
correo: string;
fecha: string;
hora: string;
direccion: string;
comercial?: string;
oferta?: string;
contrato?: string;
}
