import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { config } from '../ormconfig';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { MarcasModule } from './marcas/marcas.module';
import { ModelosModule } from './modelos/modelos.module';
import { TiposModule } from './tipos/tipos.module';
import { EnginesModule } from './engines/engines.module';
import { TipoUmModule } from './tipo-um/tipo-um.module';
import { UmModule } from './um/um.module';
import { TipoFrenoModule } from './tipo-freno/tipo-freno.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CountryModule } from './country/country.module';
import { ProvinceModule } from './province/province.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { AddressDetailsModule } from './address-details/address-details.module';
import { LocalityModule } from './locality/locality.module';
import { TranslateModule } from './translate/translate.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TrazasModule } from './trazas/trazas.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';

import { TrazaService } from './trazas/trazas.service';
import { PersonaTipoModule } from './persona-tipo/persona-tipo.module';
import { TipoPersonaModule } from './tipo-persona-juridica/tipo-persona-juridica.module';
import { PersonaModule } from './persona-juridica/persona-juridica.module';
import { ProveedorPersonaModule } from './proveedor-persona/proveedor-persona.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { TraccionModule } from './traccion/traccion.module';
import { TipoNeumaticoModule } from './tipo-neumatico/tipo-neumatico.module';
import { CajaCambioModule } from './caja-cambio/caja-cambio.module';
import { NombreTipoSuspensionModule } from './nombre-tipo-suspension/nombre-tipo-suspension.module';
import { TipoSuspensionModule } from './tipo-suspension/tipo-suspension.module';
import { CuentaBancariaModule } from './cuenta-bancaria/cuenta-bancaria.module';
import { ReservaModule } from './reserva/reserva.module';
import { ComercialModule } from './comercial/comercial.module';
import { PagoModule } from './pago/pago.module';
import { ProductoModule } from './producto/producto.module';
import { CategoriaPiezaAccesorioModule } from './categoria-pieza-accesorio/categoria-pieza-accesorio.module';

import { PiezaAccesorioModule } from './pieza-accesorio/pieza-accesorio.module';
import { ServicioModule } from './servicio/servicio.module';
import { EquipoGarageModule } from './equipo-garage/equipo-garage.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerCuentaModule } from './customer-cuenta/customer-cuenta.module';
import { FinAutoCuentaModule } from './fin-auto-cuenta/fin-auto-cuenta.module';
import { GaleryModule } from './galery/galery.module';
import { CalendarModule } from './calendar/calendar.module';
import { ScartModule } from './scart/scart.module';
import { CatprodModule } from './catprod/catprod.module';
import { VentaModule } from './venta/venta.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(config),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/parking'),
    AuthModule,
    UserModule,
    RolesModule,
    MarcasModule,
    ModelosModule,
    TiposModule,
    EnginesModule,
    TipoUmModule,
    UmModule,
    TipoFrenoModule,
    ProveedorModule,
    CountryModule,
    ProvinceModule,
    MunicipalityModule,
    AddressDetailsModule,
    LocalityModule,
    TranslateModule,
    NotificationsModule,
    TrazasModule,
    ConfiguracionModule,
    TipoPersonaModule,
    PersonaModule,
    PersonaTipoModule,
    ProveedorPersonaModule,
    VehicleModule,
    TraccionModule,
    TipoNeumaticoModule,
    CajaCambioModule,
    NombreTipoSuspensionModule,
    TipoSuspensionModule,
    CuentaBancariaModule,
    ReservaModule,
    ComercialModule,
    PagoModule,
    ProductoModule,
    CategoriaPiezaAccesorioModule,
    PiezaAccesorioModule,
    ServicioModule,
    EquipoGarageModule,
    CustomerModule,
    CustomerCuentaModule,
    FinAutoCuentaModule,
    GaleryModule,
    CalendarModule,
    ScartModule,
    CatprodModule,
    VentaModule,
  ],
  controllers: [],
  providers: [],
  exports: [], // Exporta el servicio para ser utilizado en otros módulos
})
export class AppModule {}
