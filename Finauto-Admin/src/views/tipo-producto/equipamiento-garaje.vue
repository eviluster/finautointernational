<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddEquipamientoModal from "@/components/modals/forms/AddEquipamientoModal.vue";
import EditEquipamientoModal from "@/components/modals/forms/EditEquipamientoModal.vue";
import api from "@/services/api";
import { useEquipamientoStore } from "@/stores/equipamiento";
import arraySort from "array-sort";

import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CustomersListing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddEquipamientoModal,
    EditEquipamientoModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Imagen",
        columnLabel: "galery",
        sortEnabled: false,
        columnWidth: 250,
      },
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
        columnName: "Precio Base",
        columnLabel: "precioBase",
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
    const equipamientoStore = useEquipamientoStore();
    // Datos reactivos
    const equipamientos = computed(() => equipamientoStore.equipamientos);

    const tableData = computed(() => equipamientos.value);
    const initCustomers = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedEquipamiento = ref<any>(null);

    type Sort = {
      label: string;
      order: "asc" | "desc";
    };

    // Refresca tableData e initCustomers a partir de las equipamientos
    const refreshTableData = () => {
      initCustomers.value = [...tableData.value];
    };

    onMounted(async () => {
      await equipamientoStore.fetchEquipamientos();
      refreshTableData();
      console.log(initCustomers.value);
    });

    const deleteEquipamiento = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este equipamiento?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return;
      } else {
        await equipamientoStore.deleteEquipamiento(id);
        Swal.fire({
          text: "Equipamiento eliminado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }

      await equipamientoStore.fetchEquipamientos(); // Recargar las equipamientos
    };

    const deleteFewEquipamientos = () => {
      selectedIds.value.forEach((id) => deleteEquipamiento(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        console.log(query);
        try {
          const { data } = await api.get("/equipamientos/search-by-field", {
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

    // Asigna la equipamiento seleccionada para edición
    const editEquipamiento = (equipamiento: any) => {
      selectedEquipamiento.value = equipamiento;
    };

    return {
      tableHeader,
      tableData,
      equipamientos,
      search,
      selectedIds,
      selectedEquipamiento,
      deleteEquipamiento,
      deleteFewEquipamientos,
      searchItems,
      sort,
      onItemSelect,
      editEquipamiento,
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
            placeholder="Buscar equipamiento"
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
          <!--begin::Add Equipamiento-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_equipamiento"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir equipamiento
          </button>
          <!--end::Add equipamiento-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-equipamiento-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewEquipamientos()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-equipamiento-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-equipamiento-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-equipamiento-table-select="delete_selected"
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
        <template v-slot:galery="{ row: equipamiento }">
          <img
            v-if="equipamiento.galery != null"
            :src="equipamiento.galery[0]"
            :alt="equipamiento.name"
            style="width: 50px; height: 50px"
          />
        </template>
        <template v-slot:name="{ row: equipamiento }">
          {{ equipamiento.name.es }}
        </template>
        <template v-slot:description="{ row: equipamiento }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ equipamiento.description.es }}
          </a>
        </template>
        <template v-slot:precioBase="{ row: equipamiento }">
          {{ equipamiento.precioBase }}
        </template>
        <template v-slot:actions="{ row: equipamiento }">
          <span
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
          </span>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/equipamientos/equipamiento-details"
                class="menu-link px-3"
                @click="editEquipamiento(equipamiento)"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_edit_equipamiento"
                >Editar</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a
                @click="deleteEquipamiento(equipamiento.id)"
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
  <EditEquipamientoModal
    :equipamiento="selectedEquipamiento"
  ></EditEquipamientoModal>
  <AddEquipamientoModal></AddEquipamientoModal>
</template>

<style scoped></style>
