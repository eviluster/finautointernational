import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Put } from '@nestjs/common';
import { CajaCambioService } from './caja-cambio.service';
import { CreateCajaCambioDto } from './dto/create-caja-cambio.dto';
import { UpdateCajaCambioDto } from './dto/update-caja-cambio.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchCajaCambioDto } from './dto/search-caja-cambio.dto';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/user/entities/user.entity';
import { GetUserAdmin } from 'src/auth/decorator';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Controller('caja-cambio')
export class CajaCambioController extends BaseControllerCRUD<
CreateCajaCambioDto,
UpdateCajaCambioDto,
CajaCambioService
> {
  constructor(private readonly Service: CajaCambioService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchCajaCambioDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
  
  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateCajaCambioDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateCajaCambioDto,
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
