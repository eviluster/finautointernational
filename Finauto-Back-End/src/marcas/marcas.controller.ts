import {
  Controller,
  Get,
  Body,
  UseGuards,
  Put,
  Post,
  Delete,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from "../common/base/dto";
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchMarcaDto } from './dto/search-marca.dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtGuard } from 'src/auth/guard';

@ApiTags('Marcas')
@Controller('marcas')
export class MarcasController extends BaseControllerCRUD<
CreateMarcaDto,
UpdateMarcaDto,
MarcasService
> {
  constructor(private readonly Service: MarcasService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchMarcaDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
  @UseGuards(JwtGuard)
  @Post()
 override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateMarcaDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateMarcaDto,
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
