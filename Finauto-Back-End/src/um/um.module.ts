import { Module } from '@nestjs/common';
import { UmService } from './um.service';
import { UmController } from './um.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Um } from './entities/um.entity';
import { TipoUm } from '../tipo-um/entities/tipo-um.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Um, TipoUm])],
  controllers: [UmController],
  providers: [UmService],
  exports: [UmService],
})
export class UmModule {}
