import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { config } from '../ormconfig';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { SectionsModule } from './sections/sections.module';
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
import { PermissionsModule } from './permissions/permissions.module';
import { RolePermissionsModule } from './role-permissions/role-permissions.module';
import { UserRolesModule } from './user-roles/user-roles.module';
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
import { VehicleSuplementModule } from './vehicle-suplement/vehicle-suplement.module';
import { CuentaBancariaModule } from './cuenta-bancaria/cuenta-bancaria.module';
import { OfertaModule } from './oferta/oferta.module';
import { ReservaModule } from './reserva/reserva.module';
import { ComercialModule } from './comercial/comercial.module';
import { PagoModule } from './pago/pago.module';
import { ProductoModule } from './producto/producto.module';
import { ProductoVehiculoSuplementoModule } from './producto-vehiculo-suplemento/producto-vehiculo-suplemento.module';
import { ProductoEstadoModule } from './producto-estado/producto-estado.module';
import { CategoriaPiezaAccesorioModule } from './categoria-pieza-accesorio/categoria-pieza-accesorio.module';
import { PiezaAccesorioModule } from './pieza-accesorio/pieza-accesorio.module';
import { ServicioModule } from './servicio/servicio.module';
import { EquipoGarageModule } from './equipo-garage/equipo-garage.module';
import { CustomerModule } from './customer/customer.module';
import { VehicleVariationsModule } from './vehicle-variations/vehicle-variations.module';
import { VehicleVariationsTypeModule } from './vehicle-variations-type/vehicle-variations-type.module';
import { ParteModule } from './parte/parte.module';
import { CustomerCuentaModule } from './customer-cuenta/customer-cuenta.module';
import { FinAutoCuentaModule } from './fin-auto-cuenta/fin-auto-cuenta.module';

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
    SectionsModule,
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
    PermissionsModule,
    RolePermissionsModule,
    UserRolesModule,
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
    VehicleSuplementModule,
    CuentaBancariaModule,
    OfertaModule,
    ReservaModule,
    ComercialModule,
    PagoModule,
    ProductoModule,
    ProductoVehiculoSuplementoModule,
    ProductoEstadoModule,
    CategoriaPiezaAccesorioModule,
    PiezaAccesorioModule,
    ServicioModule,
    EquipoGarageModule,
    CustomerModule,
    VehicleVariationsModule,
    VehicleVariationsTypeModule,
    ParteModule,
    CustomerCuentaModule,
    FinAutoCuentaModule,
  ],
  controllers: [],
  providers: [],
  exports: [], // Exporta el servicio para ser utilizado en otros módulos
})
export class AppModule {}
