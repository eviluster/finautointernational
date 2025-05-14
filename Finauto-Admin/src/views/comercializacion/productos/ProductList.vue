<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import api from "@/services/api";
import { useProductoStore } from "@/stores/products";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";
import EditProductoModal from "@/components/modals/forms/EditProductoModal.vue";

export default defineComponent({
  name: "CustomersListing",
  components: { Datatable, EditProductoModal },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Imagen",
        columnLabel: "photo",
        sortEnabled: false,
        columnWidth: 100,
      },
      {
        columnName: "Nombre del producto",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 200,
      },
      {
        columnName: "Estado",
        columnLabel: "status",
        sortEnabled: true,
        columnWidth: 120,
      },
      {
        columnName: "Precio",
        columnLabel: "price",
        sortEnabled: true,
        columnWidth: 120,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);

    const productoStore = useProductoStore();
    const productos = computed(() => productoStore.productos);
    const tableData = computed(() => productos.value);
    const initData = ref<any[]>([]);
    const selectedIds = ref<string[]>([]);
    const search = ref<string>("");
    const selectedProducto = ref<any>(null);

    // Extrae nombre desde servicio, pieza, equipoGarage o vehicle
    const getNestedName = (producto: any): string => {
      if (producto.servicio) return producto.servicio.name.es;
      if (producto.pieza) return producto.pieza.name.es;
      if (producto.equipoGarage) return producto.equipoGarage.name.es;
      if (producto.vehicle) return producto.vehicle.name.es;
      return "";
    };

    // Extrae data URL de la cadena photo
    const extractDataUrl = (input: string): string | null => {
      const regex = /data:image\/[a-zA-Z]+;base64,[^\"]+/;
      const match = input.match(regex);
      return match ? match[0] : null;
    };

    const getPhotoUrl = (photo: any): string | null => {
      if (!photo) return null;
      // Si es array, toma primer elemento
      if (Array.isArray(photo) && photo.length) {
        const url = extractDataUrl(photo[0]);
        return url;
      }
      // Si es string
      if (typeof photo === "string") {
        const url = extractDataUrl(photo);
        return url;
      }
      return null;
    };

    const refreshTableData = () => {
      initData.value = [...tableData.value];
    };

    onMounted(async () => {
      await productoStore.fetchProductos();
      refreshTableData();
    });

    const deleteProducto = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar este producto?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });
      if (!result.isConfirmed) return;
      await productoStore.deleteProducto(id);
      Swal.fire({
        text: "Producto eliminado correctamente",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok",
        heightAuto: false,
        customClass: { confirmButton: "btn btn-primary" },
      });
      await productoStore.fetchProductos();
      refreshTableData();
    };

    const deleteFewProductos = () => {
      selectedIds.value.forEach((id) => deleteProducto(id));
      selectedIds.value = [];
    };

    const searchItems = async () => {
      const query = search.value.trim();
      if (query) {
        try {
          const { data } = await api.get("/productos/search-by-field", {
            params: { "name.es": query },
          });
          tableData.value = data.isSuccess ? data.data : [];
        } catch {
          tableData.value = [];
        }
      } else {
        tableData.value = [...initData.value];
      }
      MenuComponent?.reinitialization?.();
    };

    const sort = ({
      label,
      order,
    }: {
      label: string;
      order: "asc" | "desc";
    }) => {
      if (label)
        arraySort(tableData.value, label, { reverse: order === "asc" });
    };

    const onItemSelect = (selectedItems: string[]) => {
      selectedIds.value = selectedItems;
    };
    const editProducto = (producto: any) => {
      selectedProducto.value = producto;
    };

    return {
      tableHeader,
      tableData,
      search,
      selectedIds,
      selectedProducto,
      deleteProducto,
      deleteFewProductos,
      searchItems,
      sort,
      onItemSelect,
      editProducto,
      getNestedName,
      getPhotoUrl,
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
            placeholder="Buscar producto"
          />
        </div>
      </div>
      <div class="card-toolbar">
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
        ></div>
        <div v-else class="d-flex justify-content-end align-items-center">
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewProductos()"
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
        <template v-slot:photo="{ row: producto }">
          <img
            v-if="getPhotoUrl(producto.photo)"
            :src="getPhotoUrl(producto.photo)"
            :alt="getNestedName(producto)"
            style="width: 50px; height: 50px"
          />
        </template>

        <template v-slot:name="{ row: producto }">{{
          getNestedName(producto)
        }}</template>
        <template v-slot:status="{ row: producto }">{{
          producto.status
        }}</template>
        <template v-slot:price="{ row: producto }">{{
          producto.price
        }}</template>

        <template v-slot:actions="{ row: producto }">
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
                  to="/apps/productos/producto-details"
                  class="text-decoration-none"
                  @click="editProducto(producto)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_producto"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteProducto(producto.id)"
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

    <!-- <EditProductoModal :producto="selectedProducto"></EditProductoModal> -->
  </div>
</template>

<style scoped></style>
