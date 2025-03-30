import { Module } from '@nestjs/common';
import { TipoSuspensionService } from './tipo-suspension.service';
import { TipoSuspensionController } from './tipo-suspension.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSuspension } from './entities/tipo-suspension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSuspension])],
  controllers: [TipoSuspensionController],
  providers: [TipoSuspensionService],
  exports: [TipoSuspensionService],
})
export class TipoSuspensionModule {}
