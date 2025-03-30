import { Test, TestingModule } from '@nestjs/testing';
import { ProductoEstadoService } from './producto-estado.service';

describe('ProductoEstadoService', () => {
  let service: ProductoEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoEstadoService],
    }).compile();

    service = module.get<ProductoEstadoService>(ProductoEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
