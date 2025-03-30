import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerAddressTypeService } from './customer-address-type.service';
import { CreateCustomerAddressTypeDto } from './dto/create-customer-address-type.dto';
import { UpdateCustomerAddressTypeDto } from './dto/update-customer-address-type.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('customer-address-type')
export class CustomerAddressTypeController  extends BaseControllerCRUD<
CreateCustomerAddressTypeDto,
UpdateCustomerAddressTypeDto,
CustomerAddressTypeService
> {
  constructor(private readonly Service: CustomerAddressTypeService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchProvinceDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}