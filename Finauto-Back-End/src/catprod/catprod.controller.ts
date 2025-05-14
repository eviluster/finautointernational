import { Controller, Post, Delete, Patch, Put, Get, UseGuards, ValidationPipe, Body } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { CreateCatprodDto, UpdateCatprodDto } from './dto';
import { CatprodService } from './catprod.service';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { ReturnDto } from 'src/common/base/dto';

@ApiTags('catprod')
@Controller('catprod')
export class CatprodController extends BaseControllerCRUD<
  CreateCatprodDto,
  UpdateCatprodDto,
  CatprodService
> {
  constructor(private readonly Service: CatprodService) {
    super(Service);
  }
  @Get('all')
  override async findItems() {
    return super.findItems();
  }
  @UseGuards(JwtGuard)
  @Post()
  override async create(
    @Body(new ValidationPipe({ transform: true }))createDto: CreateCatprodDto,
    @GetUserAdmin() user: User
  ) {
    return super.create(createDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  override update(
    @Body(new ValidationPipe({ transform: true })) updateDto: UpdateCatprodDto,
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
