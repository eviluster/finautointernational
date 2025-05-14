<template>
  <Form @submit="handleSubmit" v-slot="{ errors }">
    <div class="container-fluid py-4">
      <div class="row gx-4 gy-4">
        <!-- Aside column -->
        <aside class="col-12 col-md-4 d-flex flex-column gap-4">
          <!-- Image section -->
          <div class="card card-flush py-4 px-4 h-100">
            <ImageInput v-model="imageUrls" :error="errors.photo?.[0] || ''" />
          </div>

          <!-- Status -->
          <div class="card card-flush py-4 px-4 h-100">
            <div
              class="card-header d-flex justify-content-between align-items-center"
            >
              <h2 class="card-title mb-0">Status</h2>
              <div
                class="rounded-circle bg-success"
                style="width: 15px; height: 15px"
              ></div>
            </div>
            <div class="card-body pt-3">
              <Field
                as="select"
                name="status"
                class="form-select"
                v-model="formFields.status"
              >
                <option disabled value="">Selecciona el estado</option>
                <option value="offert">Offert</option>
                <option value="published">Published</option>
                <option value="stock">Stock</option>
                <option value="inactive">Inactive</option>
              </Field>
              <ErrorMessage name="status" class="text-danger small" />
            </div>
          </div>

          <!-- Template settings -->
          <div class="card card-flush py-4 px-4 h-100">
            <div class="card-header">
              <h2 class="card-title mb-0">Product Template</h2>
            </div>
            <div class="card-body pt-3">
              <label for="template" class="form-label"
                >Selección de plantilla</label
              >
              <Field
                as="select"
                id="template"
                name="tipo"
                class="form-select"
                v-model="formFields.tipo"
              >
                <option disabled value="">
                  Selecciona el tipo de producto
                </option>
                <option value="vehicle">Vehículos</option>
                <option value="pieza">Piezas</option>
                <option value="equipoGarage">Producto de garaje</option>
                <option value="servicio">Servicio</option>
              </Field>
              <ErrorMessage name="tipo" class="text-danger small" />
            </div>
          </div>
        </aside>

        <!-- Main column -->
        <main class="col-12 col-md-8 d-flex flex-column">
          <div class="card bg-dark text-light flex-grow-1">
            <div class="card-body">
              <h5 class="card-title pb-4">Selecciona un elemento del tipo</h5>
              <table
                class="table table-dark table-borderless align-middle mb-4"
              >
                <thead>
                  <tr>
                    <th class="text-center" style="width: 20%">Imagen</th>
                    <th class="text-center" style="width: 50%">Nombre</th>
                    <th class="text-center" style="width: 30%">Precio Base</th>
                  </tr>
                </thead>
              </table>

              <Field name="element" v-slot="{ field }">
                <Listbox
                  v-model="field.value"
                  @update:model-value="(val) => (formFields.element = val)"
                  as="div"
                  class="position-relative"
                >
                  <ListboxButton class="form-select w-100 text-start">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          v-if="field.value?.galery?.length"
                          :src="field.value.galery[0]"
                          class="me-2 rounded"
                          style="width: 34px; height: 34px; object-fit: cover"
                          alt=""
                        />
                        <span>{{
                          field.value
                            ? field.value.name.es
                            : "-- Selecciona un elemento --"
                        }}</span>
                      </div>
                      <span>
                        {{
                          field.value
                            ? formFields.tipo === "vehicle"
                              ? field.value.PrecioBase
                              : field.value.precioBase
                            : ""
                        }}
                      </span>
                    </div>
                  </ListboxButton>

                  <Transition
                    enter="transition ease-out duration-100"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                  >
                    <ListboxOptions
                      class="position-absolute w-100 mt-1 bg-dark text-light rounded shadow max-vh-50 overflow-auto zindex-tooltip"
                    >
                      <ListboxOption
                        v-for="option in elementsOfType"
                        :key="option.id"
                        :value="option"
                        class="d-flex align-items-center py-2 px-3 hover-bg-secondary"
                      >
                        <div
                          class="d-flex align-items-center w-100 justify-content-between pe-5"
                        >
                          <img
                            v-if="option.galery?.length"
                            :src="option.galery[0]"
                            class="me-2 rounded"
                            style="width: 34px; height: 34px; object-fit: cover"
                            alt=""
                          />
                          <span class="text-white">{{ option.name.es }}</span>
                          <span class="text-white">
                            {{
                              formFields.tipo === "vehicle"
                                ? option.PrecioBase
                                : option.precioBase
                            }}
                          </span>
                        </div>
                      </ListboxOption>
                    </ListboxOptions>
                  </Transition>
                </Listbox>
                <ErrorMessage name="element" class="text-danger small" />
              </Field>
            </div>

            <div class="card-body border-top">
              <div class="row gy-3">
                <!-- Importe adicional -->
                <div class="col-12">
                  <p class="text-light mb-2">
                    <strong>Importe adicional:</strong> {{ currentImport }}
                  </p>
                </div>

                <!-- Precio con mínimo dinámico -->
                <div class="col-12 col-md-6">
                  <label class="form-label">Precio</label>
                  <Field
                    as="input"
                    type="number"
                    name="price"
                    class="form-control"
                    v-model.number="formFields.price"
                    :min="minPrice"
                    :placeholder="'Precio mínimo: ' + minPrice"
                  />
                  <ErrorMessage name="price" class="text-danger small" />
                </div>

                <div
                  class="col-12 col-md-6"
                  v-if="formFields.status === 'offert'"
                >
                  <label class="form-label">Precio de oferta</label>
                  <Field
                    as="input"
                    type="number"
                    name="offertPrice"
                    class="form-control"
                    v-model.number="formFields.offertPrice"
                  />
                  <ErrorMessage name="offertPrice" class="text-danger small" />
                </div>

                <div
                  class="col-12 col-md-6"
                  v-if="formFields.status === 'offert'"
                >
                  <label class="form-label">Vigencia</label>
                  <Field
                    as="input"
                    type="date"
                    name="vigencia"
                    class="form-control"
                    v-model="formFields.vigencia"
                  />
                  <ErrorMessage name="vigencia" class="text-danger small" />
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky footer -->
          <div class="sticky-footer mt-3">
            <button class="btn btn-primary w-100" type="submit">
              Crear Producto
            </button>
          </div>
        </main>
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import Swal from "sweetalert2";
import api from "@/services/api";
import ImageInput from "@/components/ImageInputTestProduct.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Transition } from "vue";
import { useProductoStore } from "@/stores/products";

