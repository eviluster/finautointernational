import { Module } from '@nestjs/common';
import { TraccionService } from './traccion.service';
import { TraccionController } from './traccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Traccion } from './entities/traccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Traccion])],
  controllers: [TraccionController],
  providers: [TraccionService],
  exports: [TraccionService],
})
export class TraccionModule {}
