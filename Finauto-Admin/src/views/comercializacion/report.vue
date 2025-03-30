<template>
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Toolbar-->
            <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
              <!--begin::Toolbar container-->
              <div
                id="kt_app_toolbar_container"
                class="app-container container-xxl d-flex flex-stack"
              >
                <!--begin::Page title-->
                <div
                  class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
                >
                  <!--begin::Title-->
                  <h1
                    class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"
                  >
                    Sales Report
                  </h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                </div>

                <!--end::Primary button-->
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Toolbar container-->
          </div>
          <!--end::Toolbar-->
          <!--begin::Content-->
          <div id="kt_app_content" class="app-content flex-column-fluid">
            <!--begin::Content container-->
            <div
              id="kt_app_content_container"
              class="app-container container-xxl"
            >
              <!--begin::Products-->
              <div class="card card-flush">
                <!--begin::Card header-->
                <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <!--begin::Search-->
                    <div
                      class="d-flex align-items-center position-relative my-1"
                    >
                      <i
                        class="ki-duotone ki-magnifier fs-3 position-absolute ms-4"
                      >
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                      <input
                        type="text"
                        data-kt-ecommerce-order-filter="search"
                        class="form-control form-control-solid w-250px ps-12"
                        placeholder="Search Report"
                      />
                    </div>
                    <!--end::Search-->
                    <!--begin::Export buttons-->
                    <div
                      id="kt_ecommerce_report_sales_export"
                      class="d-none"
                    ></div>
                    <!--end::Export buttons-->
                  </div>
                  <!--end::Card title-->
                  <!--begin::Card toolbar-->
                  <div
                    class="card-toolbar flex-row-fluid justify-content-end gap-5"
                  >
                    <!--begin::Daterangepicker-->
                    <input
                      class="form-control form-control-solid w-100 mw-250px"
                      placeholder="Pick date range"
                      id="kt_ecommerce_report_sales_daterangepicker"
                    />
                    <!--end::Daterangepicker-->

                    <div class="m-0">
                      <!--begin::Menu toggle-->
                      <a
                        href="#"
                        class="btn btn-sm btn-flex btn-secondary fw-bold"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i class="ki-duotone ki-filter fs-6 text-muted me-1">
                          <span class="path1"></span>
                          <span class="path2"></span> </i
                        >Filter</a
                      >
                      <!--end::Menu toggle-->
                      <!--begin::Menu 1-->
                      <div
                        class="menu menu-sub menu-sub-dropdown w-250px w-md-300px px-6"
                        data-kt-menu="true"
                        id="kt_menu_66b9a24f9f3be"
                      >
                        <div class="modal-dialog modal-dialog-centered py-6">
                          <div class="modal-content">
                            <!-- Encabezado del modal -->
                            <div class="modal-header">
                              <h5 class="modal-title" id="filterModalLabel">
                                Filtrar Reportes
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <!-- Cuerpo del modal con filtros -->
                            <div class="modal-body">
                              <div class="my-3">
                                <label for="comercialSelect" class="form-label">
                                  Comercial
                                </label>
                                <select
                                  class="form-select"
                                  id="comercialSelect"
                                  v-model="selectedComercial"
                                >
                                  <option value="">
                                    Seleccione un comercial
                                  </option>
                                  <option
                                    v-for="comercial in comerciales"
                                    :key="comercial.id"
                                    :value="comercial.id"
                                  >
                                    {{ comercial.nombre }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="estadoSelect" class="form-label">
                                  Estado
                                </label>
                                <select
                                  class="form-select"
                                  id="estadoSelect"
                                  v-model="selectedEstado"
                                >
                                  <option value="">Seleccione un estado</option>
                                  <option
                                    v-for="estado in estados"
                                    :key="estado.id"
                                    :value="estado.id"
                                  >
                                    {{ estado.nombre }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="productoSelect" class="form-label">
                                  Producto
                                </label>
                                <select
                                  class="form-select"
                                  id="productoSelect"
                                  v-model="selectedProducto"
                                >
                                  <option value="">
                                    Seleccione un producto
                                  </option>
                                  <option
                                    v-for="producto in productos"
                                    :key="producto.id"
                                    :value="producto.id"
                                  >
                                    {{ producto.nombre }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="marcaSelect" class="form-label">
                                  Marca
                                </label>
                                <select
                                  class="form-select"
                                  id="marcaSelect"
                                  v-model="selectedMarca"
                                >
                                  <option value="">Seleccione una marca</option>
                                  <option
                                    v-for="marca in marcas"
                                    :key="marca.id"
                                    :value="marca.id"
                                  >
                                    {{ marca.name.es }}
                                  </option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="modeloSelect" class="form-label">
                                  Modelo
                                </label>
                                <select
                                  class="form-select"
                                  id="modeloSelect"
                                  v-model="selectedModelo"
                                >
                                  <option value="">Seleccione un modelo</option>
                                  <option
                                    v-for="modelo in modelos"
                                    :key="modelo.id"
                                    :value="modelo.id"
                                  >
                                    {{ modelo.name.es }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <!-- Pie del modal -->
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Resetear
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary"
                                @click="applyFilters"
                              >
                                Aplicar Filtros
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body pt-0">
                    <!--begin::Table-->
                    <table
                      class="table align-middle table-row-dashed fs-6 gy-5"
                      id="kt_ecommerce_report_sales_table"
                    >
                      <thead>
                        <tr
                          class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0"
                        >
                          <th class="min-w-100px">Date</th>
                          <th class="text-end min-w-75px">No. Orders</th>
                          <th class="text-end min-w-75px">Products Sold</th>
                          <th class="text-end min-w-100px">Total</th>
                        </tr>
                      </thead>
                      <tbody class="fw-semibold text-gray-600">
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$6.00</td>
                          <td class="text-end">$38.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">15</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">$81.00</td>
                          <td class="text-end">$543.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">22</td>
                          <td class="text-end pe-0">$81.00</td>
                          <td class="text-end">$538.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$73.00</td>
                          <td class="text-end">$489.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$44.00</td>
                          <td class="text-end">$292.00</td>
                        </tr>
                        <tr>
                          <td>May 05, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">20</td>
                          <td class="text-end pe-0">$8.00</td>
                          <td class="text-end">$53.00</td>
                        </tr>
                        <tr>
                          <td>Dec 20, 2024</td>
                          <td class="text-end pe-0">1</td>
                          <td class="text-end pe-0">4</td>
                          <td class="text-end pe-0">$80.00</td>
                          <td class="text-end">$533.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$8.00</td>
                          <td class="text-end">$54.00</td>
                        </tr>
                        <tr>
                          <td>Aug 19, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$36.00</td>
                          <td class="text-end">$241.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">22</td>
                          <td class="text-end pe-0">$5.00</td>
                          <td class="text-end">$30.00</td>
                        </tr>
                        <tr>
                          <td>Jun 24, 2024</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$69.00</td>
                          <td class="text-end">$459.00</td>
                        </tr>
                        <tr>
                          <td>Jun 24, 2024</td>
                          <td class="text-end pe-0">17</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">$84.00</td>
                          <td class="text-end">$562.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <!--end::Table-->
                  </div>
                  <!--end::Card body-->
                </div>
                <!--end::Products-->
              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
          <!--begin::Footer-->
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>

<script>
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed, onMounted } from "vue";
import { useMarcaStore } from "@/stores/marcas";
import { useModeloStore } from "@/stores/modelos";

export default defineComponent({
  name: "SalesReport",
  setup() {
    onMounted(async () => {
      await marcaStore.fetchMarcas();
      await modeloStore.fetchModelos();
    });

    const marcaStore = useMarcaStore();
    const modeloStore = useModeloStore();

    // Variables reactivas para los filtros
    const selectedComercial = ref("");
    const selectedEstado = ref("");
    const selectedProducto = ref("");
    const selectedMarca = ref("");
    const selectedModelo = ref("");

    // Datos de ejemplo para cada select
    const comerciales = ref([
      { id: 1, nombre: "Juan Pérez" },
      { id: 2, nombre: "María Gómez" },
    ]);
    const estados = ref([
      { id: 1, nombre: "Activo" },
      { id: 2, nombre: "Inactivo" },
    ]);
    const productos = ref([
      { id: 1, nombre: "Producto A" },
      { id: 2, nombre: "Producto B" },
    ]);
    const marcas = computed(() => marcaStore.marcas);

    const modelos = computed(() => modeloStore.modelos);

    // Función para aplicar los filtros
    const applyFilters = () => {
      const filtros = {
        comercial: selectedComercial.value,
        estado: selectedEstado.value,
        producto: selectedProducto.value,
        marca: selectedMarca.value,
        modelo: selectedModelo.value,
      };
      console.log("Filtros aplicados", filtros);
      // Aquí puedes emitir un evento o actualizar la lista de reportes
      // Luego de aplicar los filtros, se cierra el modal:
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("filterModal"),
      );
      modal.hide();
    };

    return {
      selectedComercial,
      selectedEstado,
      selectedProducto,
      selectedMarca,
      selectedModelo,
      comerciales,
      estados,
      productos,
      marcas,
      modelos,
      applyFilters,
    };
  },
});
</script>

<style lang="css" scoped>
#kt_app_wrapper {
  margin-left: 0;
  margin-top: 0;
}
.card-header {
  display: initial !important;
}
</style>
