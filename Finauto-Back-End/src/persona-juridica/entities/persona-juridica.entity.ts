import { JuridicPerson } from "src/common/base/entities";
import { TipoPersona } from "src/tipo-persona-juridica/entities/tipo-persona-juridica.entity";
 import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('persona')
export class Persona extends JuridicPerson {
  @ManyToOne(() => TipoPersona, (tipoPersona) => tipoPersona.personasJuridicas, {
    eager: false,
  })
  @JoinColumn({ name: 'tipo_persona_id' })
  tipoPersona: TipoPersona;
}
