import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";
import asideLayoutVue from "@/layouts/aside-layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/default-layout/DefaultLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "Layout Builder",
          breadcrumbs: ["Layout"],
        },
      },

      {
        path: "/apps/productos/addproduct",
        component: asideLayoutVue,
        children: [
          {
            path: "vehiculo",
            component: () =>
              import("@/views/comercializacion/productos/crear-vehiculo.vue"),
          },
          {
            path: "piezas",
            component: () =>
              import(
                "@/views/comercializacion/productos/crear-piezas-garaje.vue"
              ),
          },
        ],
      },
      {
        path: "/apps/productos/productlisting",
        name: "apps-productos-productlisting",
        component: () =>
          import("@/views/comercializacion/productos/ProductList.vue"),
        meta: {
          pageTitle: "Lista de Productos",
          breadcrumbs: ["Apps", "Productos"],
        },
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        meta: {
          breadcrumbs: ["Pages", "Profile"],
        },
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
            meta: {
              pageTitle: "Projects",
            },
          },

          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
            meta: {
              pageTitle: "Documents",
            },
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
            meta: {
              pageTitle: "Activity",
            },
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () =>
          import("@/views/crafted/pages/wizards/HorizontalWizardPage.vue"),
        meta: {
          pageTitle: "Horizontal",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () =>
          import("@/views/crafted/pages/wizards/VerticalWizardPage.vue"),
        meta: {
          pageTitle: "Vertical",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        meta: {
          breadcrumbs: ["Crafted", "Account"],
        },
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
            meta: {
              pageTitle: "Settings",
            },
          },
          {
            path: "statements",
            name: "account-statements",
            component: () => import("@/views/crafted/account/Statements.vue"),
            meta: {
              pageTitle: "Statements",
            },
          },
        ],
      },
      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () =>
          import("@/views/comercializacion/customers/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () =>
          import("@/views/comercializacion/customers/CustomersListing.vue"),
        meta: {
          pageTitle: "Customers Listing",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () =>
          import("@/views/comercializacion/customers/CustomerDetails.vue"),
        meta: {
          pageTitle: "Customers Details",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/comercializacion/calendar",
        name: "comercializacion-calendar",
        component: () => import("@/views/comercializacion/calendar.vue"),
        meta: {
          pageTitle: "Calendar",
          breadcrumbs: ["Comercializacion"],
        },
      },
      {
        path: "/admin/report",
        name: "administration-reports",
        component: () => import("@/views/comercializacion/report.vue"),
        meta: {
          pageTitle: "Report",
          breadcrumbs: ["Administration", "Reports"],
        },
      },

      // LISTAS DE PROMOCIONES POR MÓDULOS
      {
        path: "/admin/promociones",
        name: "administration-promociones",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesList/promocionGeneralList.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones"],
        },
      },
      {
        path: "/admin/promociones/vehiculo",
        name: "administration-promociones-vehiculo",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesList/promocionVehiculoList.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Vehículo"],
        },
      },
      {
        path: "/admin/promociones/piezas",
        name: "administration-promociones-piezas",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesList/promocionPiezaList.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Piezas"],
        },
      },
      {
        path: "/admin/promociones/equipamiento",
        name: "administration-promociones-equipamiento",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesList/promocionEquipamientoList.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Equipamiento"],
        },
      },
      // END LISTAS DE PROMOCIONES POR MÓDULOS

      // CREAR PROMOCIONES POR MÓDULOS
      {
        path: "/admin/promociones/vehiculo/crear",
        name: "administration-promociones-vehiculo-crear",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesForm/promocionVehiculoCrear.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Vehiculo"],
        },
      },
      {
        path: "/admin/promociones/pieza/crear",
        name: "administration-promociones-pieza-crear",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesForm/promocionPiezaCrear.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Pieza"],
        },
      },
      {
        path: "/admin/promociones/equipamiento/crear",
        name: "administration-promociones-equipamiento-crear",
        component: () =>
          import(
            "@/views/comercializacion/promociones/promocionesForm/promocionEquipamientoCrear.vue"
          ),
        meta: {
          pageTitle: "Promociones",
          breadcrumbs: ["Administration", "Promociones", "Equipamiento"],
        },
      },
      // END CREAR PROMOCIONES POR MÓDULOS

      //CONFIGURACION
      {
        path: "/configuracion/metodos-de-pago",
        name: "configuracion-metodos-de-pago",
        component: () => import("@/views/configuracion/metodosList.vue"),
        meta: {
          pageTitle: "Metodos de pago",
          breadcrumbs: ["Configuracion", "Metodos de pago"],
        },
      },
      {
        path: "/configuracion/tarjetas-credito",
        name: "configuracion-tarjetas-credito",
        component: () => import("@/views/configuracion/tarjetasList.vue"),
        meta: {
          pageTitle: "Tarjetas de credito",
          breadcrumbs: ["Configuracion", "Tarjetas de credito"],
        },
      },
      // {
      //   path: "/configuracion/cuentas-bancarias",
      //   name: "configuracion-cuentas-bancarias",
      //   component: () => import("@/views/configuracion/tarjetasList.vue"),
      //   meta: {
      //     pageTitle: "Cuentas bancarias",
      //     breadcrumbs: ["Configuracion", "Cuentas bancarias"],
      //   },
      // },

      {
        path: "/configuracion/impuestos",
        name: "configuracion-impuestos",
        component: () => import("@/views/configuracion/impuestos.vue"),
        meta: {
          pageTitle: "Impuestos de plataforma",
          breadcrumbs: ["Configuracion", "Impuestos de plataforma"],
        },
      },

      //END CONFIGURACION
      {
        path: "/admin/user/users",
        name: "administration-user",
        component: () => import("@/views/administracion/user/UsuarioList.vue"),
        meta: {
          pageTitle: "Usuarios",
          breadcrumbs: ["Administration", "Users"],
        },
      },
      {
        path: "/admin/user/roles",
        name: "administration-rol",
        component: () => import("@/views/administracion/user/Roles.vue"),
        meta: {
          pageTitle: "Roles",
          breadcrumbs: ["Administration", "Roles"],
        },
      },
      {
        path: "/admin/custom/banner-edit",
        name: "custom-banneredit",
        component: () => import("@/views/apps/custom/EditarBanner.vue"),
        meta: {
          pageTitle: "Roles",
          breadcrumbs: ["Administration", "Roles"],
        },
      },
      {
        path: "/ecommerce/sales/listing",
        name: "sales-listing",
        component: () => import("@/components/ecommerce/OrderListing.vue"),
        meta: {
          pageTitle: "Listado de Ventas",
          breadcrumbs: ["Ecommerce", "Ventas", "Listado"],
        },
      },
      {
        path: "/ecommerce/sales/details",
        name: "sales-details",
        component: () => import("@/components/ecommerce/details-orders.vue"),
        meta: {
          pageTitle: "Detalles de Ventas",
          breadcrumbs: ["Ecommerce", "Ventas", "Detalles"],
        },
      },
      {
        path: "/ecommerce/sales/new-sale",
        name: "new-order",
        component: () => import("@/components/ecommerce/new-order.vue"),
        meta: {
          pageTitle: "Nueva Venta",
          breadcrumbs: ["Ecommerce", "Ventas", "Nueva Orden"],
        },
      },
      {
        path: "/admin/nomencladores/provinces",
        name: "province",
        component: () =>
          import("@/views/administracion/nomencladores/provinciaList.vue"),
        meta: {
          pageTitle: "Listado de Provincias",
          breadcrumbs: ["Administracion", "Nomencladores", "Provincias"],
        },
      },
      {
        path: "/admin/nomencladores/municipality",
        name: "municipality",
        component: () =>
          import("@/views/administracion/nomencladores/municipioList.vue"),
        meta: {
          pageTitle: "Listado de Provincias",
          breadcrumbs: ["Administracion", "Nomencladores", "Municipios"],
        },
      },
      {
        path: "/admin/nomencladores/servicios",
        name: "servicios",
        component: () =>
          import("@/views/administracion/nomencladores/servicioList.vue"),
        meta: {
          pageTitle: "Listado de Servicios",
          breadcrumbs: ["Administracion", "Nomencladores", "Servicios"],
        },
      },
      {
        path: "/admin/nomencladores/marcas",
        name: "marcas",
        component: () =>
          import("@/views/administracion/nomencladores/marcaList.vue"),
        meta: {
          pageTitle: "Listado de Marcas",
          breadcrumbs: ["Administracion", "Nomencladores", "Marcas"],
        },
      },
      {
        path: "/admin/nomencladores/modelos",
        name: "modelos",
        component: () =>
          import("@/views/administracion/nomencladores/modeloList.vue"),
        meta: {
          pageTitle: "Listado de Modelos",
          breadcrumbs: ["Administracion", "Nomencladores", "Modelos"],
        },
      },

      {
        path: "/admin/nomencladores/importadoras",
        name: "importadoras",
        component: () =>
          import("@/views/administracion/nomencladores/importadoraList.vue"),
        meta: {
          pageTitle: "Listado de Importadoras",
          breadcrumbs: ["Administracion", "Nomencladores", "Importadoras"],
        },
      },

      /* Pagina de reservar (Vehiculos) */
      {
        path: "/comercializacion/reservar/vehiculo",
        name: "comercializacion-reservar-vehiculo",
        component: () =>
          import(
            "@/views/comercializacion/reservas/reservasForm/crear-reserva-vehiculo.vue"
          ),
        meta: {
          pageTitle: "Reservar",
          breadcrumbs: ["Comercialización", "Vehiculos", "Reservar"],
        },
      },
      /* Pagina de reservar (Piezas) */
      {
        path: "/comercializacion/reservar/pieza",
        name: "comercializacion-reservar-pieza",
        component: () =>
          import(
            "@/views/comercializacion/reservas/reservasForm/crear-reserva-pieza.vue"
          ),
        meta: {
          pageTitle: "Reservar",
          breadcrumbs: ["Comercialización", "Piezas", "Reservar"],
        },
      },
      /* Pagina de reservar (Equipamientos) */
      {
        path: "/comercializacion/reservar/equipamiento",
        name: "comercializacion-reservar-equipamiento",
        component: () =>
          import(
            "@/views/comercializacion/reservas/reservasForm/crear-reserva-equipamiento.vue"
          ),
        meta: {
          pageTitle: "Reservar",
          breadcrumbs: ["Comercialización", "Equipamientos", "Reservar"],
        },
      },
      /* Pagina de reservar (Servicios) */
      {
        path: "/comercializacion/reservar/servicio",
        name: "comercializacion-reservar-servicio",
        component: () =>
          import(
            "@/views/comercializacion/reservas/reservasForm/crear-reserva-servicio.vue"
          ),
        meta: {
          pageTitle: "Reservar",
          breadcrumbs: ["Comercialización", "Servicios", "Reservar"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // If the route has a hash, scroll to the section with the specified ID; otherwise, scroll toc the top of the page.
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }
});

export default router;
