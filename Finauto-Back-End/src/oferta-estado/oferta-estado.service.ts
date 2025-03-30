import { Injectable } from '@nestjs/common';
import { CreateOfertaEstadoDto } from './dto/create-oferta-estado.dto';
import { UpdateOfertaEstadoDto } from './dto/update-oferta-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OfertaEstado } from './entities/oferta-estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfertaEstadoService {
  constructor(
    @InjectRepository(OfertaEstado)
    private readonly ofertaEstadoRepository: Repository<OfertaEstado>,
  ) {}


  findAll() {
    return this.ofertaEstadoRepository.find();
  }

  findOne(id: string) {
    return this.ofertaEstadoRepository.findOne({
      where: { id },
    });
  }

}
