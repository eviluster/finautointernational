import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { GetUserAdmin, GetUserEntity } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('vehicle')
export class VehicleController extends BaseControllerCRUD<
CreateVehicleDto,
UpdateVehicleDto,
VehicleService
> {
  constructor(private readonly Service: VehicleService) {
    super(Service);
  }

  @UseGuards(JwtGuard)
  @Post()
  override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateVehicleDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>
  {
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateVehicleDto,
    @GetUserAdmin() user: User
    ):Promise<ReturnDto>
    {
      return super.update(updateDto);
    }

  @UseGuards(JwtGuard)
  @Delete()
  override remove(
  @Body() deleteDto: DeleteDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>
  {
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