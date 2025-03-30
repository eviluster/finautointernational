import { PartialType } from '@nestjs/swagger';
import { CreateCustomerAddressTypeDto } from './create-customer-address-type.dto';

export class UpdateCustomerAddressTypeDto extends PartialType(CreateCustomerAddressTypeDto) {}
