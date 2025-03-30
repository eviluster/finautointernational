import { Test, TestingModule } from '@nestjs/testing';
import { OfertaEstadoController } from './oferta-estado.controller';
import { OfertaEstadoService } from './oferta-estado.service';

describe('OfertaEstadoController', () => {
  let controller: OfertaEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertaEstadoController],
      providers: [OfertaEstadoService],
    }).compile();

    controller = module.get<OfertaEstadoController>(OfertaEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
