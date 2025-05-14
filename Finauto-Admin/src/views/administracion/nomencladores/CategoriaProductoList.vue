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
            placeholder="Buscar categoria-pieza-accesorio"
          />
        </div>
      </div>
      <div class="card-toolbar">
        <div v-if="selectedIds.length === 0" class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_categoriaproducto"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir categoria-producto
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
            @click="deleteFewCategoriaProductos()"
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
        <template #name="{ row }">
          {{ row.name.es }}
        </template>
        <template #tipo="{ row }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ row.tipo }}
          </a>
        </template>
        <template #actions="{ row }">
          <div class="dropdown">
            <button
              class="btn btn-sm btn-light btn-active-light-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li class="dropdown-item">
                <router-link
                  to="/apps/piezaaccesorios/piezaaccesorio-details"
                  class="text-decoration-none"
                  @click="editCategoriaProducto(row)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_categoriaproducto"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteCategoriaProducto(row.id)"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </template>
      </Datatable>
    </div>

    <EditCategoriaProductoModal
      :categoriaproducto="selectedCategoriaProducto"
    ></EditCategoriaProductoModal>
    <AddCategoriaProductoModal></AddCategoriaProductoModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddCategoriaProductoModal from "@/components/modals/forms/AddCategoriaProductoModal.vue";
import EditCategoriaProductoModal from "@/components/modals/forms/EditCategoriaProductoModal.vue";
import api from "@/services/api";
import { useCategoriaProductoStore } from "@/stores/categoria-producto";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CustomersListing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCategoriaProductoModal,
    EditCategoriaProductoModal,
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
        columnName: "Tipo",
        columnLabel: "tipo",
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

    const categoriaproductoStore = useCategoriaProductoStore();
    const categoriaproductos = computed(
      () => categoriaproductoStore.categoriaproducto,
    );

    const initCustomers = ref<any[]>([]);
    const tableData = computed(() => categoriaproductos.value);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedCategoriaProducto = ref<any>(null);

    type Sort = {
      label: string;
      order: "asc" | "desc";
    };

    const refreshTableData = () => {
      initCustomers.value = [...tableData.value];
    };

    onMounted(async () => {
      await categoriaproductoStore.fetchCategoriaProducto();
      refreshTableData();
    });

    const deleteCategoriaProducto = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este tipo de freno?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) return;

      await categoriaproductoStore.deleteCategoriaProducto(id);
      Swal.fire({
        text: "Tipo de freno eliminado correctamente",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok",
        heightAuto: false,
        customClass: { confirmButton: "btn btn-primary" },
      });

      await categoriaproductoStore.fetchCategoriaProducto();
      refreshTableData();
    };

    const deleteFewCategoriaProductos = () => {
      selectedIds.value.forEach((id) => deleteCategoriaProducto(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        try {
          const { data } = await api.get(
            "/categoriaproductos/search-by-field",
            {
              params: {
                "name.es": query,
                "name.en": "",
                "tipo.es": "",
                "tipo.en": "",
              },
            },
          );
          tableData.value = data.isSuccess ? data.data : [];
        } catch (error) {
          console.error("Error al realizar la búsqueda:", error);
          tableData.value = [];
        }
      } else {
        tableData.value = [...initCustomers.value];
      }

      if (MenuComponent?.reinitialization) {
        MenuComponent.reinitialization();
      }
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };

    const onItemSelect = (selectedItems: string[]) => {
      selectedIds.value = selectedItems;
    };

    const editCategoriaProducto = (categoriaproducto: any) => {
      console.log(categoriaproducto);
      selectedCategoriaProducto.value = categoriaproducto;
    };

    return {
      tableHeader,
      tableData,
      search,
      selectedIds,
      selectedCategoriaProducto,
      deleteCategoriaProducto,
      deleteFewCategoriaProductos,
      searchItems,
      sort,
      onItemSelect,
      editCategoriaProducto,
    };
  },
});
</script>

<style scoped></style>
