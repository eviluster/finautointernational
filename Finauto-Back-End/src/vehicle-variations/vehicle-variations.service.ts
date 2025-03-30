import { Injectable } from '@nestjs/common';
import { CreateVehicleVariationDto } from './dto/create-vehicle-variation.dto';
import { UpdateVehicleVariationDto } from './dto/update-vehicle-variation.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { VehicleVariation } from './entities/vehicle-variation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleVariationsService  extends BaseServiceCRUD<
VehicleVariation,
CreateVehicleVariationDto,
UpdateVehicleVariationDto> {
  constructor(
    @InjectRepository(VehicleVariation)
    private readonly repository: Repository<VehicleVariation>,
  ) {
    super(repository)
  }
  // async searchByField(searchDto: SearchEngineDto): Promise<ReturnDto> {
  //   const returnDto = new ReturnDto();

  //     const queryBuilder = this.repository.createQueryBuilder('engine');
  //      if(searchDto.name != undefined && 
  //         searchDto.name != null )
  //     {
  //       if(searchDto.name.es != undefined && 
  //         searchDto.name.es != null && 
  //         searchDto.name.es && searchDto.name.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`engine.name->>'es'  LIKE :name`, { name: `%${searchDto.name.es}%` });
  //       }
  //       if(searchDto.name.en != undefined && 
  //         searchDto.name.en != null && 
  //         searchDto.name.en && searchDto.name.en.trim() !== '')

  //       {
  //         queryBuilder.andWhere(`engine.name->>'en' LIKE :name`, { name: `%${searchDto.name.en}%` });
  //       }
  //     }
  //     if(searchDto.description)
  //     {
  //       if(searchDto.description.es != undefined &&
  //         searchDto.description.es != null &&
  //         searchDto.description.es && searchDto.description.es.trim() !== '')
  //       { 
  //         queryBuilder.andWhere(`engine.description->>'es' LIKE :description`, { description: `%${searchDto.description.es}%` });
  //       }
  //       if(searchDto.description.en != undefined &&
  //         searchDto.description.en != null &&
  //         searchDto.description.en && searchDto.description.en.trim() !== '')
  //       {
  //         queryBuilder.andWhere(`engine.description->>'en' LIKE :description`, { description: `%${searchDto.description.en}%` });
  //       }
  //     }
  //     returnDto.data = await queryBuilder.getMany();
  
  //   return returnDto;
  // }
}
