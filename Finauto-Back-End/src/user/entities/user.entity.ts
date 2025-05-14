import { Notification } from 'src/notifications/entities/notification.entity';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BasicEntity } from 'src/common/base/entities/basic.entity';
import { Role } from 'src/roles/entities/role.entity';

@Entity('users')
export class User extends BasicEntity {
  @Column({ nullable: true })
  name: string;
  @Column({ nullable: true })
  hash: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(() => Notification, (notification) => notification.userOrigin, {
    cascade: false,
  })
  notifyOrigin: Notification[];

  @ManyToOne(() => Role, (role) => role.users,{eager:true})
  @JoinColumn({ name: 'role' })
  role: Role;

  @Column({ nullable: true, default: false })
  isLogged: boolean;
}
