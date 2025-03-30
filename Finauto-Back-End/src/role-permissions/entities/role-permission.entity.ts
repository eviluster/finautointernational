import { BasicEntity } from "src/common/base/entities";
import { Permission } from "../../permissions/entities/permission.entity";
import { Role } from "../../roles/entities/role.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('role_permissions')
export class RolePermission extends BasicEntity {

    @ManyToOne(() => Role, { eager: false })
    role: Role;
    @ManyToOne(() => Permission, { eager: false })
    permission: Permission;
}
