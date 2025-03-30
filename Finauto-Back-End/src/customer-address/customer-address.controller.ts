import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerAddressService } from './customer-address.service';
import { CreateCustomerAddressDto } from './dto/create-customer-address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer-address.dto';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('customer-address')
export class CustomerAddressController extends BaseControllerCRUD<
CreateCustomerAddressDto,
UpdateCustomerAddressDto,
CustomerAddressService
> {
  constructor(private readonly Service: CustomerAddressService) {
    super(Service);
  }
  
  // @Get('search-by-field')
  // async searchByField(@Body() searchDto: SearchProvinceDto): Promise<ReturnDto> {
  //   return await this.Service.searchByField(searchDto);
  // }
}