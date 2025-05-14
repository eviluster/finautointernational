import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Galery } from './entities/galery.entity';
import { CreateGaleryDto, UpdateGaleryDto } from './dto';

@Injectable()
export class GaleryService extends BaseServiceCRUD<
Galery,
CreateGaleryDto,
UpdateGaleryDto> {
  constructor(
    @InjectRepository(Galery)
    private readonly repository: Repository<Galery>,
  ) {
    super(repository)
  }

  override async findAllItems() {
    return super.findAllItems();
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