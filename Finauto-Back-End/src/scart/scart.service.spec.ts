import { Test, TestingModule } from '@nestjs/testing';
import { ScartService } from './scart.service';

describe('ScartService', () => {
  let service: ScartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScartService],
    }).compile();

    service = module.get<ScartService>(ScartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
