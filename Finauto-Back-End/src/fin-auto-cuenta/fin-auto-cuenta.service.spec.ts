import { Test, TestingModule } from '@nestjs/testing';
import { FinAutoCuentaService } from './fin-auto-cuenta.service';

describe('FinAutoCuentaService', () => {
  let service: FinAutoCuentaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinAutoCuentaService],
    }).compile();

    service = module.get<FinAutoCuentaService>(FinAutoCuentaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
