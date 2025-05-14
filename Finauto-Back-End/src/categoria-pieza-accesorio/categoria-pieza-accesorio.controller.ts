import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, ValidationPipe } from '@nestjs/common';
import { CategoriaPiezaAccesorioService } from './categoria-pieza-accesorio.service';
import { CreateCategoriaPiezaAccesorioDto } from './dto/create-categoria-pieza-accesorio.dto';
import { UpdateCategoriaPiezaAccesorioDto } from './dto/update-categoria-pieza-accesorio.dto';
import { ReturnDto } from 'src/common/base/dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchCategoriaPiezaAccesorioDto } from './dto/search-categoria-pieza-accesorio.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { CategoriaPiezaAccesorio } from './entities/categoria-pieza-accesorio.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Controller('categoria-pieza-accesorio')
export class CategoriaPiezaAccesorioController extends BaseControllerCRUD<
CreateCategoriaPiezaAccesorioDto,
UpdateCategoriaPiezaAccesorioDto,
CategoriaPiezaAccesorioService
> {
  constructor(private readonly Service: CategoriaPiezaAccesorioService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchCategoriaPiezaAccesorioDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  @UseGuards(JwtGuard)
  @Post()
 override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateCategoriaPiezaAccesorioDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: CategoriaPiezaAccesorio,
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
