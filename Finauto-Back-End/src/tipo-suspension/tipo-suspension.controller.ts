import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, ValidationPipe } from '@nestjs/common';
import { TipoSuspensionService } from './tipo-suspension.service';
import { CreateTipoSuspensionDto } from './dto/create-tipo-suspension.dto';
import { UpdateTipoSuspensionDto } from './dto/update-tipo-suspension.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchTipoSuspensionDto } from './dto/search-tipo-suspension.dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('tipo-suspension')
export class TipoSuspensionController extends BaseControllerCRUD<
CreateTipoSuspensionDto,
UpdateTipoSuspensionDto,
TipoSuspensionService
> {
  constructor(private readonly Service: TipoSuspensionService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchTipoSuspensionDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateTipoSuspensionDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateTipoSuspensionDto,
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
