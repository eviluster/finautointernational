<template>
  <div class="container mt-4">
    <h2 class="mb-4">Crear Promocion</h2>
    <form @submit="submitForm">
      <div class="row">
        <div class="col-md-6 mb-4">
          <!-- Producto (Select dinámico) -->
          <div class="mb-3">
            <label for="producto" class="required form-label">Producto</label>
            <select
              class="form-select"
              id="producto"
              v-model="producto"
              :class="{ 'is-invalid': productoError }"
            >
              <option disabled value="">Selecciona un producto</option>
              <option v-for="item in productos" :key="item.id" :value="item.id">
                {{ item.name }}
              </option>
            </select>
            <div v-if="productoError" class="invalid-feedback">
              {{ productoError }}
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <!-- Precio de promocion -->
          <div class="mb-3">
            <label for="precioPromocion" class="required form-label"
              >Precio de promocion</label
            >
            <input
              type="number"
              class="form-control"
              id="precioPromocion"
              v-model="precioPromocion"
              :class="{ 'is-invalid': precioPromocionError }"
            />
            <div v-if="precioPromocionError" class="invalid-feedback">
              {{ precioPromocionError }}
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <!-- Idioma de creación -->
          <div class="mb-3">
            <label for="idioma" class="form-label">Idioma de creación</label>
            <select class="form-select" id="idioma" v-model="idioma">
              <option disabled value="">Selecciona un idioma</option>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <!-- Nombre de promocion -->
          <div class="mb-3">
            <label for="nombrePromocion" class="required form-label"
              >Nombre de promocion</label
            >
            <input
              type="text"
              class="form-control"
              id="nombrePromocion"
              v-model="nombrePromocion"
              :class="{ 'is-invalid': nombrePromocionError }"
            />
            <div v-if="nombrePromocionError" class="invalid-feedback">
              {{ nombrePromocionError }}
            </div>
          </div>
        </div>
      </div>

      <!-- Período de venta (desde / hasta) -->
      <div class="row mb-4">
        <div class="col">
          <label class="form-label">Promocion para vender desde</label>
          <input type="date" class="form-control" v-model="fechaVentaInicio" />
        </div>
        <div class="col">
          <label class="form-label">Hasta</label>
          <input type="date" class="form-control" v-model="fechaVentaFin" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <!-- Días de la semana -->
          <div class="mb-3">
            <label class="mb-3 form-label"
              >¿A qué días de la semana quieres aplicar la promocion?</label
            >
            <!-- Checkbox para "Todos los días" -->
            <!-- :checked="daysOfWeek.value.length === daysOptions.length" -->
            <div class="mb-3 form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="allDays"
                @change="toggleAllDays"
              />
              <label class="form-check-label" for="allDays">
                Todos los días de la semana
              </label>
            </div>

            <!-- Checkbox individual para cada día -->
            <div
              class="mb-3 form-check"
              v-for="day in daysOptions"
              :key="day.value"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="day.value"
                :value="day.value"
                v-model="daysOfWeek"
              />
              <label class="form-check-label" :for="day.value">
                {{ day.label }}
              </label>
            </div>

            <!-- Mensaje de error si no se selecciona ningún día (validación) -->
            <div v-if="daysOfWeekError" class="text-danger">
              {{ daysOfWeekError }}
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <!-- Sección de imagen -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <ImageInput v-model="imageUrl" :error="errors.image || ''" />
          </div>
        </div>
      </div>

      <!-- Descripción -->
      <div class="mb-4">
        <label for="descripcion" class="required form-label">Descripción</label>
        <textarea
          class="form-control"
          id="descripcion"
          rows="3"
          v-model="descripcion"
          :class="{ 'is-invalid': descripcionError }"
        ></textarea>
        <div v-if="descripcionError" class="invalid-feedback">
          {{ descripcionError }}
        </div>
      </div>

      <!-- Botón para guardar -->
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import ImageInput from "@/components/ImageInput.vue";

// Definir esquema de validación con Yup
const validationSchema = yup.object({
  producto: yup.string().required("El producto es obligatorio"),
  nombrePromocion: yup
    .string()
    .required("El nombre de la promocion es obligatorio"),
  precioPromocion: yup
    .number()
    .required("El precio de la promocion es obligatorio"),
  descripcion: yup.string().required("La descripción es obligatoria"),
  daysOfWeek: yup.array().min(1, "Debes seleccionar al menos un día"),
  image: yup.string().required("La imagen es obligatoria"),
});

const imageUrl = ref("");
// Inicializar el formulario con VeeValidate
const { handleSubmit } = useForm({
  validationSchema,
});

// Desestructuramos la propiedad value y errorMessage de cada campo
const { value: producto, errorMessage: productoError } = useField("producto");
const { value: nombrePromocion, errorMessage: nombrePromocionError } =
  useField("nombrePromocion");
const { value: precioPromocion, errorMessage: precioPromocionError } =
  useField("precioPromocion");
const { value: descripcion, errorMessage: descripcionError } =
  useField("descripcion");
const { value: daysOfWeek, errorMessage: daysOfWeekError } =
  useField("daysOfWeek");
const { errors } = useForm({ validationSchema });
// Lista de opciones de días (para mostrar en el template)
const daysOptions = [
  { label: "Lunes", value: "monday" },
  { label: "Martes", value: "tuesday" },
  { label: "Miércoles", value: "wednesday" },
  { label: "Jueves", value: "thursday" },
  { label: "Viernes", value: "friday" },
  { label: "Sábado", value: "saturday" },
  { label: "Domingo", value: "sunday" },
];

// Otros campos sin validación
const idioma = ref("");
const fechaVentaInicio = ref("");
const fechaVentaFin = ref("");

// 6. Función para togglear "Todos los días"
function toggleAllDays(e) {
  if (e.target.checked) {
    // Selecciona todos los días
    daysOfWeek.value = daysOptions.map((d) => d.value);
  } else {
    // Desmarca todos
    daysOfWeek.value = [];
  }
}

// Array reactivo para cargar productos dinámicamente
const productos = ref([
  { id: "1", name: "Toyota Corolla 2022" },
  { id: "2", name: "Mazda CX-5 2024" },
]);

// Manejar el envío del formulario
const submitForm = handleSubmit((values) => {
  console.log("Formulario válido:", values);
  alert("Formulario enviado correctamente");
});
</script>

<style scoped>
/* Estilos locales (opcional) */
</style>
