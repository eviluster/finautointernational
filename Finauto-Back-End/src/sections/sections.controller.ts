import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from '../common/base/dto';
import { SearchDto } from 'src/common/base/dto/search.dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';

@ApiTags('Sections')
@Controller('sections')
export class SectionsController {
  constructor(private readonly service: SectionsService) {}

  @Post()
  async create(@Body() createSectionDto: CreateSectionDto): Promise<ReturnDto> {
    return this.service.create(createSectionDto);
  }

  @Get()
  async search(searchDto: SearchManyDto): Promise<ReturnDto> {
    return this.service.search(searchDto);
  }

  @Patch()
  async update(@Body() updateSectionDto: UpdateSectionDto): Promise<ReturnDto> {
    return this.service.update(updateSectionDto);
  }

  @Delete()
  async remove(@Body() deleteDTO: DeleteDto): Promise<ReturnDto> {
    return this.service.remove(deleteDTO);
  }
}