export default defineComponent({
  name: "AddProduct",
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageInput,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Transition,
  },
  setup() {
    const productoStore = useProductoStore();
    const imageUrls = ref<string>("");

    // Campos del formulario
    const formFields = ref({
      photo: "",
      status: "",
      tipo: "",
      element: null as any,
      price: 0,
      offertPrice: 0,
      vigencia: "",
    });

    // Configuración
    const config = ref<{
      importPriceCar: number;
      importPriceService: number;
      importPriceParte: number;
      importPriceEquipoGarage: number;
    } | null>(null);

    onMounted(async () => {
      const { data } = await api.get("/configuracion/all");
      config.value = data.data[0];
    });

    // Elementos según tipo
    const elementsOfType = ref<any[]>([]);
    watch(
      () => formFields.value.tipo,
      async (newTipo) => {
        formFields.value.element = null;
        // actualizamos price al mínimo si ya existe config
        if (minPrice.value) formFields.value.price = minPrice.value;
        if (!newTipo) {
          elementsOfType.value = [];
        } else {
          const routes: Record<string, string> = {
            pieza: "/pieza-accesorio/all",
            vehicle: "/vehicle/all",
            servicio: "/servicio/all",
            equipoGarage: "/equipo-garage/all",
          };
          const { data } = await api.get(routes[newTipo]);
          elementsOfType.value = data.data;
        }
      },
      { immediate: true },
    );

    // Cálculos dinámicos
    const currentImport = computed(() => {
      if (!config.value || !formFields.value.tipo) return 0;
      switch (formFields.value.tipo) {
        case "vehicle":
          return config.value.importPriceCar;
        case "servicio":
          return config.value.importPriceService;
        case "pieza":
          return config.value.importPriceParte;
        case "equipoGarage":
          return config.value.importPriceEquipoGarage;
      }
      return 0;
    });

    const basePrice = computed(() => {
      const el = formFields.value.element;
      if (!el) return 0;
      return formFields.value.tipo === "vehicle"
        ? el.PrecioBase
        : el.precioBase;
    });

    const minPrice = computed(() => basePrice.value + currentImport.value);

    // Si la price actual baja de minPrice, la forzamos
    watch(minPrice, (m) => {
      if (formFields.value.price < m) {
        formFields.value.price = m;
      }
    });

    // Validación
    const schema = yup.object({
      element: yup
        .object()
        .nullable()
        .required("Debes seleccionar un elemento"),
      price: yup
        .number()
        .min(minPrice.value, `El precio mínimo es ${minPrice.value}`)
        .required("El precio es obligatorio"),
      offertPrice: yup
        .number()
        .typeError("El precio de oferta debe ser un número"),
      vigencia: yup
        .string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          "La vigencia debe tener formato YYYY-MM-DD",
        ),
    });
    useForm({ validationSchema: schema });

    // Envío
    const handleSubmit = async (values: any, { resetForm }: any) => {
      try {
        const newProducto: any = {
          status: values.status,
          photo: imageUrls.value,
          price: values.price,
        };
        if (values.status === "offert") {
          newProducto.offertPrice = values.offertPrice;
          newProducto.vigencia = new Date(values.vigencia).toISOString();
        }
        // relación según tipo
        const keyMap: Record<string, string> = {
          vehicle: "vehicle",
          pieza: "pieza",
          servicio: "servicio",
          equipoGarage: "equipoGarage",
        };
        newProducto[keyMap[formFields.value.tipo]] = formFields.value.element;

        const response = await productoStore.addProducto(newProducto);
        if (response.isSuccess) {
          await productoStore.fetchProductos();
          Swal.fire({
            text: "Producto agregado correctamente",
            icon: "success",
            confirmButtonText: "Ok",
            customClass: { confirmButton: "btn btn-primary" },
          });
        } else {
          throw new Error(response.errorMessage.es);
        }
      } catch (err: any) {
        Swal.fire({
          text: err.message || "Error al crear el producto",
          icon: "error",
          confirmButtonText: "Ok",
          customClass: { confirmButton: "btn btn-primary" },
        });
      } finally {
        resetForm();
        imageUrls.value = "";
      }
    };

    return {
      imageUrls,
      formFields,
      elementsOfType,
      currentImport,
      minPrice,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.sticky-footer {
  position: sticky;
  bottom: 0;
  background-color: #0d1117;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.hover-bg-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
.max-vh-50 {
  max-height: 50vh;
}
</style>
