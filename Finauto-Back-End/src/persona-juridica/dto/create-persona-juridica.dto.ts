import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from "class-validator";
import { MultilanguageDto, RelationalDto } from "src/common/base/dto";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreatePersonaDto  extends BaseExtendedDto {

    @ApiProperty({
      description: 'Correo electrónico',
      example: 'user@example.com',
    })
    @IsNotEmpty()
    @IsEmail({})
    email: string;
  
    @ApiProperty({
      description: 'Teléfono',
      example: '+1 123-456-7890',
    })
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone: string;
 
    @ApiProperty({
        description: 'Dirección',
        example: { street: '123 Main St', city: 'City' },
      })
      @IsNotEmpty()
      direccion: MultilanguageDto[];

      @ApiProperty({
        type: RelationalDto
      })
      @IsString()
      @IsUUID()
      @IsNotEmpty()
      tipo_persona_id: RelationalDto
}
