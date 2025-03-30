import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUUID } from "class-validator"
import { RelationalDto } from "src/common/base/dto"

export class CreateRolePermissionDto {
    @ApiProperty()
    @IsString()
    @IsUUID()
    permission: RelationalDto
    
    @ApiProperty()
    @IsString()
    @IsUUID()
    role: RelationalDto
}
