import { Test, TestingModule } from '@nestjs/testing';
import { EquipoGarageService } from './equipo-garage.service';

describe('EquipoGarageService', () => {
  let service: EquipoGarageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipoGarageService],
    }).compile();

    service = module.get<EquipoGarageService>(EquipoGarageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
