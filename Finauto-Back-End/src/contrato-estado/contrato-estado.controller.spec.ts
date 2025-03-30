import { Test, TestingModule } from '@nestjs/testing';
import { ContratoEstadoController } from './contrato-estado.controller';
import { ContratoEstadoService } from './contrato-estado.service';

describe('ContratoEstadoController', () => {
  let controller: ContratoEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratoEstadoController],
      providers: [ContratoEstadoService],
    }).compile();

    controller = module.get<ContratoEstadoController>(ContratoEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
