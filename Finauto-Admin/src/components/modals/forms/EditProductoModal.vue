<template>
  <div
    class="modal fade"
    id="kt_modal_edit_producto"
    ref="editProductoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-850px miModal">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_edit_producto_header">
          <h2 class="fw-bold">Editar Producto</h2>
          <div
            id="kt_modal_edit_producto_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>
        <Form
          :validation-schema="schema"
          @submit="handleSubmit"
          v-slot="{ errors }"
        >
          <div class="row my-6">
            <!-- Aside column -->
            <div class="col-md-4 my-5">
              <!-- Imagen -->
              <div class="card card-flush py-4 mb-4 px-4">
                <ImageInput
                  v-model="imageUrls"
                  :error="errors.photo?.[0] || ''"
                />
              </div>

              <!-- Estado -->
              <div class="card card-flush py-4 mb-4">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="card-title">Status</h2>
                  <div class="rounded-circle bg-success w-15px h-15px" />
                </div>
                <div class="card-body pt-0">
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
                  <ErrorMessage name="status" class="text-danger" />
                </div>
              </div>

              <!-- Tipo -->
              <div class="card card-flush py-4">
                <div class="card-header">
                  <h2 class="card-title">Product Template</h2>
                </div>
                <div class="card-body pt-0">
                  <label for="template" class="form-label"
                    >Seleccione una plantilla de producto</label
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
                  <ErrorMessage name="tipo" class="text-danger" />
                </div>
              </div>
            </div>

            <!-- Main Column -->
            <div class="col-md-8">
              <div class="card bg-dark text-light">
                <div class="card-body">
                  <h5 class="card-title pb-5">
                    Selecciona un elemento del tipo {{ tipoLabel }}
                  </h5>

                  <!-- Listbox Element -->
                  <Field name="element" v-slot="{ errors: fldErrors }">
                    <Listbox
                      :key="formFields.tipo"
                      v-model="formFields.element"
                      as="div"
                      class="relative"
                    >
                      <ListboxButton class="form-select w-full text-start">
                        <div class="flex items-center justify-between w-full">
                          <img
                            v-if="formFields.element?.galery?.length"
                            :src="formFields.element.galery[0]"
                            alt=""
                            class="me-2 rounded"
                            style="width: 34px; height: 34px; object-fit: cover"
                          />
                          <span class="flex-grow-1 text-center">
                            {{
                              formFields.element
                                ? formFields.element.name.es
                                : "-- Selecciona un elemento --"
                            }}
                          </span>
                          <span>
                            {{
                              formFields.element
                                ? formFields.tipo === "vehicle"
                                  ? formFields.element.PrecioBase
                                  : formFields.element.precioBase
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
                          class="absolute mt-1 w-full bg-secondary rounded shadow max-h-60 overflow-auto z-10"
                        >
                          <ListboxOption
                            v-for="option in elementsOfType"
                            :key="option.id"
                            :value="option"
                            class="cursor-pointer select-none relative py-2 px-3 hover:bg-dark"
                          >
                            <div
                              class="flex items-center justify-between w-full"
                            >
                              <img
                                v-if="option.galery?.length"
                                :src="option.galery[0]"
                                alt=""
                                class="me-2 rounded"
                                style="
                                  width: 34px;
                                  height: 34px;
                                  object-fit: cover;
                                "
                              />
                              <span class="flex-grow-1 truncate text-white">{{
                                option.name.es
                              }}</span>
                              <span class="truncate text-white">
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
                    <div
                      class="text-danger small"
                      v-if="fldErrors.length && !formFields.element"
                    >
                      {{ fldErrors[0] }}
                    </div>
                  </Field>

                  <!-- Precios -->
                  <div class="row my-5">
                    <div class="col-md-6">
                      <label class="form-label">Precio</label>
                      <Field
                        as="input"
                        type="number"
                        name="price"
                        class="form-control"
                        v-model.number="formFields.price"
                        :min="minPrice"
                      />
                      <ErrorMessage name="price" class="text-danger" />
                    </div>
                    <div class="col-md-6" v-if="formFields.status === 'offert'">
                      <label class="form-label">Precio de oferta</label>
                      <Field
                        as="input"
                        type="number"
                        name="offertPrice"
                        class="form-control"
                        v-model.number="formFields.offertPrice"
                      />
                      <ErrorMessage name="offertPrice" class="text-danger" />
                    </div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary mt-5 w-100" type="submit">
                Guardar Cambios
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import Swal from "sweetalert2";
import api from "@/services/api";
import ImageInput from "@/components/ImageInputString.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Transition } from "vue";
import { useProductoStore } from "@/stores/products";

export default defineComponent({
  name: "EditProducto",
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
  props: { producto: { type: Object, required: true } },
  setup(props) {
    const productoStore = useProductoStore();
    const imageUrls = ref<string>(props.producto.photo || "");

    const formFields = ref({
      id: props.producto.id || "",
      status: props.producto.status || "",
      tipo: getTipoFromProducto(props.producto),
      element: props.producto[getTipoFromProducto(props.producto)] || null,
      price: props.producto.price || 0,
      offertPrice: props.producto.offertPrice || 0,
      vigencia: props.producto.vigencia
        ? props.producto.vigencia.substring(0, 10)
        : "",
    });

    const tipoLabel = computed(() => {
      const map: Record<string, string> = {
        vehicle: "Vehículos",
        pieza: "Piezas",
        equipoGarage: "Producto de garaje",
        servicio: "Servicio",
      };
      return map[formFields.value.tipo] || "";
    });

    const config = ref<any>(null);
    const categories = ref<any[]>([]);
    onMounted(async () => {
      const [{ data: cfg }] = await Promise.all([
        api.get("/configuracion/all"),
      ]);
      config.value = cfg.data[0];
    });

    const elementsOfType = ref<any[]>([]);
    watch(
      () => formFields.value.tipo,
      async (tipo) => {
        if (!tipo) return;
        const routes: Record<string, string> = {
          pieza: "/pieza-accesorio/all",
          vehicle: "/vehicle/all",
          servicio: "/servicio/all",
          equipoGarage: "/equipo-garage/all",
        };
        const { data } = await api.get(routes[tipo]);
        elementsOfType.value = data.data;
      },
      { immediate: true },
    );

    const currentImport = computed(() =>
      config.value
        ? Number(
            config.value["importPrice" + capitalize(formFields.value.tipo)],
          )
        : 0,
    );
    const basePrice = computed(() =>
      formFields.value.element
        ? Number(
            formFields.value.element[
              formFields.value.tipo === "vehicle" ? "PrecioBase" : "precioBase"
            ],
          )
        : 0,
    );
    const porcMin = computed(() =>
      Number(config.value?.porcientoMinPrice || 0),
    );
    const basePricePerc = computed(() =>
      Math.round((basePrice.value * porcMin.value) / 100),
    );
    const minPrice = computed(
      () => basePrice.value + currentImport.value + basePricePerc.value,
    );

    const schema = yup.object({
      photo: yup.string().required(),
      status: yup.string().required("El estado es obligatorio"),
      tipo: yup.string().required("El tipo es obligatorio"),
      element: yup.object().nullable().required("Selecciona un elemento"),
      price: yup
        .number()
        .min(minPrice.value, `Precio mínimo ${minPrice.value}`)
        .required("El precio es obligatorio"),
      offertPrice: yup.number().when("status", {
        is: "offert",
        then: (s) => s.required("Precio oferta obligatorio"),
      }),
      vigencia: yup.string().when("status", {
        is: "offert",
        then: (s) => s.matches(/^\d{4}-\d{2}-\d{2}$/, "Formato YYYY-MM-DD"),
      }),
    });

    useForm({ validationSchema: schema, initialValues: formFields.value });

    const handleSubmit = async () => {
      const payload: any = {
        id: formFields.value.id,
        status: formFields.value.status,
        photo: imageUrls.value,
        price: formFields.value.price,
      };
      if (formFields.value.status === "offert") {
        payload.offertPrice = formFields.value.offertPrice;
        payload.vigencia = new Date(formFields.value.vigencia).toISOString();
      }
      payload[formFields.value.tipo] = formFields.value.element;
      try {
        const res = await productoStore.updateProducto(payload); 
        if (res.isSuccess) {
          await productoStore.fetchProductos();
          Swal.fire("Éxito", "Producto actualizado correctamente", "success");
        } else throw new Error(res.errorMessage.es);
      } catch (e: any) {
        Swal.fire("Error", e.message, "error");
      }
    };

    function getTipoFromProducto(prod: any) {
      if (prod.vehicle) return "vehicle";
      if (prod.pieza) return "pieza";
      if (prod.equipoGarage) return "equipoGarage";
      if (prod.servicio) return "servicio";
      return "";
    }
    function capitalize(s: string) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return {
      formFields,
      schema,
      handleSubmit,
      imageUrls,
      elementsOfType,
      tipoLabel,
      minPrice,
    };
  },
});
</script>
<style scoped>
.max-h-60 {
  max-height: 15rem;
}
</style>
