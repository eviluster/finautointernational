import { PartialType } from '@nestjs/swagger';
import { CreateCustomerAddressDto } from './create-customer-address.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCustomerAddressDto extends PartialType(CreateCustomerAddressDto) {
   
    @IsUUID()
    @IsString()
    @IsNotEmpty()
    id: string;
}
