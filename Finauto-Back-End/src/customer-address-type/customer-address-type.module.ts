import { Module } from '@nestjs/common';
import { CustomerAddressTypeService } from './customer-address-type.service';
import { CustomerAddressTypeController } from './customer-address-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddressType } from './entities/customer-address-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAddressType])],
  controllers: [CustomerAddressTypeController],
  providers: [CustomerAddressTypeService],
  exports: [CustomerAddressTypeService],
})
export class CustomerAddressTypeModule {}
