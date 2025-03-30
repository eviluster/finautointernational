import { Test, TestingModule } from '@nestjs/testing';
import { VehicleVariationsService } from './vehicle-variations.service';

describe('VehicleVariationsService', () => {
  let service: VehicleVariationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleVariationsService],
    }).compile();

    service = module.get<VehicleVariationsService>(VehicleVariationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
