import { Controller, UseGuards, Post, Patch, Delete, Body, Put } from '@nestjs/common';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ApiTags } from '@nestjs/swagger';
import { CreateCalendarDto, UpdateCalendarDto } from './dto';
import { CalendarService } from './calendar.service';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';
import { User } from 'src/user/entities/user.entity';
import { GetUser, GetUserAdmin, GetUserEntity } from 'src/auth/decorator';
import { ReturnDto } from 'src/common/base/dto';


@ApiTags('calendar')
@Controller('calendar')
export class CalendarController extends BaseControllerCRUD<
CreateCalendarDto,
UpdateCalendarDto,
CalendarService
> {
  constructor(private readonly Service: CalendarService) {
    super(Service);
  }

  override async findItems() {
    return super.findItems();
  }

  @UseGuards(JwtGuard)
  @Post()
  override async create(createDto: CreateCalendarDto,
    @GetUserEntity() user: User
  ) {
    return super.create(createDto);
  }
  @UseGuards(JwtGuard)
  @Patch()
  override async update(updateDto: UpdateCalendarDto,
  @GetUserEntity() user: User
  ) {
    return super.update(updateDto);
  }

  @UseGuards(JwtGuard)
  @Delete()
  override remove(
    @Body() deleteDto: DeleteDto,
    @GetUserEntity() user: User
    ):Promise<ReturnDto>{
      return null;
    }

    @UseGuards(JwtGuard)
    @Put('active')
    override active(
      @Body() deleteDto: DeleteDto,
      @GetUserEntity() user: User
      ):Promise<ReturnDto>{
        return super.active(deleteDto);
      }
}