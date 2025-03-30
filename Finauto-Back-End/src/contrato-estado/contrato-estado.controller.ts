import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContratoEstadoService } from './contrato-estado.service';
import { CreateContratoEstadoDto } from './dto/create-contrato-estado.dto';
import { UpdateContratoEstadoDto } from './dto/update-contrato-estado.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchProvinceDto } from 'src/province/dto/search-province.dto';
import { DeleteDto } from 'src/common/base/dto/delete.dto';

@Controller('contrato-estado')
export class ContratoEstadoController extends BaseControllerCRUD<
CreateContratoEstadoDto,
UpdateContratoEstadoDto,
ContratoEstadoService
> {
  constructor(private readonly Service: ContratoEstadoService) {
    super(Service);
  }
  
  @Get('search-by-field')
  async searchByField(@Body() searchDto: SearchProvinceDto): Promise<ReturnDto> {
    return await this.Service.searchByField(searchDto);
  }

  override async create(createDto: CreateContratoEstadoDto): Promise<ReturnDto> {
    return null;
  }

  override async update(updateDto: UpdateContratoEstadoDto): Promise<ReturnDto> {
    return null;
  } 

  override async remove(deleteDto: DeleteDto): Promise<ReturnDto> {
    return null;
  }

  override async active(deleteDto: DeleteDto): Promise<ReturnDto> {
      return null;
  }
}
