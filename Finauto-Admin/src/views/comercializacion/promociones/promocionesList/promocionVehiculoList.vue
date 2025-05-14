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
            placeholder="Buscar promocion"
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
          <!--begin::Add promocion-->
          <button
            type="button"
            class="btn btn-primary"
            @click="router.push('/admin/promociones/vehiculo/crear')"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Añadir promocion
          </button>
          <!--end::Add promocion-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-promocion-table-toolbar="selected"
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
          data-kt-promocion-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-promocion-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-promocion-table-select="delete_selected"
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
        <template v-slot:image="{ row: promocion }">
          <img
            :src="promocion.image"
            :alt="promocion.name"
            style="width: 50px; height: 50px"
          />
        </template>
        <template v-slot:modulo="{ row: promocion }">
          {{ promocion.modulo }}
        </template>
        <template v-slot:producto="{ row: promocion }">
          {{ promocion.producto }}
        </template>
        <template v-slot:date_venta="{ row: promocion }">
          {{ promocion.date_venta }}
        </template>
        <template v-slot:date_disfrute="{ row: promocion }">
          {{ promocion.date_disfrute }}
        </template>
        <template v-slot:actions="{ row: promocion }">
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
                to="/apps/promociones/promocion-details"
                class="menu-link px-3"
                @click="editPromocion(promocion)"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_edit_promocion"
                >Editar</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(promocion.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <div class="menu-item px-3">
              <a class="menu-link px-3">Compartir</a>
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <!-- <EditPromocionModal :promocion="selectedPromocion"></EditPromocionModal> -->
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { hideModal } from "@/core/helpers/modal";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import EditPromocionModal from "@/components/modals/forms/EditPromocionModal.vue";
import type { IPromocion } from "@/core/data/promociones";

import arraySort from "array-sort";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    EditPromocionModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Imagen",
        columnLabel: "image",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "Módulo",
        columnLabel: "modulo",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Producto",
        columnLabel: "producto",
        sortEnabled: true,
        columnWidth: 250,
      },
      {
        columnName: "Fecha de venta",
        columnLabel: "date_venta",
        sortEnabled: true,
        columnWidth: 160,
      },
      {
        columnName: "Fecha de disfrute",
        columnLabel: "date_disfrute",
        sortEnabled: true,
        columnWidth: 160,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
    const promocionesVehiculo = ref([
      {
        id: 1,
        nombre: "Descuento en Toyota Corolla 2022",
        codigo: "CAR-001",
        producto: "Toyota Corolla 2022",
        estado: "disponible",
        date_venta: "2025-02-10",
        date_disfrute: "2025-03-01",
        modulo: "Vehiculo",
        image: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        nombre: "Promoción Honda Civic 2021",
        codigo: "CAR-002",
        producto: "Honda Civic 2021",
        estado: "no disponible",
        date_venta: "2025-01-20",
        date_disfrute: "2025-02-15",
        modulo: "Vehiculo",
        image: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        nombre: "Promocion Ford Ranger 2023",
        codigo: "CAR-003",
        producto: "Ford Ranger 2023",
        estado: "disponible",
        date_venta: "2025-01-05",
        date_disfrute: "2025-01-25",
        modulo: "Vehiculo",
        image: "https://picsum.photos/200/600",
      },
      {
        id: 4,
        nombre: "Descuento Mazda CX-5 2024",
        codigo: "CAR-004",
        producto: "Mazda CX-5 2024",
        estado: "no disponible",
        date_venta: "2024-12-15",
        date_disfrute: "2025-01-10",
        modulo: "Vehiculo",
        image: "https://picsum.photos/200/700",
      },
      {
        id: 5,
        nombre: "Promoción Kia Sportage 2023",
        codigo: "CAR-005",
        producto: "Kia Sportage 2023",
        estado: "disponible",
        date_venta: "2025-02-01",
        date_disfrute: "2025-02-20",
        modulo: "Vehiculo",
        image: "https://picsum.photos/200/800",
      },
    ]);
    const router = useRouter();
    const selectedIds = ref<Array<number>>([]);

    const tableData = ref<Array<IPromocion>>(promocionesVehiculo.value);
    const initCustomers = ref<Array<IPromocion>>([]);

    onMounted(() => {
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });

    const selectedPromocion = ref();

    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteCustomer(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteCustomer = (id: number) => {
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
        let results: Array<IPromocion> = [];
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

    const editPromocion = (promocion) => {
      console.log(promocion.image);
      selectedPromocion.value = promocion;
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      getAssetPath,
      selectedPromocion,
      editPromocion,
      promocionesVehiculo,
      router,
    };
  },
});
</script>
