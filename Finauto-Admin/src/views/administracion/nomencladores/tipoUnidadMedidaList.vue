<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddTipoUnidadMedidaModal from "@/components/modals/forms/AddTipoUnidadMedidaModal.vue";
import EditTipoUnidadMedidaModal from "@/components/modals/forms/EditTipoUnidadMedidaModal.vue";
import api from "@/services/api";
import { useTipoUnidadMedidaStore } from "@/stores/tipo-um";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CustomersListing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddTipoUnidadMedidaModal,
    EditTipoUnidadMedidaModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Nombre",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Descripcion",
        columnLabel: "description",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
    const tipounidadmedidaStore = useTipoUnidadMedidaStore();
    // Datos reactivos
    const tipounidadmedidas = computed(
      () => tipounidadmedidaStore.tipounidadmedida,
    );

    const tableData = computed(() => tipounidadmedidas.value);
    const initCustomers = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedTipoUnidadMedida = ref<any>(null);

    type Sort = {
      label: string;
      order: "asc" | "desc";
    };

    // Refresca tableData e initCustomers a partir de las tipounidadmedidas
    const refreshTableData = () => {
      initCustomers.value = [...tableData.value];
    };

    onMounted(async () => {
      await tipounidadmedidaStore.fetchTipoUnidadMedida();
      refreshTableData();
    });

    const deleteTipoUnidadMedida = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este tipo de freno?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return;
      } else {
        await tipounidadmedidaStore.deleteTipoUnidadMedida(id);
        Swal.fire({
          text: "Tipo de freno eliminado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
      await tipounidadmedidaStore.fetchTipoUnidadMedida(); // Recargar las tipounidadmedidas
    };

    const deleteFewTipoUnidadMedidas = () => {
      selectedIds.value.forEach((id) => deleteTipoUnidadMedida(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        console.log(query);
        try {
          const { data } = await api.get("/tipounidadmedidas/search-by-field", {
            params: {
              "name.es": query,
              "name.en": "",
              "description.es": "",
              "description.en": "",
            },
          });
          console.log(data.data);

          if (data.isSuccess) {
            tableData.value = data.data;
          } else {
            tableData.value = [];
          }
        } catch (error) {
          console.error("Error al realizar la búsqueda:", error);
          tableData.value = [];
        }
      } else {
        // Si no hay término de búsqueda, se restauran los datos iniciales
        tableData.value = [...initCustomers.value];
      }
      if (
        typeof MenuComponent !== "undefined" &&
        MenuComponent.reinitialization
      ) {
        MenuComponent.reinitialization();
      }
    };

    // Ordena la tabla según el criterio recibido
    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };

    // Actualiza la lista de IDs seleccionados
    const onItemSelect = (selectedItems: string[]) => {
      selectedIds.value = selectedItems;
    };

    // Asigna la tipounidadmedida seleccionada para edición
    const editTipoUnidadMedida = (tipounidadmedida: any) => {
      selectedTipoUnidadMedida.value = tipounidadmedida;
    };

    return {
      tableHeader,
      tableData,
      tipounidadmedidas,
      search,
      selectedIds,
      selectedTipoUnidadMedida,
      deleteTipoUnidadMedida,
      deleteFewTipoUnidadMedidas,
      searchItems,
      sort,
      onItemSelect,
      editTipoUnidadMedida,
    };
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Buscar tipo de um"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <KTIcon icon-name="exit-up" icon-class="fs-2" />
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add TipoUnidadMedida-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_tipounidadmedida"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir tipo de unidad de medida
          </button>
          <!--end::Add tipounidadmedida-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-tipounidadmedida-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewTipoUnidadMedidas()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-tipounidadmedida-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-tipounidadmedida-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-tipounidadmedida-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:name="{ row: tipounidadmedida }">
          {{ tipounidadmedida.name.es }}
        </template>
        <template v-slot:description="{ row: tipounidadmedida }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ tipounidadmedida.description.es }}
          </a>
        </template>
        <template v-slot:actions="{ row: tipounidadmedida }">
          <a
            nolink
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/tipounidadmedidas/tipounidadmedida-details"
                class="menu-link px-3"
                @click="editTipoUnidadMedida(tipounidadmedida)"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_edit_tipounidadmedida"
                >Editar</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a
                @click="deleteTipoUnidadMedida(tipounidadmedida.id)"
                class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <EditTipoUnidadMedidaModal
    :tipounidadmedida="selectedTipoUnidadMedida"
  ></EditTipoUnidadMedidaModal>
  <AddTipoUnidadMedidaModal></AddTipoUnidadMedidaModal>
</template>

<style scoped></style>
