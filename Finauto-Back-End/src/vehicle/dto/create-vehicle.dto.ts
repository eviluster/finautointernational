import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, Min, MinLength } from "class-validator";
import { BaseExtendedDto } from "src/common/base/dto/base.dto";

export class CreateVehicleDto  extends BaseExtendedDto{
    // Caja Cambio
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    cajaCambio: string;

    // Engine
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    engine: string;

    // marca
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    marca: string;

    // modelo 
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    modelo: string;

    // tipo freno
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    tipoFreno: string;

    // tipo Neumatico
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    tipoNeumatico: string;

    // tracciones
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    traccionDelantera: string;
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    traccionTrasera: string;

    // tipo suspension
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    tipoSuspension: string;
    
    // nombre tipo suspension
    @ApiProperty({ type: String, format: 'uuid', nullable: false })
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    nombreTipoSuspension: string;

    // dimensiones array de 3 lugares
   @ApiProperty({ type: [Number], maxItems: 3, minItems: 3, nullable: true })
    @IsArray()
    @ArrayMinSize(3)
    @ArrayMaxSize(3)
    @IsNumber({}, { each: true }) 
    dimensiones: number[];

    @ApiProperty({ type: [Number], maxItems: 3, minItems: 3, nullable: true })
    @IsArray()
    @ArrayMinSize(3)
    @ArrayMaxSize(3)
    @IsNumber({}, { each: true }) 
    tamanoCajaCarga: number[];

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    asientos: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    distanciaSuelo: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    pesoVacio: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    desplazamiento: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    distanciaEjes: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    potenciaMax: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    torque: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    velocidadMax: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    capacitdadTanqueCombustible: number;

    @ApiProperty({ type: Number, required: true, nullable: false })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    PrecioBase: number;

    @ApiProperty()
    @IsArray()
    @IsString({each: true})
    @MinLength(1, {each: true})
    galery:string[]
}
