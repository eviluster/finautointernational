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
        <Form :validation-schema="schema" @submit="handleSubmit">
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
                    Selecciona un elemento del tipo
                  </h5>

                  <!-- Listbox Element -->
                  <Field name="element" v-slot="{ field, meta }">
                    <!-- igual que en AddProducto -->
                    <!-- ... copia el mismo bloque de Listbox que tienes en AddProducto -->
                    <Listbox
                      v-model="field.value"
                      @update:model-value="
                        (val) => (formFields.element = val.id)
                      "
                      as="div"
                      class="relative"
                    >
                      <ListboxButton class="form-select w-full text-start">
                        <span
                          class="flex items-center"
                          style="
                            width: 100% !important;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <span>
                            <img
                              v-if="field.value?.galery?.length"
                              :src="field.value.galery[0]"
                              alt=""
                              class="me-2 rounded"
                              style="
                                width: 34px;
                                height: 34px;
                                object-fit: cover;
                              "
                            />
                          </span>
                          <span>{{
                            field.value
                              ? field.value.name.es
                              : "-- Selecciona un elemento --"
                          }}</span>
                          <span
                            class="ms-2"
                            v-if="formFields.tipo === 'vehicle'"
                          >
                            {{ field.value ? field.value.PrecioBase : "" }}
                          </span>
                          <span class="ms-2" v-else>
                            {{ field.value ? field.value.precioBase : "" }}
                          </span>
                        </span>
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
                          class="absolute mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto z-10"
                        >
                          <ListboxOption
                            v-for="option in elementsOfType"
                            :key="option.id"
                            :value="option"
                            class="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            <div
                              class=""
                              style="
                                width: 100% !important;
                                display: flex;
                                justify-content: space-between;
                                padding-right: 20px;
                                align-items: center;
                              "
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
                              <span class="block truncate text-white">{{
                                option.name.es
                              }}</span>
                              <span
                                class="block truncate text-white"
                                v-if="formFields.tipo === 'vehicle'"
                              >
                                {{ option.PrecioBase }}
                              </span>
                              <span class="block truncate text-white" v-else>
                                {{ option.precioBase }}
                              </span>
                            </div>
                          </ListboxOption>
                        </ListboxOptions>
                      </Transition>
                    </Listbox>
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

              <button class="btn btn-primary mt-5" type="submit">
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
import { defineComponent, ref, onMounted, watch } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import Swal from "sweetalert2";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Transition, watchEffect } from "vue";
import { useProductoStore } from "@/stores/products";
import api from "@/services/api";
import ImageInput from "@/components/ImageInputString.vue";

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
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const productoStore = useProductoStore();
    const imageUrls = ref<string>("");
    const elementsOfType = ref<Array<any>>([]);
    const formFields = ref<{
      id: string;
      photo: string[];
      status: string;
      element: any;
      tipo: string;
      price?: number;
      offertPrice?: number;
    }>({
      id: "",
      photo: [],
      status: "",
      element: "",
      tipo: "",
    });

    const schema = yup.object({
      photo: yup.array().of(yup.string()).max(1, "Máximo 1 imagen"),
      status: yup.string().required("El estado es obligatorio"),
      tipo: yup.string().required("El tipo es obligatorio"),
      element: yup.object().nullable().required("Selecciona un elemento"),
      price: yup.number().typeError("Debe ser un número").required(),
      offertPrice: yup.number().typeError("Debe ser un número"),
    });

    const { errors } = useForm({ validationSchema: schema });

    watchEffect(() => {
      if (props.producto) {
        console.log(props.producto);
        const tipo = getTipoFromProducto(props.producto);
        formFields.value.id = props.producto.id || "";
        formFields.value.tipo = tipo;
        formFields.value.status = props.producto.status || "";
        formFields.value.price = props.producto.price || 0;
        formFields.value.offertPrice = props.producto.offertPrice || 0;
        formFields.value.element = props.producto.id;
        imageUrls.value = extractDataUrl(props.producto.photo);
        console.log(formFields.value.photo);
        console.log(imageUrls.value);
        console.log(props.producto.id);
      }
    });

    const handleSubmit = async (values: any) => {
      const updatedProducto: any = {
        id: formFields.value.id,
        status: formFields.value.status,
        price: formFields.value.price,
        offertPrice: formFields.value.offertPrice,
        photo: imageUrls.value,
      };

      // const tipo = formFields.value.tipo;
      // updatedProducto[tipo] = formFields.value.element;

      try {
        await productoStore.updateProducto(updatedProducto);
        await productoStore.fetchProductos();
        Swal.fire("Éxito", "Producto actualizado correctamente", "success");
      } catch (error) {
        console.error("Error al actualizar:", error);
        Swal.fire("Error", "No se pudo actualizar el producto", "error");
      }
    };

    // Extrae data URL de la cadena photo
    const extractDataUrl = (input: string) => {
      const regex = /data:image\/[a-zA-Z]+;base64,[^\"]+/;
      const match = input.match(regex);
      return match ? match[0] : null;
    };

    const getTipoFromProducto = (producto: any) => {
      if (producto.vehicle) return "vehicle";
      if (producto.pieza) return "pieza";
      if (producto.equipoGarage) return "equipoGarage";
      if (producto.servicio) return "servicio";
      return "";
    };

    watch(
      () => formFields.value.tipo,
      async (tipo) => {
        if (!tipo) return;
        const endpoints: Record<string, string> = {
          pieza: "/pieza-accesorio/all",
          vehicle: "/vehicle/all",
          servicio: "/servicio/all",
          equipoGarage: "/equipo-garage/all",
        };
        const { data } = await api.get(endpoints[tipo]);
        elementsOfType.value = data.data;
      },
      { immediate: true },
    );

    return {
      formFields,
      errors,
      handleSubmit,
      imageUrls,
      elementsOfType,
    };
  },
});
</script>
<style scoped>
#headlessui-listbox-options-2 {
  background-color: #272a34 !important;
}
</style>
