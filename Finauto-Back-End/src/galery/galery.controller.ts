import { Controller } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { CreateGaleryDto, UpdateGaleryDto } from './dto';
import { GaleryService } from './galery.service';

@ApiTags('galery')
@Controller('galery')
export class GaleryController extends BaseControllerCRUD<
CreateGaleryDto,
UpdateGaleryDto,
GaleryService
> {
  constructor(private readonly Service: GaleryService) {
    super(Service);
  }

  override async findItems() {
    return super.findItems();
  }

  override async create(createDto: CreateGaleryDto) {
    return super.create(createDto);
  }

  override async update(updateDto: UpdateGaleryDto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: any) {
    return super.remove(deleteDto);
  }

  override async active(dto: any) {
    return super.active(dto);
  }
}