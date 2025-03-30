import { Module } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { TiposController } from './tipos.controller';
import { Tipo } from './entities/tipo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipo])],
  controllers: [TiposController],
  providers: [TiposService],
  exports: [TiposService],
})
export class TiposModule {}
