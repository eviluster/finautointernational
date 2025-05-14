import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, Put } from '@nestjs/common';
import { TipoNeumaticoService } from './tipo-neumatico.service';
import { CreateTipoNeumaticoDto } from './dto/create-tipo-neumatico.dto';
import { UpdateTipoNeumaticoDto } from './dto/update-tipo-neumatico.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoNeumaticoDto } from './dto/search-tipo-neumatico.dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Controller('tipo-neumatico')
export class TipoNeumaticoController  extends BaseControllerCRUD<
CreateTipoNeumaticoDto,
UpdateTipoNeumaticoDto,
TipoNeumaticoService
> {
  constructor(private readonly Service: TipoNeumaticoService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoNeumaticoDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateTipoNeumaticoDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateTipoNeumaticoDto,
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
  ):Promise<ReturnDto>
  {
    return super.active(deleteDto);
  }
}

