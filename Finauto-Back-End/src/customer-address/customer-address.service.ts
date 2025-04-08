import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer-address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer-address.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { CustomerAddress } from './entities/customer-address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerAddressService  extends BaseServiceCRUD<
CustomerAddress,
CreateCustomerAddressDto,
UpdateCustomerAddressDto> {
  constructor(
    @InjectRepository(CustomerAddress)
    private readonly repository: Repository<CustomerAddress>,
  ) {
    super(repository)
  }

}
