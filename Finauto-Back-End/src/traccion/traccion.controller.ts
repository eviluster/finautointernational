import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { TraccionService } from './traccion.service';
import { CreateTraccionDto } from './dto/create-traccion.dto';
import { UpdateTraccionDto } from './dto/update-traccion.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTraccionDto } from './dto/search-traccion.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Controller('traccion')
export class TraccionController  extends BaseControllerCRUD<
CreateTraccionDto,
UpdateTraccionDto,
TraccionService
> {
  constructor(private readonly Service: TraccionService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTraccionDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateTraccionDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateTraccionDto,
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
