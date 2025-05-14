import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, ValidationPipe } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { GetUserAdmin } from 'src/auth/decorator';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { User } from 'src/user/entities/user.entity';
import { JwtGuard } from 'src/auth/guard';

@Controller('configuracion')
export class ConfiguracionController  extends BaseControllerCRUD<
CreateConfiguracionDto,
UpdateConfiguracionDto,
ConfiguracionService
> {
  constructor(private readonly Service: ConfiguracionService) {
    super(Service);
  }
    
  @UseGuards(JwtGuard)
  @Post()
 override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateConfiguracionDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateConfiguracionDto,
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