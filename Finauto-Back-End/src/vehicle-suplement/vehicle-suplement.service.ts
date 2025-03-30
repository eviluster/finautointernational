import { Injectable } from '@nestjs/common';
import { CreateVehicleSuplementDto } from './dto/create-vehicle-suplement.dto';
import { UpdateVehicleSuplementDto } from './dto/update-vehicle-suplement.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReturnDto } from 'src/common/base/dto';
import { SearchVehicleSuplementDto } from './dto/search-vehicle-suplement.dto';
import { VehicleSuplement } from './entities/vehicle-suplement.entity';

@Injectable()
export class VehicleSuplementService extends BaseServiceCRUD<
VehicleSuplement,
CreateVehicleSuplementDto,
UpdateVehicleSuplementDto
> {
  constructor(
    @InjectRepository(VehicleSuplement)
    private readonly repository: Repository<VehicleSuplement>,
  ) {
    super(repository)
  }
  async searchByField(searchDto: SearchVehicleSuplementDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

      const queryBuilder = this.repository.createQueryBuilder('vehicle-suplement');
       if(searchDto.name != undefined && 
          searchDto.name != null )
      {
        if(searchDto.name.es != undefined && 
          searchDto.name.es != null && 
          searchDto.name.es && searchDto.name.es.trim() !== '')
        { 
          queryBuilder.andWhere(`vehicle-suplement.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
        }
        if(searchDto.name.en != undefined && 
          searchDto.name.en != null && 
          searchDto.name.en && searchDto.name.en.trim() !== '')

        {
          queryBuilder.andWhere(`vehicle-suplement.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
        }
      }
      if(searchDto.description)
      {
        if(searchDto.description.es != undefined &&
          searchDto.description.es != null &&
          searchDto.description.es && searchDto.description.es.trim() !== '')
        { 
          queryBuilder.andWhere(`vehicle-suplement.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
        }
        if(searchDto.description.en != undefined &&
          searchDto.description.en != null &&
          searchDto.description.en && searchDto.description.en.trim() !== '')
        {
          queryBuilder.andWhere(`vehicle-suplement.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
        }
      }
      returnDto.data = await queryBuilder.getMany();
  
    return returnDto;
  }
}
