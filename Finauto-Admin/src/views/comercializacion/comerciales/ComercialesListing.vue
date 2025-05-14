<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

import AddComercialModal from "@/components/modals/forms/AddComercialModal.vue";
import EditComercialModal from "@/components/modals/forms/EditComercialModal.vue";
import api from "@/services/api";
import { useComercialStore } from "@/stores/comercial";
import arraySort from "array-sort";

import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "ComercialsListing",
  components: {
    Datatable,

    AddComercialModal,
    EditComercialModal,
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
        columnName: "Apellido",
        columnLabel: "apellido",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Correo",
        columnLabel: "correo",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Teléfono",
        columnLabel: "telefono",
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
    const comercialStore = useComercialStore();
    // Datos reactivos
    const comercials = computed(() => comercialStore.comercials);

    const tableData = computed(() => comercials.value);
    const initComercials = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedComercial = ref<any>(null);

    type Sort = {
      label: string;
      order: "asc" | "desc";
    };

    // Refresca tableData e initComercials a partir de las comercials
    const refreshTableData = () => {
      initComercials.value = [...tableData.value];
    };

    onMounted(async () => {
      await comercialStore.fetchComercials();
      refreshTableData();
    });

    const deleteComercial = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este comercial?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return;
      } else {
        await comercialStore.deleteComercial(id);
        Swal.fire({
          text: "Comercial eliminado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }

      await comercialStore.fetchComercials(); // Recargar las comercials
    };

    const deleteFewComercials = () => {
      selectedIds.value.forEach((id) => deleteComercial(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        console.log(query);
        try {
          const { data } = await api.get("/comercials/search-by-field", {
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
        tableData.value = [...initComercials.value];
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

    // Asigna la comercial seleccionada para edición
    const editComercial = (comercial: any) => {
      selectedComercial.value = comercial;
    };

    return {
      tableHeader,
      tableData,
      comercials,
      search,
      selectedIds,
      selectedComercial,
      deleteComercial,
      deleteFewComercials,
      searchItems,
      sort,
      onItemSelect,
      editComercial,
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
            placeholder="Buscar comercial"
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
          data-kt-comercial-table-toolbar="base"
        >
          <!--begin::Add Comercial-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_comercial"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir comercial
          </button>
          <!--end::Add comercial-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-comercial-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewComercials()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-comercial-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-comercial-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-comercial-table-select="delete_selected"
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
        <template v-slot:name="{ row: comercial }">
          <router-link
            :to="`/apps/comercials/comercial-details/${comercial.id}`"
            class="text-gray-600 text-hover-primary mb-1"
          >
            {{ comercial.name.es }}
          </router-link>
        </template>
        <template v-slot:apellido="{ row: comercial }">
          {{ comercial.apellido }}
        </template>
        <template v-slot:correo="{ row: comercial }">
          {{ comercial.correo }}
        </template>
        <template v-slot:telefono="{ row: comercial }">
          {{ comercial.telefono }}
        </template>
        <template v-slot:actions="{ row: comercial }">
          <!-- Contenedor Dropdown -->
          <div class="dropdown">
            <!-- Botón que despliega el menú (se usa data-bs-toggle="dropdown") -->
            <button
              class="btn btn-sm btn-light btn-active-light-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>

            <!-- Menú desplegable -->
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="dropdown-item">
                <router-link
                  to="/apps/comercials/comercial-details"
                  class="text-decoration-none"
                  @click="editComercial(comercial)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_comercial"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteComercial(comercial.id)"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>

  <ExportComercialModal></ExportComercialModal>
  <EditComercialModal :comercial="selectedComercial"></EditComercialModal>
  <AddComercialModal></AddComercialModal>
</template>

<style scoped></style>
