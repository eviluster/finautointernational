import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtGuard } from 'src/auth/guard';

@Controller('producto')
export class ProductoController extends BaseControllerCRUD<
CreateProductoDto,
UpdateProductoDto,
ProductoService
> {
  constructor(private readonly Service: ProductoService) {
    super(Service);
  }
  
  //Get  product tipo servicio
  @Get('product-tipo-servicio')
  async productTipoServicio(): Promise<ReturnDto> {
    return this.Service.productTipoServicio();
  }

  // Get  product en oferta
  @Get('product-en-oferta')
  async productEnOferta(): Promise<ReturnDto> {
    return this.Service.productEnOferta();
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateProductoDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateProductoDto,
    @GetUserAdmin() user: User
    ):Promise<ReturnDto>{
      return super.update(updateDto);
    }

  @UseGuards(JwtGuard)
  @Delete()
  override remove(
    @Body() deleteDto: DeleteDto,
    @GetUserAdmin() user: User
    ):Promise<ReturnDto>{
      return null;
  }

  @UseGuards(JwtGuard)
  @Put('active')
  override active(
    @Body() deleteDto: DeleteDto,
    @GetUserAdmin() user: User
    ):Promise<ReturnDto>{
      return super.active(deleteDto);
  }

}