import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Venta } from './entities/venta.entity';
import { CreateVentaDto, UpdateVentaDto } from './dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Injectable()
export class VentaService extends BaseServiceCRUD<
Venta,
CreateVentaDto,
UpdateVentaDto> {
  constructor(
    @InjectRepository(Venta)
    private readonly repository: Repository<Venta>,
  ) {
    super(repository)
  }

  override async findAllItems() {
    return super.findAllItems();
  }

  override async create(createDto: CreateVentaDto) {
    return super.create(createDto);
  }



  override async update(updateDto: UpdateVentaDto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: DeleteDto) {
    return super.remove(deleteDto);
  }

  override async active(dto: DeleteDto) {
    return super.active(dto);
  }
}