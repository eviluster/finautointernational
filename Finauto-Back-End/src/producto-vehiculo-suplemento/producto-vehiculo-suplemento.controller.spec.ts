import { Test, TestingModule } from '@nestjs/testing';
import { ProductoVehiculoSuplementoController } from './producto-vehiculo-suplemento.controller';
import { ProductoVehiculoSuplementoService } from './producto-vehiculo-suplemento.service';

describe('ProductoVehiculoSuplementoController', () => {
  let controller: ProductoVehiculoSuplementoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoVehiculoSuplementoController],
      providers: [ProductoVehiculoSuplementoService],
    }).compile();

    controller = module.get<ProductoVehiculoSuplementoController>(ProductoVehiculoSuplementoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
