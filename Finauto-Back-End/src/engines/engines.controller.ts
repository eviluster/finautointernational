import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnginesService } from './engines.service';
import { CreateEngineDto } from './dto/create-engine.dto';
import { UpdateEngineDto } from './dto/update-engine.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReturnDto } from "../common/base/dto";
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { SearchEngineDto } from './dto/search-engine.dto';

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
}
