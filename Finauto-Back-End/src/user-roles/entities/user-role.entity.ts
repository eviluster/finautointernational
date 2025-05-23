import { BasicEntity } from "src/common/base/entities";
import { Role } from "src/roles/entities/role.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne } from "typeorm";
@Entity("user_roles")
export class UserRole extends BasicEntity{
    
    @ManyToOne(() => Role, { eager: false })
    role: Role;
    
    @ManyToOne(() => User, { eager: false })
    user: User;
}
