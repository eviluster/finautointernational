<!-- AddConfiguracion.vue -->
<template>
  <div class="container my-4">
    <h2>Crear Configuración</h2>
    <form @submit.prevent="submitForm">
      <div class="row">
        <!-- Primera columna -->
        <div class="col-md-6">
          <div class="mb-3">
            <label for="from" class="form-label">From (Email)</label>
            <input
              type="email"
              id="from"
              v-model="form.from"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="to" class="form-label">To (Email)</label>
            <input
              type="email"
              id="to"
              v-model="form.to"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="porcientoConfReserva" class="form-label"
              >Porciento Conf Reserva (%)</label
            >
            <input
              type="number"
              id="porcientoConfReserva"
              v-model.number="form.porcientoConfReserva"
              class="form-control"
              min="0"
              max="100"
              required
            />
          </div>
          <div class="mb-3">
            <label for="porcientoMinPrice" class="form-label"
              >Porciento Min Price (%)</label
            >
            <input
              type="number"
              id="porcientoMinPrice"
              v-model.number="form.porcientoMinPrice"
              class="form-control"
              min="0"
              max="100"
              required
            />
          </div>
        </div>

        <!-- Segunda columna -->
        <div class="col-md-6">
          <div class="mb-3">
            <label for="tiempoGarantia" class="form-label"
              >Tiempo Garantía (días)</label
            >
            <input
              type="number"
              id="tiempoGarantia"
              v-model.number="form.tiempoGarantia"
              class="form-control"
              min="1"
              required
            />
          </div>
          <div class="mb-3">
            <label for="kmGarantia" class="form-label">Km Garantía</label>
            <input
              type="number"
              id="kmGarantia"
              v-model.number="form.kmGarantia"
              class="form-control"
              min="1"
              required
            />
          </div>
          <div class="mb-3">
            <label for="validezOferta" class="form-label"
              >Validez Oferta (días)</label
            >
            <input
              type="number"
              id="validezOferta"
              v-model.number="form.validezOferta"
              class="form-control"
              min="1"
              required
            />
          </div>

          <!-- Nuevos campos de importPrice -->
          <div class="mb-3">
            <label for="importPriceCar" class="form-label"
              >Import Price Car</label
            >
            <input
              type="number"
              id="importPriceCar"
              v-model.number="form.importPriceCar"
              class="form-control"
              min="0"
              required
            />
          </div>
          <div class="mb-3">
            <label for="importPriceService" class="form-label"
              >Import Price Service</label
            >
            <input
              type="number"
              id="importPriceService"
              v-model.number="form.importPriceService"
              class="form-control"
              min="0"
              required
            />
          </div>
          <div class="mb-3">
            <label for="importPriceParte" class="form-label"
              >Import Price Parte</label
            >
            <input
              type="number"
              id="importPriceParte"
              v-model.number="form.importPriceParte"
              class="form-control"
              min="0"
              required
            />
          </div>
          <div class="mb-3">
            <label for="importPriceEquipoGarage" class="form-label"
              >Import Price Equipo Garage</label
            >
            <input
              type="number"
              id="importPriceEquipoGarage"
              v-model.number="form.importPriceEquipoGarage"
              class="form-control"
              min="0"
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Guardar</button>
      <router-link to="/configuraciones" class="btn btn-link"
        >Cancelar</router-link
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import {
  useConfiguracionStore,
  type IConfiguracion,
} from "@/stores/configuracion";

const router = useRouter();
const configuracionStore = useConfiguracionStore();

// Tipamos el form para que coincida con Omit<IConfiguracion, 'id'>
const form = reactive<Omit<IConfiguracion, "id">>({
  from: "",
  to: "",
  porcientoConfReserva: 0,
  porcientoMinPrice: 0,
  tiempoGarantia: 1,
  kmGarantia: 1,
  validezOferta: 1,

  // Inicialización de los nuevos campos
  importPriceCar: 0,
  importPriceService: 0,
  importPriceParte: 0,
  importPriceEquipoGarage: 0,
});

const submitForm = async () => {
  try {
    await configuracionStore.addConfiguracion({ ...form });
    await configuracionStore.fetchConfiguraciones();
    router.push("/configuracion/generalList");
  } catch (err: any) {
    console.error("Error al guardar configuración:", err);
    const msg =
      err.response?.data?.errorMessage?.es ||
      err.response?.data?.message ||
      "Error al crear configuración";
    alert(msg);
  }
};
</script>
