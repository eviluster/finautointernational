<template>
  <div
    class="modal fade"
    id="kt_modal_add_servicio"
    ref="addServicioModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <h2 class="fw-bold">Añadir un Servicio</h2>
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

            <!-- Campo: Nombre del servicio -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del servicio</label>
              <!-- Cambiado name="nombre" → name="name" -->
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del servicio"
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
import { useServicioStore } from "@/stores/servicios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImageInput from "@/components/ImageInputTest.vue";

interface AddServicioFormFields {
  name: string;
  description: string;
  precioBase: number;
  galery: string[];
}

export default defineComponent({
  name: "AddServicio",
  components: { Form, Field, ErrorMessage, ImageInput },

  setup() {
    const servicioStore = useServicioStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addServicioModalRef = ref<HTMLElement | null>(null);
    const imageUrls = ref<string[]>([]);

    // Alineamos los nombres de los campos con los <Field name="...">
    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string().required("La descripción es obligatoria"),
      precioBase: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio base es obligatorio"),
      galery: yup
        .array()
        .of(yup.string())
        .max(5, "Solo se permiten hasta 5 imágenes"),
    });

    const { errors } = useForm<AddServicioFormFields>({
      validationSchema: schema,
    });

    const handleSubmit = async (
      values: AddServicioFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando", values);

      const newServicio = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        galery: imageUrls.value,
        precioBase: values.precioBase,
      };

      try {
        const response = await servicioStore.addServicio(newServicio);
        await servicioStore.fetchServicios();
        Swal.fire({
          text: "Servicio agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el servicio",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
        console.error("Error al agregar servicio:", error);
      } finally {
        hideModal(addServicioModalRef.value);
        resetForm();
        imageUrls.value = [];
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addServicioModalRef,
      imageUrls,
      errors,
    };
  },
});
</script>
