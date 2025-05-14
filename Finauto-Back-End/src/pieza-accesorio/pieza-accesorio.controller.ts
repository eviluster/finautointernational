import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, ValidationPipe } from '@nestjs/common';
import { PiezaAccesorioService } from './pieza-accesorio.service';
import { CreatePiezaAccesorioDto } from './dto/create-pieza-accesorio.dto';
import { UpdatePiezaAccesorioDto } from './dto/update-pieza-accesorio.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtGuard } from 'src/auth/guard';

@Controller('pieza-accesorio')
export class PiezaAccesorioController  extends BaseControllerCRUD<
CreatePiezaAccesorioDto,
UpdatePiezaAccesorioDto,
PiezaAccesorioService
> {
  constructor(private readonly Service: PiezaAccesorioService) {
    super(Service);
  }
  
  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreatePiezaAccesorioDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdatePiezaAccesorioDto,
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