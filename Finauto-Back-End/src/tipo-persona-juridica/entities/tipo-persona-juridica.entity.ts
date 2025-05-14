import { ExtendedEntity } from "src/common/base/entities";
import { Persona } from "src/persona-juridica/entities/persona-juridica.entity";
import { AfterInsert, Entity, OneToMany } from "typeorm";


@Entity('tipo_persona')
export class TipoPersona extends ExtendedEntity {
  @OneToMany(() => Persona, (Persona) => Persona.tipo_persona_id, {
    cascade: false,
  })
  personasJuridicas: Persona[];
}
