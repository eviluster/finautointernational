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
            placeholder="Buscar metodo"
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
          <!--begin::Add metodo-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_metodo"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir metodo
          </button>
          <!--end::Add metodo-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-metodo-table-toolbar="selected"
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
          data-kt-metodo-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-metodo-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-metodo-table-select="delete_selected"
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
        <template v-slot:image="{ row: metodo }">
          <img
            :src="metodo.image"
            :alt="metodo.name"
            class="rounded"
            style="width: 50px; height: 50px"
          />
        </template>
        <template v-slot:nombre="{ row: metodo }">
          {{ metodo.nombre }}
        </template>
        <template v-slot:descripcion="{ row: metodo }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ metodo.descripcion }}
          </a>
        </template>
        <template v-slot:actions="{ row: metodo }">
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
                  to="/apps/metodos/metodo-details"
                  class="text-decoration-none"
                  @click="editMetodo(metodo)"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_edit_metodo"
                >
                  Editar
                </router-link>
              </li>
              <li class="dropdown-item">
                <a
                  href="#"
                  class="text-decoration-none"
                  @click.prevent="deleteMetodo(metodo.id)"
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
  <EditMetodoModal :metodo="selectedMetodo"></EditMetodoModal>
  <AddMetodoModal></AddMetodoModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/otros/ExportCustomerModal.vue";
import AddMetodoModal from "@/components/modals/forms/AddMetodoModal.vue";
import EditMetodoModal from "@/components/modals/forms/EditMetodoModal.vue";
import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddMetodoModal,
    EditMetodoModal,
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

    interface IMetodo {
      id: number;
      nombre: string;
      descripcion: string;
      image: string;
    }
    const metodos_de_pago: Array<IMetodo> = [
      {
        id: Math.floor(Math.random() * 99999) + 1,
        nombre: "Metodo 1",
        descripcion: "Este es el Metodo 1",
        image: "https://picsum.photos/200/300",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        nombre: "Metodo 2",
        descripcion: "Este es el Metodo 2",
        image: "https://picsum.photos/200/300",
      },
    ];
    const tableData = ref<Array<IMetodo>>(metodos_de_pago);
    const initCustomers = ref<Array<IMetodo>>([]);

    onMounted(() => {
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });

    const selectedMetodo = ref();

    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteMetodo(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteMetodo = (id: number) => {
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
        let results: Array<IMetodo> = [];
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

    const editMetodo = (metodo) => {
      console.log(metodo.logo);
      selectedMetodo.value = metodo;
    };

    return {
      tableData,
      tableHeader,
      deleteMetodo,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      getAssetPath,
      selectedMetodo,
      editMetodo,
    };
  },
});
</script>
