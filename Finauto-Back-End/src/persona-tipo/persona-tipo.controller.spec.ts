import { Test, TestingModule } from '@nestjs/testing';
import { PersonaTipoController } from './persona-tipo.controller';
import { PersonaTipoService } from './persona-tipo.service';

describe('PersonaTipoController', () => {
  let controller: PersonaTipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaTipoController],
      providers: [PersonaTipoService],
    }).compile();

    controller = module.get<PersonaTipoController>(PersonaTipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
