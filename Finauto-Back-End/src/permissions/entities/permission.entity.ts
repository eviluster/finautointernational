import { BasicEntity } from "src/common/base/entities"
import { RolePermission } from "src/role-permissions/entities/role-permission.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity('permissions')
export class Permission extends BasicEntity {
 
  
    @Column({nullable:false})
    module: string
    
    @Column({ nullable: false })
    method: string
  
    @Column({ nullable: false })
    path: string
  
    @OneToMany(() => RolePermission,(rolePermission)=> rolePermission.permission,{
        cascade: true
    })
    permisions: RolePermission[]  
}
