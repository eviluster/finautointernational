import { Controller, Get, Post, Body, Patch, Delete, ValidationPipe, UseGuards, Put } from '@nestjs/common';
import { TipoFrenoService } from './tipo-freno.service';
import { CreateTipoFrenoDto } from './dto/create-tipo-freno.dto';
import { UpdateTipoFrenoDto } from './dto/update-tipo-freno.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from '../common/base/dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchTipoFrenoDto } from './dto/search-tipo-freno.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@ApiTags('Tipos-freno')
@Controller('tipo-freno')
export class TipoFrenoController extends BaseControllerCRUD<
CreateTipoFrenoDto,
UpdateTipoFrenoDto,
TipoFrenoService
> {
  constructor(private readonly Service: TipoFrenoService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoFrenoDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateTipoFrenoDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateTipoFrenoDto,
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

