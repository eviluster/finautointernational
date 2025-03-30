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
  // async searchByField(searchDto: SearchProvinceDto): Promise<ReturnDto> {
  //   const returnDto = new ReturnDto();

  //     const queryBuilder = this.repository.createQueryBuilder('province');
  //      if(searchDto.name != undefined && 
  //         searchDto.name != null )
  //     {
  //       if(searchDto.name.es != undefined && 
  //         searchDto.name.es != null && 
  //         searchDto.name.es && searchDto.name.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`province.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
  //       }
  //       if(searchDto.name.en != undefined && 
  //         searchDto.name.en != null && 
  //         searchDto.name.en && searchDto.name.en.trim() !== '')

  //       {
  //         queryBuilder.andWhere(`province.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
  //       }
  //     }
  //     if(searchDto.description)
  //     {
  //       if(searchDto.description.es != undefined &&
  //         searchDto.description.es != null &&
  //         searchDto.description.es && searchDto.description.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`province.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
  //       }
  //       if(searchDto.description.en != undefined &&
  //         searchDto.description.en != null &&
  //         searchDto.description.en && searchDto.description.en.trim() !== '')
  //       {
  //         queryBuilder.andWhere(`province.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
  //       }
  //     }
  //     if(searchDto.country)
  //     {
  //       if(searchDto.country!= undefined &&
  //         searchDto.country != null &&
  //         searchDto.country && searchDto.country.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`province.country.id = :provinceId`, { provinceId: searchDto.country });
  //       }
  //     }
  //     if(searchDto.isCapital!= undefined &&
  //       searchDto.isCapital != null )
  //     { 
  //       queryBuilder.andWhere(`province.isCapital = :isCapital`, { isCapital: searchDto.isCapital });
  //     }
      
  //     returnDto.data = await queryBuilder.getMany();
  
  //   return returnDto;
  // }
}
