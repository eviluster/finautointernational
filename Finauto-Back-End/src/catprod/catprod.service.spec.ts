import { Test, TestingModule } from '@nestjs/testing';
import { CatprodService } from './catprod.service';

describe('CatprodService', () => {
  let service: CatprodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatprodService],
    }).compile();

    service = module.get<CatprodService>(CatprodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
