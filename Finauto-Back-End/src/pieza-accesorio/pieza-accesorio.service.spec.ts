import { Test, TestingModule } from '@nestjs/testing';
import { PiezaAccesorioService } from './pieza-accesorio.service';

describe('PiezaAccesorioService', () => {
  let service: PiezaAccesorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PiezaAccesorioService],
    }).compile();

    service = module.get<PiezaAccesorioService>(PiezaAccesorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
