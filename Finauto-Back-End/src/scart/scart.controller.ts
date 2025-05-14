import { Controller } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { CreateScartDto, UpdateScartDto } from './dto';
import { ScartService } from './scart.service';
import { DeleteDto } from 'src/common/base/dto/delete.dto';


@ApiTags('scart')
@Controller('scart')
export class ScartController extends BaseControllerCRUD<
CreateScartDto,
UpdateScartDto,
ScartService
> {
  constructor(private readonly Service: ScartService) {
    super(Service);
  }

  override async findItems() {
    return super.findItems();
  }

  override async create(createDto: CreateScartDto) {
    return super.create(createDto);
  }

  override async update(updateDto: UpdateScartDto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: DeleteDto) {
    return super.remove(deleteDto);
  }

  override async active(dto: DeleteDto) {
    return super.active(dto);
  }
}