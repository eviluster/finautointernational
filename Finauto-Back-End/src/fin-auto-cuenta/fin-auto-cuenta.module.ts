import { Module } from '@nestjs/common';
import { FinAutoCuentaService } from './fin-auto-cuenta.service';
import { FinAutoCuentaController } from './fin-auto-cuenta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinAutoCuenta } from './entities/fin-auto-cuenta.entity';
import { CuentaBancaria } from 'src/cuenta-bancaria/entities/cuenta-bancaria.entity';
import { CuentaBancariaModule } from 'src/cuenta-bancaria/cuenta-bancaria.module';

@Module({
  imports: [TypeOrmModule.forFeature([FinAutoCuenta]), 
  CuentaBancariaModule],
  controllers: [FinAutoCuentaController],
  providers: [FinAutoCuentaService],
  exports: [FinAutoCuentaService],
})
export class FinAutoCuentaModule {}
