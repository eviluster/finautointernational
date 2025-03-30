import { Test, TestingModule } from '@nestjs/testing';
import { OfertaEstadoService } from './oferta-estado.service';

describe('OfertaEstadoService', () => {
  let service: OfertaEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertaEstadoService],
    }).compile();

    service = module.get<OfertaEstadoService>(OfertaEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
