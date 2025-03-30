import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsUUID, Max, Min, IsString } from "class-validator";
export class CreateConfiguracionDto {
    
    @ApiProperty({ required: false, type: String, format: 'uuid' })
    @IsUUID()
    @IsString()
    @IsOptional()
    id?: string;

    @ApiProperty({ required: false, default: true })
    @IsOptional()
    isActive?: boolean = true;

    
    @ApiProperty({ type: String, format: 'email' })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    from: string;
    
    @ApiProperty({ type: String, format: 'email' })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    to: string;

    @ApiProperty({ type: Number, minimum: 0, maximum: 100, description: 'Percentage value between 0 and 100' })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
    @Min(0)
    @Max(100)
    porcientoConfReserva: number;

    @ApiProperty({ type: Number, minimum: 0, maximum: 100, description: 'Percentage value between 0 and 100 to make a contract' })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
    @Min(0)
    @Max(100)
    porcientoMinPrice: number;
    
    @ApiProperty({ type: Number, minimum: 0, description: 'Days to guarantee the delivery' })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
    @Min(1)
    tiempoGarantia: number;
 
    @ApiProperty({ type: Number, minimum: 0, description: 'Km to guarantee the return' })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
    @Min(1)
    kmGarantia: number;
    
    @ApiProperty({ type: Number, minimum: 0, description: 'Days of valid offer' })
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
    @Min(1)
    validezOferta: number;

    
}
