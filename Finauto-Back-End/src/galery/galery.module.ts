import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Galery } from './entities/galery.entity';
import { GaleryService } from './galery.service';
import { GaleryController } from './galery.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Galery])
  ],
  controllers: [GaleryController],
  providers: [GaleryService],
  exports: [GaleryService]
})
export class GaleryModule {}
