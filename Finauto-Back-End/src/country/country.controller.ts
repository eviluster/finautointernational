import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from '../common/base/dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserAdmin } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly service: CountryService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() createCountryDto: CreateCountryDto,
  @GetUserAdmin() user: User): Promise<ReturnDto> {
    return this.service.create(createCountryDto);
  }

  @Get()
  async search(searchDto: SearchManyDto): Promise<ReturnDto> {
    return this.service.search(searchDto);
  }

  @UseGuards(JwtGuard)
  @Patch()
  async update(@Body() updateCountryDto: UpdateCountryDto,
  @GetUserAdmin() user: User): Promise<ReturnDto> {
    return this.service.update(updateCountryDto);
  }

  @UseGuards(JwtGuard)
  @Delete()
  async remove(@Body() deleteMarcaDto: UpdateCountryDto) {
    return null;
  }

  @UseGuards(JwtGuard)
  @Put()
  async active(@Body() dto: DeleteDto,
  @GetUserAdmin() user: User) {
    return this.service.active(dto);
  }
}
