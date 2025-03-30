import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorPersonaController } from './proveedor-persona.controller';
import { ProveedorPersonaService } from './proveedor-persona.service';

describe('ProveedorPersonaController', () => {
  let controller: ProveedorPersonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedorPersonaController],
      providers: [ProveedorPersonaService],
    }).compile();

    controller = module.get<ProveedorPersonaController>(ProveedorPersonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
