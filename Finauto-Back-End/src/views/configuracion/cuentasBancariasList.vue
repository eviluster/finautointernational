<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import AddCuentaModal from "@/components/modals/forms/AddCuentaModal.vue";
import EditCuentaModal from "@/components/modals/forms/EditCuentaModal.vue";
import api from "@/services/api";
import { useCuentaStore } from "@/stores/cuenta-bancaria";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CuentasListing",
  components: {
    Datatable,
    AddCuentaModal,
    EditCuentaModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Beneficiario",
        columnLabel: "beneficiario",
        sortEnabled: true,
        columnWidth: 200,
      },
      {
        columnName: "Dirección Benef.",
        columnLabel: "direccionBeneficiario",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Banco",
        columnLabel: "nombreBanco",
        sortEnabled: true,
        columnWidth: 180,
      },
      {
        columnName: "Dirección Banco",
        columnLabel: "direccionBanco",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Código",
        columnLabel: "codigo",
        sortEnabled: true,
        columnWidth: 120,
      },
      {
        columnName: "Moneda",
        columnLabel: "currency",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "N° Cuenta",
        columnLabel: "numeroCuenta",
        sortEnabled: true,
        columnWidth: 150,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    const cuentaStore = useCuentaStore();
    const lista = computed(() => cuentaStore.cuentas);
    const tableData = ref<any[]>([]);
    const initData = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedItem = ref<any>(null);

    const refreshTableData = () => {
      initData.value = [...lista.value];
      tableData.value = [...lista.value];
    };

    onMounted(async () => {
      await cuentaStore.fetchCuentas();
      refreshTableData();
    });

    const deleteItem = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar esta cuenta?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });
      if (!result.isConfirmed) return;
      await cuentaStore.deleteCuenta(id);
      Swal.fire({
        text: "Cuenta eliminada correctamente",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok",
        heightAuto: false,
        customClass: { confirmButton: "btn btn-primary" },
      });
      await cuentaStore.fetchCuentas();
      refreshTableData();
    };

    const deleteSelected = () => {
      selectedIds.value.forEach((id) => deleteItem(id));
      selectedIds.value = [];
    };

    const searchItems = () => {
      const q = search.value.trim().toLowerCase();
      if (q) {
        tableData.value = initData.value.filter((item) =>
          item.cuenta.toLowerCase().includes(q),
        );
      } else {
        tableData.value = [...initData.value];
      }
      if (MenuComponent?.reinitialization) {
        MenuComponent.reinitialization();
      }
    };

    type Sort = { label: string; order: "asc" | "desc" };
    const sort = (s: Sort) => {
      const rev = s.order === "asc";
      if (s.label) arraySort(tableData.value, s.label, { reverse: rev });
    };

    const onItemSelect = (items: string[]) => {
      selectedIds.value = items;
    };

    const editItem = (item: any) => {
      selectedItem.value = item;
    };

    return {
      tableHeader,
      tableData,
      search,
      selectedIds,
      selectedItem,
      deleteItem,
      deleteSelected,
      searchItems,
      sort,
      onItemSelect,
      editItem,
      refreshTableData,
    };
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="card-title">
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
            placeholder="Buscar cuenta"
          />
        </div>
      </div>
      <div class="card-toolbar">
        <div v-if="selectedIds.length === 0" class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_cuenta"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir cuenta
          </button>
        </div>
        <div v-else class="d-flex justify-content-end align-items-center">
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteSelected()"
          >
            Delete Selected
          </button>
        </div>
      </div>
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
        <template v-slot:beneficiario="{ row }">
          {{ row.beneficiario }}
        </template>
        <template v-slot:direccionBeneficiario="{ row }">
          {{ row.direccionBeneficiario }}
        </template>
        <template v-slot:nombreBanco="{ row }">
          {{ row.nombreBanco }}
        </template>
        <template v-slot:direccionBanco="{ row }">
          {{ row.direccionBanco }}
        </template>
        <template v-slot:codigo="{ row }">
          {{ row.codigo }}
        </template>
        <template v-slot:currency="{ row }">
          {{ row.currency }}
        </template>
        <template v-slot:numeroCuenta="{ row }">
          {{ row.numeroCuenta }}
        </template>
        <template v-slot:actions="{ row }">
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
                  to="/apps/vehiculos/vehiculo-details"
                  class="text-decoration-none"
                  @click="editItem(row)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_vehiculo"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteItem(row.id)"
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

    <AddCuentaModal @refresh="refreshTableData" />
    <EditCuentaModal :cuenta="selectedItem" @refresh="refreshTableData" />
  </div>
</template>

<style scoped></style>
