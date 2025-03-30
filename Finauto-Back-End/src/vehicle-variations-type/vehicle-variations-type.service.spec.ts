import { Test, TestingModule } from '@nestjs/testing';
import { VehicleVariationsTypeService } from './vehicle-variations-type.service';

describe('VehicleVariationsTypeService', () => {
  let service: VehicleVariationsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleVariationsTypeService],
    }).compile();

    service = module.get<VehicleVariationsTypeService>(VehicleVariationsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
