import { Test, TestingModule } from '@nestjs/testing';
import { VehicleVariationsController } from './vehicle-variations.controller';
import { VehicleVariationsService } from './vehicle-variations.service';

describe('VehicleVariationsController', () => {
  let controller: VehicleVariationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleVariationsController],
      providers: [VehicleVariationsService],
    }).compile();

    controller = module.get<VehicleVariationsController>(VehicleVariationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
