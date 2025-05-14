import { IsString, IsUUID } from 'class-validator';
import { BaseExtendedDto } from 'src/common/base/dto/base.dto';

export class CreateReservaDto extends BaseExtendedDto {
  apellido: string;
  correo: string;
  fecha: string;
  hora: string;
  direccion: string;
  comercial?: string;

  @IsUUID()
  producto?: string;
  // si es servicio
  // nombreSolicitante: string;
  // correoSolicitante: string;
  @IsString()
  telefonoSolicitante: string;
  // tipoServicio: string;
  // fechaSolicitud: string;
  @IsString()
  comentarios: string;

  @IsUUID()
  user: string;

  // @IsUUID()
  // country: string;

  // @IsString()
  // dni: string;
}
