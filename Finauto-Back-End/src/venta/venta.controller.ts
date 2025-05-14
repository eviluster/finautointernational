import { Controller } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { CreateVentaDto, UpdateVentaDto } from './dto';
import { VentaService } from './venta.service';
import { DeleteDto } from 'src/common/base/dto/delete.dto';


@ApiTags('venta')
@Controller('venta')
export class VentaController extends BaseControllerCRUD<
CreateVentaDto,
UpdateVentaDto,
VentaService
> {
  constructor(private readonly Service: VentaService) {
    super(Service);
  }

  override async findItems() {
    return super.findItems();
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