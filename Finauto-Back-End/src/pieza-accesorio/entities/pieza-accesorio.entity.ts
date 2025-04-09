import { IsArray, IsString, MinLength } from 'class-validator';
import { BasicInformationEntity } from 'src/common/base/entities';
import { Column, Entity } from 'typeorm';
@Entity('pieza-accesorio')
export class PiezaAccesorio extends BasicInformationEntity {
  @Column('')
  precioBase: number;

  @Column('text', { array: true, nullable: true })
  @IsArray()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  galery: string[];
}
