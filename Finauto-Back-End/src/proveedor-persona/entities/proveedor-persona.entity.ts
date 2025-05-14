import { BasicEntity } from "src/common/base/entities";
import { Persona } from "src/persona-juridica/entities/persona-juridica.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";
import { ManyToOne } from "typeorm";

export class ProveedorPersona extends BasicEntity {
//   relacion con persona y proveedor 
  @ManyToOne(type => Persona, persona => persona.id)
  personaId: Persona;

  @ManyToOne(type => Proveedor, proveedor => proveedor.id)
    proveedorId: Proveedor

}
