// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService extends BaseServiceCRUD<Country,CreateCountryDto,UpdateCountryDto> {
 
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,
  ) {
    super(repository)
  }
}

