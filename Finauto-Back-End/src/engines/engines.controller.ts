import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { EnginesService } from './engines.service';
import { CreateEngineDto } from './dto/create-engine.dto';
import { UpdateEngineDto } from './dto/update-engine.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from "../common/base/dto";
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchEngineDto } from './dto/search-engine.dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';

@ApiTags('engines')
@Controller('engines')
export class EnginesController  extends BaseControllerCRUD<
CreateEngineDto,
UpdateEngineDto,
EnginesService
> {
  constructor(private readonly Service: EnginesService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateEngineDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    console.log(user)
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateEngineDto,
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
