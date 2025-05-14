import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, ValidationPipe } from '@nestjs/common';
import { EquipoGarageService } from './equipo-garage.service';
import { CreateEquipoGarageDto } from './dto/create-equipo-garage.dto';
import { UpdateEquipoGarageDto } from './dto/update-equipo-garage.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { GetUserAdmin } from 'src/auth/decorator';
import { ReturnDto } from 'src/common/base/dto';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('equipo-garage')
export class EquipoGarageController  extends BaseControllerCRUD<
CreateEquipoGarageDto,
UpdateEquipoGarageDto,
EquipoGarageService
> {
  constructor(private readonly Service: EquipoGarageService) {
    super(Service);
  }
  
  @UseGuards(JwtGuard)
  @Post()
 override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateEquipoGarageDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateEquipoGarageDto,
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