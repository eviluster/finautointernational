import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoGarageService } from './equipo-garage.service';
import { CreateEquipoGarageDto } from './dto/create-equipo-garage.dto';
import { UpdateEquipoGarageDto } from './dto/update-equipo-garage.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('equipo-garage')
export class EquipoGarageController  extends BaseControllerCRUD<
CreateEquipoGarageDto,
UpdateEquipoGarageDto,
EquipoGarageService
> {
  constructor(private readonly Service: EquipoGarageService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}