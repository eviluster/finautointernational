import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParteService } from './parte.service';
import { CreateParteDto } from './dto/create-parte.dto';
import { UpdateParteDto } from './dto/update-parte.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('parte')
export class ParteController extends BaseControllerCRUD<
CreateParteDto,
UpdateParteDto,
ParteService
> {
  constructor(private readonly Service: ParteService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}