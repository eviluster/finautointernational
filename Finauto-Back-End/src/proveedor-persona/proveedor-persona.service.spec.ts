import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorPersonaService } from './proveedor-persona.service';

describe('ProveedorPersonaService', () => {
  let service: ProveedorPersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProveedorPersonaService],
    }).compile();

    service = module.get<ProveedorPersonaService>(ProveedorPersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
