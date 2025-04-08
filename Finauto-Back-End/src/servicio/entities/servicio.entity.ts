import { IsArray, IsString, MinLength } from 'class-validator';
import { BasicInformationEntity } from 'src/common/base/entities';
import { Column, Entity } from 'typeorm';
@Entity('servicio')
export class Servicio extends BasicInformationEntity {
  @Column()
  precioBase: number;

  @Column('text', { array: true, nullable: true })
  @IsArray()
  @IsString({ each: true })
  @MinLength(1, { each: true })
  galery: string[];
}
