import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ComercialService } from './comercial.service';
import { CreateComercialDto } from './dto/create-comercial.dto';
import { UpdateComercialDto } from './dto/update-comercial.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchDto } from 'src/common/base/dto/search.dto';
import { SearchComercialDto } from './dto/search-comercial.dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { User } from 'src/user/entities/user.entity';
import { GetUserAdmin } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('comercial')
export class ComercialController extends BaseControllerCRUD<
CreateComercialDto,
UpdateComercialDto,
ComercialService
> {
  constructor(private readonly Service: ComercialService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchComercialDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }
 
  
  @UseGuards(JwtGuard)
  @Post()
 override create(
  @Body(new ValidationPipe({ transform: true })) createDto: CreateComercialDto,
  @GetUserAdmin() user: User
  ):Promise<ReturnDto>{
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateComercialDto,
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
