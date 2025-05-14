import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scart } from './entities/scart.entity';
import { ScartService } from './scart.service';
import { ScartController } from './scart.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Scart])
  ],
  controllers: [ScartController],
  providers: [ScartService],
  exports: [ScartService]
})
export class ScartModule {}
