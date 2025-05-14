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
            placeholder="Buscar tarjeta"
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
          <!--begin::Add tarjeta-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_tarjeta"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir tarjeta
          </button>
          <!--end::Add tarjeta-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-tarjeta-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-tarjeta-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-tarjeta-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-tarjeta-table-select="delete_selected"
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
        <template v-slot:image="{ row: tarjeta }">
          <img
            :src="tarjeta.image"
            :alt="tarjeta.name"
            class="rounded"
            style="width: 50px; height: 50px"
          />
        </template>
        <template v-slot:nombre="{ row: tarjeta }">
          {{ tarjeta.nombre }}
        </template>
        <template v-slot:codigo="{ row: tarjeta }">
          {{ tarjeta.codigo }}
        </template>
        <template v-slot:descripcion="{ row: tarjeta }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ tarjeta.descripcion }}
          </a>
        </template>
        <template v-slot:actions="{ row: tarjeta }">
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
                  to="/apps/tarjetas/tarjeta-details"
                  class="text-decoration-none"
                  @click="editTarjeta(tarjeta)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_tarjeta"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteTarjeta(tarjeta.id)"
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

  <ExportCustomerModal></ExportCustomerModal>
  <EditTarjetaModal :tarjeta="selectedTarjeta"></EditTarjetaModal>
  <AddTarjetaModal></AddTarjetaModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddTarjetaModal from "@/components/modals/forms/AddTarjetaModal.vue";
import EditTarjetaModal from "@/components/modals/forms/EditTarjetaModal.vue";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddTarjetaModal,
    EditTarjetaModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Logo",
        columnLabel: "image",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Nombre",
        columnLabel: "nombre",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Codigo",
        columnLabel: "codigo",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Descripcion",
        columnLabel: "descripcion",
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
    const selectedIds = ref<Array<number>>([]);

    interface ITarjeta {
      id: number;
      nombre: string;
      codigo: string;
      descripcion: string;
      image: string;
    }
    const targetas: Array<ITarjeta> = [
      {
        id: Math.floor(Math.random() * 99999) + 1,
        nombre: "tarjeta 1",
        codigo: "123456",
        descripcion: "Este es el tarjeta 1",
        image: "https://picsum.photos/200/300",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        nombre: "tarjeta 2",
        codigo: "12345635345345",
        descripcion: "Este es el tarjeta 2",
        image: "https://picsum.photos/200/300",
      },
    ];
    const tableData = ref<Array<ITarjeta>>(targetas);
    const initCustomers = ref<Array<ITarjeta>>([]);

    onMounted(() => {
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });

    const selectedTarjeta = ref();

    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteTarjeta(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteTarjeta = (id: number) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<ITarjeta> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
      MenuComponent.reinitialization();
    };

    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };

    const editTarjeta = (tarjeta) => {
      console.log(tarjeta.logo);
      selectedTarjeta.value = tarjeta;
    };

    return {
      tableData,
      tableHeader,
      deleteTarjeta,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      getAssetPath,
      selectedTarjeta,
      editTarjeta,
    };
  },
});
</script>
