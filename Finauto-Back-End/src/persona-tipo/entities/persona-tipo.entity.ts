// src/persona-tipo/persona-tipo.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('persona_view') // Nombre de la vista en la base de datos
export class PersonaTipo {
  @PrimaryColumn('uuid')
  persona_id: string;

  @Column({ type: 'timestamp', nullable: true })
  persona_updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  persona_created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  persona_deleted_at: Date;

  @Column('json')
  persona_name: any;

  @Column('json')
  persona_description: any;

  @Column('boolean')
  persona_is_active: boolean;

  @Column('boolean')
  persona_is_used: boolean;

  @Column({ type: 'varchar' })
  persona_email: string;

  @Column({ type: 'varchar' })
  persona_phone: string;

  @Column('json')
  persona_direccion: any;

  @Column('uuid', { nullable: true })
  tipo_persona_id: string;


  @Column('json')
  tipo_persona_name: any;
}
