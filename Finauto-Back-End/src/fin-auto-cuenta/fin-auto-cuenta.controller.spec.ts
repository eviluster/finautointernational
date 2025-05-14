import { Test, TestingModule } from '@nestjs/testing';
import { FinAutoCuentaController } from './fin-auto-cuenta.controller';
import { FinAutoCuentaService } from './fin-auto-cuenta.service';

describe('FinAutoCuentaController', () => {
  let controller: FinAutoCuentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinAutoCuentaController],
      providers: [FinAutoCuentaService],
    }).compile();

    controller = module.get<FinAutoCuentaController>(FinAutoCuentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
