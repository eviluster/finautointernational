<template>
  <div class="card p-4 bg-dark text-white">
    <h5 class="mb-3">
      Valor de impuestos por uso de la plataforma aplicada a los clientes
    </h5>

    <div class="d-flex flex-row align-items-center">
      <div class="mb-3 w-25 me-5">
        <label class="form-label">Impuesto*</label>
        <div class="input-group">
          <span class="input-group-text">%</span>
          <input
            type="number"
            class="form-control"
            v-model="taxValue"
            min="0"
            max="300"
          />
          <!-- <button class="btn btn-outline-light" @click="editTax">✏️</button> -->
        </div>
      </div>
      <button class="btn btn-primary h-25 mt-3" @click="saveTax">
        Guardar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const taxValue = ref(5);

const editTax = () => {
  console.log("Editar impuesto", taxValue.value);
};

const saveTax = () => {
  console.log("Guardando impuesto", taxValue.value);
};
</script>

<style scoped>
.card {
}
</style>
