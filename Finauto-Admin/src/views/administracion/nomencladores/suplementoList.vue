<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddSuplementoModal from "@/components/modals/forms/AddSuplementoModal.vue";
import EditSuplementoModal from "@/components/modals/forms/EditSuplementoModal.vue";
import api from "@/services/api";
import { useSuplementoStore } from "@/stores/suplementos";
import arraySort from "array-sort";

import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CustomersListing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddSuplementoModal,
    EditSuplementoModal,
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
    const suplementoStore = useSuplementoStore();
    // Datos reactivos
    const suplementos = computed(() => suplementoStore.suplementos);

    const tableData = computed(() => suplementos.value);
    const initCustomers = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedSuplemento = ref<any>(null);

    type Sort = {
      label: string;
      order: "asc" | "desc";
    };

    // Refresca tableData e initCustomers a partir de las suplementos
    const refreshTableData = () => {
      initCustomers.value = [...tableData.value];
    };

    onMounted(async () => {
      await suplementoStore.fetchSuplementos();
      refreshTableData();
    });

    const deleteSuplemento = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este suplemento?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return;
      } else {
        await suplementoStore.deleteSuplemento(id);
        Swal.fire({
          text: "Suplemento eliminado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }

      await suplementoStore.fetchSuplementos(); // Recargar las suplementos
    };

    const deleteFewSuplementos = () => {
      selectedIds.value.forEach((id) => deleteSuplemento(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        console.log(query);
        try {
          const { data } = await api.get("/suplementos/search-by-field", {
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

    // Asigna la suplemento seleccionada para edición
    const editSuplemento = (suplemento: any) => {
      selectedSuplemento.value = suplemento;
    };

    return {
      tableHeader,
      tableData,
      suplementos,
      search,
      selectedIds,
      selectedSuplemento,
      deleteSuplemento,
      deleteFewSuplementos,
      searchItems,
      sort,
      onItemSelect,
      editSuplemento,
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
            placeholder="Buscar suplemento"
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
          <!--begin::Add Suplemento-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_suplemento"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir suplemento
          </button>
          <!--end::Add suplemento-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-suplemento-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewSuplementos()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-suplemento-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-suplemento-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-suplemento-table-select="delete_selected"
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
        <template v-slot:name="{ row: suplemento }">
          {{ suplemento.name.es }}
        </template>
        <template v-slot:description="{ row: suplemento }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ suplemento.description.es }}
          </a>
        </template>
        <template v-slot:actions="{ row: suplemento }">
          <a
            href="#"
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
                to="/apps/suplementos/suplemento-details"
                class="menu-link px-3"
                @click="editSuplemento(suplemento)"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_edit_suplemento"
                >Editar</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteSuplemento(suplemento.id)" class="menu-link px-3"
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
  <EditSuplementoModal :suplemento="selectedSuplemento"></EditSuplementoModal>
  <AddSuplementoModal></AddSuplementoModal>
</template>

<style scoped></style>
