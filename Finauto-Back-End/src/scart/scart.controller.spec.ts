import { Test, TestingModule } from '@nestjs/testing';
import { ScartController } from './scart.controller';
import { ScartService } from './scart.service';

describe('ScartController', () => {
  let controller: ScartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScartController],
      providers: [ScartService],
    }).compile();

    controller = module.get<ScartController>(ScartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
