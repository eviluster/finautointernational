import { Test, TestingModule } from '@nestjs/testing';
import { PiezaAccesorioController } from './pieza-accesorio.controller';
import { PiezaAccesorioService } from './pieza-accesorio.service';

describe('PiezaAccesorioController', () => {
  let controller: PiezaAccesorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiezaAccesorioController],
      providers: [PiezaAccesorioService],
    }).compile();

    controller = module.get<PiezaAccesorioController>(PiezaAccesorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
