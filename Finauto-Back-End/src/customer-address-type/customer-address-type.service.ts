import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressTypeDto } from './dto/create-customer-address-type.dto';
import { UpdateCustomerAddressTypeDto } from './dto/update-customer-address-type.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { CustomerAddressType } from './entities/customer-address-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerAddressTypeService  extends BaseServiceCRUD<
CustomerAddressType,
CreateCustomerAddressTypeDto,
UpdateCustomerAddressTypeDto> {
  constructor(
    @InjectRepository(CustomerAddressType)
    private readonly repository: Repository<CustomerAddressType>,
  ) {
    super(repository)
  }

}
