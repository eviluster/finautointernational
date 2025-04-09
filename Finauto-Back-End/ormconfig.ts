import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Role } from './src/roles/entities/role.entity';
import { User } from './src/user/entities/user.entity';
import { Section } from './src/sections/entities/section.entity';
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
import { RolePermission } from './src/role-permissions/entities/role-permission.entity';
import { Permission } from './src/permissions/entities/permission.entity';
import { UserRole } from './src/user-roles/entities/user-role.entity';
import { Configuracion } from './src/configuracion/entities/configuracion.entity';

import { Traza } from 'src/trazas/entities/traza.entity';
import { PersonaTipo } from 'src/persona-tipo/entities/persona-tipo.entity';
import { Persona } from 'src/persona-juridica/entities/persona-juridica.entity';
import { TipoPersona } from 'src/tipo-persona-juridica/entities/tipo-persona-juridica.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { VehicleVariation } from 'src/vehicle-variations/entities/vehicle-variation.entity';
import { VehicleVariationsType } from 'src/vehicle-variations-type/entities/vehicle-variations-type.entity';
import { EquipoGarage } from 'src/equipo-garage/entities/equipo-garage.entity';
import { Parte } from 'src/parte/entities/parte.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Traccion } from 'src/traccion/entities/traccion.entity';
import { TipoNeumatico } from 'src/tipo-neumatico/entities/tipo-neumatico.entity';
import { CajaCambio } from 'src/caja-cambio/entities/caja-cambio.entity';
import { TipoSuspension } from 'src/tipo-suspension/entities/tipo-suspension.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { VehicleSuplement } from 'src/vehicle-suplement/entities/vehicle-suplement.entity';
import { ProductoVehiculoSuplemento } from 'src/producto-vehiculo-suplemento/entities/producto-vehiculo-suplemento.entity';
import { Oferta } from 'src/oferta/entities/oferta.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Comercial } from 'src/comercial/entities/comercial.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { CuentaBancaria } from 'src/cuenta-bancaria/entities/cuenta-bancaria.entity';
import { CustomerCuenta } from 'src/customer-cuenta/entities/customer-cuenta.entity';
import { FinAutoCuenta } from 'src/fin-auto-cuenta/entities/fin-auto-cuenta.entity';
import { NombreTipoSuspension } from 'src/nombre-tipo-suspension/entities/nombre-tipo-suspension.entity';
import { PiezaAccesorio } from 'src/pieza-accesorio/entities/pieza-accesorio.entity';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // entities: ['src/**/entities/*.entity.ts'],

  entities: [
    PiezaAccesorio,
    TipoSuspension,
    NombreTipoSuspension,
    Traza,
    Configuracion,
    User,
    Role,
    Permission,
    RolePermission,
    UserRole,
    Notification,
    Section,
    Marca,
    Modelo,
    Tipo,
    Engine,
    TipoUm,
    TipoFreno,
    Um,
    Proveedor,
    Country,
    Province,
    Municipality,
    Locality,
    AddressDetail,
    TipoPersona,
    Persona,
    // New tables
    Customer,
    Traccion,
    TipoNeumatico,
    CajaCambio,
    TipoSuspension,
    Vehicle,
    VehicleVariation,
    VehicleVariationsType,
    Parte,
    Producto,
    EquipoGarage,
    Servicio,
    VehicleSuplement,
    ProductoVehiculoSuplemento,
    Oferta,
    Reserva,
    Comercial,
    Pago,
    CuentaBancaria,
    CustomerCuenta,
    FinAutoCuenta,
  ],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
};

export default config;
