import { Injectable } from '@nestjs/common';
import { CreateProductoEstadoDto } from './dto/create-producto-estado.dto';
import { UpdateProductoEstadoDto } from './dto/update-producto-estado.dto';

@Injectable()
export class ProductoEstadoService {
  create(createProductoEstadoDto: CreateProductoEstadoDto) {
    return 'This action adds a new productoEstado';
  }

  findAll() {
    return `This action returns all productoEstado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productoEstado`;
  }

  update(id: number, updateProductoEstadoDto: UpdateProductoEstadoDto) {
    return `This action updates a #${id} productoEstado`;
  }

  remove(id: number) {
    return `This action removes a #${id} productoEstado`;
  }
}
