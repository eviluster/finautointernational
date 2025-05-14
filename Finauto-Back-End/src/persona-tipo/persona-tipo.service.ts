// src/persona-tipo/persona-tipo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaTipo } from './entities/persona-tipo.entity';

@Injectable()
export class PersonaTipoService {
  constructor(
    @InjectRepository(PersonaTipo)
    private readonly personaTipoRepository: Repository<PersonaTipo>,
  ) {}

  async findAll(): Promise<PersonaTipo[]> {
    return this.personaTipoRepository.find();
  }

}
