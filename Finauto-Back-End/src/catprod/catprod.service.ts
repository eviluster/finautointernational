import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Catprod } from './entities/catprod.entity';
import { CreateCatprodDto, UpdateCatprodDto } from './dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Injectable()
export class CatprodService extends BaseServiceCRUD<
Catprod,
CreateCatprodDto,
UpdateCatprodDto> {
  constructor(
    @InjectRepository(Catprod)
    private readonly repository: Repository<Catprod>,
  ) {
    super(repository)
  }

  override async findAllItems() {
    return super.findAllItems();
  }

  override async create(createDto: CreateCatprodDto) {
    return super.create(createDto);
  }



  override async update(updateDto: UpdateCatprodDto) {
    return super.update(updateDto);
  }

  override async remove(deleteDto: DeleteDto) {
    return super.remove(deleteDto);
  }

  override async active(dto: DeleteDto) {
    return super.active(dto);
  }
}