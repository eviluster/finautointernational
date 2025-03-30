import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoEstadoService } from './producto-estado.service';
import { CreateProductoEstadoDto } from './dto/create-producto-estado.dto';
import { UpdateProductoEstadoDto } from './dto/update-producto-estado.dto';

@Controller('producto-estado')
export class ProductoEstadoController {
  constructor(private readonly productoEstadoService: ProductoEstadoService) {}

  @Post()
  create(@Body() createProductoEstadoDto: CreateProductoEstadoDto) {
    return this.productoEstadoService.create(createProductoEstadoDto);
  }

  @Get()
  findAll() {
    return this.productoEstadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoEstadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoEstadoDto: UpdateProductoEstadoDto) {
    return this.productoEstadoService.update(+id, updateProductoEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoEstadoService.remove(+id);
  }
}
