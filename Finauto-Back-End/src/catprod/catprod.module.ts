import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catprod } from './entities/catprod.entity';
import { CatprodService } from './catprod.service';
import { CatprodController } from './catprod.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Catprod])],
  controllers: [CatprodController],
  providers: [CatprodService],
  exports: [CatprodService],
})
export class CatprodModule {}
