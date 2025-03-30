<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Listado de productos</h3>
      <div class="card-toolbar"></div>
    </div>
    <div class="card-body">
      <Datatable
        :header="tableHeader"
        :data="products"
        @on-sort="sort"
        :checkbox-enabled="true"
      >
        <template v-slot:id="{ row: data }">
          <div :style="{ width: '30px' }">
            {{ data.id }}
          </div>
        </template>
        <template v-slot:nombredelproducto="{ row: data }">
          <div :style="{ width: '200px' }">
            {{ data.nombredelproducto }}
          </div>
        </template>
        <template v-slot:descripion="{ row: data }">
          <div :style="{ width: '500px' }">
            {{ data.descripion }}
          </div>
        </template>

        <template v-slot:módulo="{ row: data }">
          <div :style="{ width: '100px' }">
            {{ data.módulo }}
          </div>
        </template>
        <template v-slot:precio="{ row: data }">
          <div :style="{ width: '100px' }">
            {{ data.precio }}
          </div>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable/table-partials/models";
import arraySort from "array-sort";
import { useProductStore } from "@/stores/products";

export default defineComponent({
  name: "ProductList",
  components: {
    Datatable,
  },
  setup() {
    const productStore = useProductStore();
    const products = computed(() => productStore.getProducts);

    console.log("Productos en el store:", products.value);

    const tableHeader = ref([
      {
        columnName: "",
        columnLabel: "id",
        sortEnabled: true,
      },
      {
        columnName: "Nombre del producto",
        columnLabel: "nombredelproducto",
        sortEnabled: true,
      },
      {
        columnName: "Descripción",
        columnLabel: "descripion",
        sortEnabled: true,
      },

      {
        columnName: "Módulo",
        columnLabel: "módulo",
        sortEnabled: true,
      },
      {
        columnName: "Precio",
        columnLabel: "precio",
        sortEnabled: true,
      },
    ]);

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(products.value, sort.label, { reverse });
      }
    };

    return {
      tableHeader,
      products,
      sort,
    };
  },
});
</script>
