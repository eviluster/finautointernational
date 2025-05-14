import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Scart } from './entities/scart.entity';
import { CreateScartDto, UpdateScartDto } from './dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Injectable()
export class ScartService extends BaseServiceCRUD<
Scart,
CreateScartDto,
UpdateScartDto> {
  constructor(
    @InjectRepository(Scart)
    private readonly repository: Repository<Scart>,
  ) {
    super(repository)
  }

  override async findAllItems() {
    return super.findAllItems();
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