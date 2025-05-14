import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Role } from './src/roles/entities/role.entity';
import { User } from './src/user/entities/user.entity';
import { Marca } from './src/marcas/entities/marca.entity';
import { Modelo } from './src/modelos/entities/modelo.entity';
import { Tipo } from './src/tipos/entities/tipo.entity';
import { Engine } from './src/engines/entities/engine.entity';
import { TipoUm } from './src/tipo-um/entities/tipo-um.entity';
import { Um } from './src/um/entities/um.entity';
import { TipoFreno } from './src/tipo-freno/entities/tipo-freno.entity';
import { Proveedor } from './src/proveedor/entities/proveedor.entity';
import { Country } from './src/country/entities/country.entity';
import { Province } from './src/province/entities/province.entity';
import { Municipality } from './src/municipality/entities/municipality.entity';
import { Locality } from './src/locality/entities/locality.entity';
import { AddressDetail } from './src/address-details/entities/address-detail.entity';
import { Notification } from './src/notifications/entities/notification.entity';
import { Configuracion } from './src/configuracion/entities/configuracion.entity';

import { Traza } from 'src/trazas/entities/traza.entity';
import { Persona } from 'src/persona-juridica/entities/persona-juridica.entity';
import { TipoPersona } from 'src/tipo-persona-juridica/entities/tipo-persona-juridica.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { EquipoGarage } from 'src/equipo-garage/entities/equipo-garage.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Traccion } from 'src/traccion/entities/traccion.entity';
import { TipoNeumatico } from 'src/tipo-neumatico/entities/tipo-neumatico.entity';
import { CajaCambio } from 'src/caja-cambio/entities/caja-cambio.entity';
import { TipoSuspension } from 'src/tipo-suspension/entities/tipo-suspension.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Comercial } from 'src/comercial/entities/comercial.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { CuentaBancaria } from 'src/cuenta-bancaria/entities/cuenta-bancaria.entity';
import { CustomerCuenta } from 'src/customer-cuenta/entities/customer-cuenta.entity';
import { FinAutoCuenta } from 'src/fin-auto-cuenta/entities/fin-auto-cuenta.entity';
import { NombreTipoSuspension } from 'src/nombre-tipo-suspension/entities/nombre-tipo-suspension.entity';
import { Galery } from 'src/galery/entities/galery.entity';
import { PiezaAccesorio } from 'src/pieza-accesorio/entities/pieza-accesorio.entity';
import { Calendar } from 'src/calendar/entities/calendar.entity';
import { Catprod } from './src/catprod/entities/catprod.entity';
dotenv.config(); // Carga las variables de entorno desde el archivo .env

// Agrega este console.log para depurar el valor de la variable de entorno DB_PASS
console.log('Valor de DB_PASS:', process.env.DB_PASS.toString());
// Agrega este console.log para depurar el valor de la variable de entorno DB_USER
console.log('Valor de DB_USER:', process.env.DB_USER);

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // entities: ['src/**/entities/*.entity.ts'],

  logging: true,
  logger: 'advanced-console',

  entities: [
    Customer,
    AddressDetail,
    CajaCambio,
    Comercial,
    Configuracion,
    Country,
    CuentaBancaria,
    CustomerCuenta,
    Engine,
    EquipoGarage,
    FinAutoCuenta,
    Locality,
    Marca,
    Modelo,
    Municipality,
    NombreTipoSuspension,
    Notification,
    Pago,
    Persona,
    Producto,
    Proveedor,
    Province,
    Reserva,
    Role,
    Servicio,
    Tipo,
    TipoFreno,
    TipoNeumatico,
    TipoPersona,
    TipoSuspension,
    TipoUm,
    Traccion,
    Traza,
    Um,
    User,
    Vehicle,
    TipoSuspension,
    Galery,
    PiezaAccesorio,
    Calendar,
    Catprod,
  ],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
};

export default config;
