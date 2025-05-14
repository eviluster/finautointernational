import { Module } from '@nestjs/common';
import { EnginesService } from './engines.service';
import { EnginesController } from './engines.controller';
import { Engine } from './entities/engine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Engine])],
  controllers: [EnginesController],
  providers: [EnginesService],
  exports: [EnginesService],
})
export class EnginesModule {}
