import { Test, TestingModule } from '@nestjs/testing';
import { EquipoGarageController } from './equipo-garage.controller';
import { EquipoGarageService } from './equipo-garage.service';

describe('EquipoGarageController', () => {
  let controller: EquipoGarageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipoGarageController],
      providers: [EquipoGarageService],
    }).compile();

    controller = module.get<EquipoGarageController>(EquipoGarageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
