import { Test, TestingModule } from '@nestjs/testing';
import { ProductoEstadoController } from './producto-estado.controller';
import { ProductoEstadoService } from './producto-estado.service';

describe('ProductoEstadoController', () => {
  let controller: ProductoEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoEstadoController],
      providers: [ProductoEstadoService],
    }).compile();

    controller = module.get<ProductoEstadoController>(ProductoEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
