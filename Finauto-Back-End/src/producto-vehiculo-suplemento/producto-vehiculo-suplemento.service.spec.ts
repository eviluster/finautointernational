import { Test, TestingModule } from '@nestjs/testing';
import { ProductoVehiculoSuplementoService } from './producto-vehiculo-suplemento.service';

describe('ProductoVehiculoSuplementoService', () => {
  let service: ProductoVehiculoSuplementoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoVehiculoSuplementoService],
    }).compile();

    service = module.get<ProductoVehiculoSuplementoService>(ProductoVehiculoSuplementoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
