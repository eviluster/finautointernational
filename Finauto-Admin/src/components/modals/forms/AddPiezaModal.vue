<template>
  <div
    class="modal fade"
    id="kt_modal_add_pieza"
    ref="addPiezaModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <h2 class="fw-bold">Añadir un Pieza</h2>
          <div
            id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <!-- Añadimos @submit para que llame a handleSubmit -->
        <Form
          :validation-schema="schema"
          @submit="handleSubmit"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <ImageInput v-model="imageUrls" :error="errors.galery || ''" />
            </div>

            <!-- Campo: Nombre del pieza -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del pieza</label>
              <!-- Cambiado name="nombre" → name="name" -->
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del pieza"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Descripción</label>
              <!-- Cambiado name="descripcion" → name="description" -->
              <Field
                name="description"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>
          </div>

          <!-- Campo: Precio Base -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Precio Base</label>
            <Field
              name="precioBase"
              as="input"
              type="number"
              class="form-control"
              placeholder="Ponga el precio base"
            />
            <ErrorMessage name="precioBase" class="text-danger" />
          </div>

          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button type="submit" class="btn btn-bg-primary mx-3">
              Guardar
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { usePiezaStore } from "@/stores/pieza";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImageInput from "@/components/ImageInputTest.vue";

interface AddPiezaFormFields {
  name: string;
  description: string;
  precioBase: number;
  galery: string[];
}

export default defineComponent({
  name: "AddPieza",
  components: { Form, Field, ErrorMessage, ImageInput },

  setup() {
    const piezaStore = usePiezaStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addPiezaModalRef = ref<HTMLElement | null>(null);
    const imageUrls = ref<string[]>([]);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string(),
      precioBase: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio base es obligatorio"),
      galery: yup
        .array()
        .of(yup.string())
        .max(5, "Solo se permiten hasta 5 imágenes"),
    });

    const { errors } = useForm<AddPiezaFormFields>({
      validationSchema: schema,
    });

    const handleSubmit = async (
      values: AddPiezaFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando", values);

      const newPieza = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        galery: imageUrls.value,
        precioBase: values.precioBase,
      };

      try {
        const response = await piezaStore.addPieza(newPieza);
        await piezaStore.fetchPiezas();
        Swal.fire({
          text: "Pieza agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el pieza",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
        console.error("Error al agregar pieza:", error);
      } finally {
        hideModal(addPiezaModalRef.value);
        resetForm();
        imageUrls.value = [];
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addPiezaModalRef,
      imageUrls,
      errors,
    };
  },
});
</script>
