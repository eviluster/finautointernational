import type { MenuItem } from "@/layouts/default-layout/config/types";
import { ref, computed, watch } from "vue";
import { useAppStore } from "@/stores/store";

export default function useDynamicMenu() {
  const store = useAppStore();
  const menuItems = ref<Array<MenuItem>>([]);

  const computedMenuItems = computed(() => {
    if (store.categoriaSeleccionada === "Vehículo") {
      return [
        {
          pages: [
            {
              heading: "dashboard",
              route: "/dashboard",
              keenthemesIcon: "element-11",
              bootstrapIcon: "bi-app-indicator",
            },
          ],
        },
        {
          heading: "craft",
          route: "/crafted",
          pages: [
            {
              sectionTitle: "account",
              route: "/account",
              keenthemesIcon: "profile-circle",
              bootstrapIcon: "bi-person",
              sub: [
                {
                  heading: "accountOverview",
                  route: "/crafted/account/overview",
                },
                {
                  heading: "settings",
                  route: "/crafted/account/settings",
                },
                {
                  heading: "Statements",
                  route: "/crafted/account/statements",
                },
              ],
            },
            {
              sectionTitle: "authentication",
              keenthemesIcon: "fingerprint-scanning",
              bootstrapIcon: "bi-sticky",
              sub: [
                {
                  sectionTitle: "basicFlow",
                  sub: [
                    {
                      heading: "signIn",
                      route: "/sign-in",
                    },
                    {
                      heading: "signUp",
                      route: "/sign-up",
                    },
                    {
                      heading: "passwordReset",
                      route: "/password-reset",
                    },
                  ],
                },
                {
                  heading: "multiStepSignUp",
                  route: "/multi-step-sign-up",
                },
                {
                  heading: "error404",
                  route: "/404",
                },
                {
                  heading: "error500",
                  route: "/500",
                },
              ],
            },
          ],
        },
        //           Comercialización        //
        {
          heading: "Comercialización",
          route: "/apps",
          pages: [
            {
              sectionTitle: "Ecommerce",
              route: "/ecommerce",
              keenthemesIcon: "shop",
              bootstrapIcon: "bi-cart",
              sub: [
                {
                  sectionTitle: "Productos",
                  route: "/productos",
                  sub: [
                    {
                      heading: "Añadir producto",
                      route: "/apps/productos/addproduct",
                    },
                    {
                      heading: "Lista de productos",
                      route: "/apps/productos/productlisting",
                    },
                  ],
                },
              ],
            },
            {
              heading: "Promociones",
              route: "/admin/promociones/vehiculo",
              keenthemesIcon: "notepad",
              bootstrapIcon: "bi-calendar3-event",
            },

            {
              heading: "calendarApp",
              route: "/apps/calendar",
              keenthemesIcon: "calendar-8",
              bootstrapIcon: "bi-calendar3-event",
            },
          ],
        },
        //               Administración            //
        {
          heading: "Administración",
          route: "/admin",
          pages: [
            {
              sectionTitle: "Nomencladores",
              route: "/admin/nomencladores",
              keenthemesIcon: "devices",
              bootstrapIcon: "bi-calendar3-event",
              sub: [],
            },
          ],
        },
      ];
    } else if (store.categoriaSeleccionada === "Pieza") {
      return [
        {
          pages: [
            {
              heading: "dashboard",
              route: "/dashboard",
              keenthemesIcon: "element-11",
              bootstrapIcon: "bi-app-indicator",
            },
          ],
        },
        {
          heading: "craft",
          route: "/crafted",
          pages: [
            {
              sectionTitle: "account",
              route: "/account",
              keenthemesIcon: "profile-circle",
              bootstrapIcon: "bi-person",
              sub: [
                {
                  heading: "accountOverview",
                  route: "/crafted/account/overview",
                },
                {
                  heading: "settings",
                  route: "/crafted/account/settings",
                },
                {
                  heading: "Statements",
                  route: "/crafted/account/statements",
                },
              ],
            },
            {
              sectionTitle: "authentication",
              keenthemesIcon: "fingerprint-scanning",
              bootstrapIcon: "bi-sticky",
              sub: [
                {
                  sectionTitle: "basicFlow",
                  sub: [
                    {
                      heading: "signIn",
                      route: "/sign-in",
                    },
                    {
                      heading: "signUp",
                      route: "/sign-up",
                    },
                    {
                      heading: "passwordReset",
                      route: "/password-reset",
                    },
                  ],
                },
                {
                  heading: "multiStepSignUp",
                  route: "/multi-step-sign-up",
                },
                {
                  heading: "error404",
                  route: "/404",
                },
                {
                  heading: "error500",
                  route: "/500",
                },
              ],
            },
          ],
        },
        //           Comercialización        //
        {
          heading: "Comercialización",
          route: "/apps",
          pages: [
            {
              sectionTitle: "Ecommerce",
              route: "/ecommerce",
              keenthemesIcon: "shop",
              bootstrapIcon: "bi-cart",
              sub: [
                {
                  sectionTitle: "Productos",
                  route: "/productos",
                  sub: [
                    {
                      heading: "Añadir producto",
                      route: "/apps/productos/addproduct",
                    },
                    {
                      heading: "Lista de productos",
                      route: "/apps/productos/productlisting",
                    },
                  ],
                },
              ],
            },

            {
              heading: "Promociones",
              route: "/admin/promociones/piezas",
              keenthemesIcon: "notepad",
              bootstrapIcon: "bi-calendar3-event",
            },

            {
              heading: "calendarApp",
              route: "/comercializacion/calendar",
              keenthemesIcon: "calendar-8",
              bootstrapIcon: "bi-calendar3-event",
            },
          ],
        },
        //               Administración            //
        {
          heading: "Administración",
          route: "/admin",
          pages: [
            {
              sectionTitle: "Nomencladores",
              route: "/admin/nomencladores",
              keenthemesIcon: "devices",
              bootstrapIcon: "bi-calendar3-event",
              sub: [],
            },
          ],
        },
      ];
    } else if (store.categoriaSeleccionada === "Equipamiento de garaje") {
      return [
        {
          pages: [
            {
              heading: "dashboard",
              route: "/dashboard",
              keenthemesIcon: "element-11",
              bootstrapIcon: "bi-app-indicator",
            },
          ],
        },
        {
          heading: "craft",
          route: "/crafted",
          pages: [
            {
              sectionTitle: "account",
              route: "/account",
              keenthemesIcon: "profile-circle",
              bootstrapIcon: "bi-person",
              sub: [
                {
                  heading: "accountOverview",
                  route: "/crafted/account/overview",
                },
                {
                  heading: "settings",
                  route: "/crafted/account/settings",
                },
                {
                  heading: "Statements",
                  route: "/crafted/account/statements",
                },
              ],
            },
            {
              sectionTitle: "authentication",
              keenthemesIcon: "fingerprint-scanning",
              bootstrapIcon: "bi-sticky",
              sub: [
                {
                  sectionTitle: "basicFlow",
                  sub: [
                    {
                      heading: "signIn",
                      route: "/sign-in",
                    },
                    {
                      heading: "signUp",
                      route: "/sign-up",
                    },
                    {
                      heading: "passwordReset",
                      route: "/password-reset",
                    },
                  ],
                },
                {
                  heading: "multiStepSignUp",
                  route: "/multi-step-sign-up",
                },
                {
                  heading: "error404",
                  route: "/404",
                },
                {
                  heading: "error500",
                  route: "/500",
                },
              ],
            },
          ],
        },
        //           Comercialización        //
        {
          heading: "Comercialización",
          route: "/apps",
          pages: [
            {
              sectionTitle: "Ecommerce",
              route: "/ecommerce",
              keenthemesIcon: "shop",
              bootstrapIcon: "bi-cart",
              sub: [
                {
                  sectionTitle: "Productos",
                  route: "/productos",
                  sub: [
                    {
                      heading: "Añadir producto",
                      route: "/apps/productos/addproduct",
                    },
                    {
                      heading: "Lista de productos",
                      route: "/apps/productos/productlisting",
                    },
                  ],
                },
              ],
            },

            {
              heading: "Promociones",
              route: "/admin/promociones/equipamiento",
              keenthemesIcon: "notepad",
              bootstrapIcon: "bi-calendar3-event",
            },

            {
              heading: "calendarApp",
              route: "/apps/calendar",
              keenthemesIcon: "calendar-8",
              bootstrapIcon: "bi-calendar3-event",
            },
          ],
        },
        //               Administración            //
        {
          heading: "Administración",
          route: "/admin",
          pages: [
            {
              sectionTitle: "Nomencladores",
              route: "/admin/nomencladores",
              keenthemesIcon: "devices",
              bootstrapIcon: "bi-calendar3-event",
              sub: [],
            },
          ],
        },
      ];
    } else if (store.categoriaSeleccionada === "Servicio") {
      return [
        {
          pages: [
            {
              heading: "dashboard",
              route: "/dashboard",
              keenthemesIcon: "element-11",
              bootstrapIcon: "bi-app-indicator",
            },
          ],
        },

        //           Comercialización        //
        {
          heading: "Comercialización",
          route: "/apps",
          pages: [
            {
              heading: "Reservas de servicios",
              route: "/admin/reservas",
              keenthemesIcon: "notepad",
              bootstrapIcon: "bi-calendar3-event",
            },
          ],
        },
      ];
    }
    // Retorno por defecto
    return [
      {
        pages: [
          {
            heading: "dashboard",
            route: "/dashboard",
            keenthemesIcon: "element-11",
            bootstrapIcon: "bi-app-indicator",
          },
        ],
      },
      {
        heading: "craft",
        route: "/crafted",
        pages: [
          {
            sectionTitle: "account",
            route: "/account",
            keenthemesIcon: "profile-circle",
            bootstrapIcon: "bi-person",
            sub: [
              {
                heading: "accountOverview",
                route: "/crafted/account/overview",
              },
              {
                heading: "settings",
                route: "/crafted/account/settings",
              },
              {
                heading: "Statements",
                route: "/crafted/account/statements",
              },
            ],
          },
          {
            sectionTitle: "authentication",
            keenthemesIcon: "fingerprint-scanning",
            bootstrapIcon: "bi-sticky",
            sub: [
              {
                sectionTitle: "basicFlow",
                sub: [
                  {
                    heading: "signIn",
                    route: "/sign-in",
                  },
                  {
                    heading: "signUp",
                    route: "/sign-up",
                  },
                  {
                    heading: "passwordReset",
                    route: "/password-reset",
                  },
                ],
              },
              {
                heading: "multiStepSignUp",
                route: "/multi-step-sign-up",
              },
              {
                heading: "error404",
                route: "/404",
              },
              {
                heading: "error500",
                route: "/500",
              },
            ],
          },
        ],
      },
      //           Comercialización        //
      {
        heading: "Comercialización",
        route: "/apps",
        pages: [
          {
            heading: "Lista de reservas",
            route: "/admin/reservas",
            keenthemesIcon: "notepad",
            bootstrapIcon: "bi-calendar3-event",
          },

          {
            sectionTitle: "Clientes",
            route: "/clientes",
            keenthemesIcon: "abstract-38",
            bootstrapIcon: "bi-printer",
            sub: [
              {
                heading: "customersListing",
                route: "/apps/customers/customers-listing",
              },
              {
                heading: "customerDetails",
                route: "/apps/customers/customer-details",
              },
            ],
          },
          {
            sectionTitle: "Ecommerce",
            route: "/ecommerce",
            keenthemesIcon: "shop",
            bootstrapIcon: "bi-cart",
            sub: [
              {
                sectionTitle: "Ventas",
                route: "/ecommerce/sales",
                sub: [
                  {
                    heading: "Nueva Venta",
                    route: "/ecommerce/sales/new-sale",
                  },
                  {
                    heading: "Listado de Ventas",
                    route: "/ecommerce/sales/listing",
                  },
                ],
              },
              {
                sectionTitle: "Productos",
                route: "/productos",
                sub: [
                  {
                    heading: "Añadir producto",
                    route: "/apps/productos/addproduct",
                  },
                  {
                    heading: "Lista de productos",
                    route: "/apps/productos/productlisting",
                  },
                ],
              },
            ],
          },
          {
            heading: "Reportes",
            route: "/admin/report",
            keenthemesIcon: "notepad",
            bootstrapIcon: "bi-calendar3-event",
          },

          {
            heading: "Promociones",
            route: "/admin/promociones",
            keenthemesIcon: "notepad",
            bootstrapIcon: "bi-calendar3-event",
          },

          {
            heading: "calendarApp",
            route: "/comercializacion/calendar",
            keenthemesIcon: "calendar-8",
            bootstrapIcon: "bi-calendar3-event",
          },
        ],
      },
      //               Administración            //
      {
        heading: "Administración",
        route: "/admin",
        pages: [
          {
            sectionTitle: "User",
            route: "/admin/user",
            keenthemesIcon: "user",
            bootstrapIcon: "bi-printer",
            sub: [
              {
                heading: "Usuarios",
                route: "/admin/user/users",
              },
              {
                heading: "Roles",
                route: "/admin/user/roles",
              },
              {
                heading: "Permisos",
                route: "/admin/user/permisos",
              },
            ],
          },

          {
            sectionTitle: "Nomencladores",
            route: "/admin/nomencladores",
            keenthemesIcon: "devices",
            bootstrapIcon: "bi-calendar3-event",
            sub: [
              {
                sectionTitle: "Ubicacion",
                route: "/admin/nomencladores",
                sub: [
                  {
                    heading: "Provincia",
                    route: "/admin/nomencladores/provinces",
                  },
                  {
                    heading: "Municipio",
                    route: "/admin/nomencladores/municipality",
                  },
                ],
              },
              {
                heading: "Servicios",
                route: "/admin/nomencladores/servicios",
              },
              {
                heading: "Marcas",
                route: "/admin/nomencladores/marcas",
              },
              {
                heading: "Modelos",
                route: "/admin/nomencladores/modelos",
              },
              {
                heading: "Importadoras",
                route: "/admin/nomencladores/importadoras",
              },
            ],
          },
          {
            sectionTitle: "Custom",
            route: "/admin/custom",
            keenthemesIcon: "notepad",
            bootstrapIcon: "bi-calendar3-event",
            sub: [
              { heading: "Editar Banner", route: "/admin/custom/banner-edit" },
            ],
          },
        ],
      },
      //               Configuración            //
      {
        heading: "configuración",
        route: "/configuracion",
        pages: [
          {
            heading: "Metodos de pago",
            route: "/configuracion/metodos-de-pago",
          },
          {
            heading: "Tarjetas de credito",
            route: "/configuracion/tarjetas-credito",
          },
          {
            heading: "Cuentas bancarias",
            route: "/configuracion/cuentas-bancarias",
          },
          {
            heading: "Impuestos de plataforma",
            route: "/configuracion/impuestos",
          },
        ],
      },
    ]; // Retorno por defecto
  });

  watch(
    computedMenuItems,
    (newValue) => {
      menuItems.value = newValue;
      console.log("El arreglo de menú ha cambiado:", newValue);
    },
    { immediate: true },
  );

  return {
    menuItems,
  };
}
