import { Test, TestingModule } from '@nestjs/testing';
import { ContratoEstadoService } from './contrato-estado.service';

describe('ContratoEstadoService', () => {
  let service: ContratoEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContratoEstadoService],
    }).compile();

    service = module.get<ContratoEstadoService>(ContratoEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
