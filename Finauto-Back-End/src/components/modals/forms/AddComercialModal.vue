<template>
  <div
    class="modal fade"
    id="kt_modal_add_comercial"
    ref="addComercialModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir un Comercial</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>

        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <!-- Campo: Nombre del comercial -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del comercial</label>
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del comercial"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Apellido-->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Apellido</label>
              <Field
                name="apellido"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el apellido"
              />
              <ErrorMessage name="apellido" class="text-danger" />
            </div>

            <!-- Campo: Correo -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Correo electrónico</label>
              <Field
                name="correo"
                as="input"
                type="correo"
                class="form-control"
                placeholder="Ponga el correo"
              />
              <ErrorMessage name="correo" class="text-danger" />
            </div>

            <!-- Campo: City / Town -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Teléfono</label>
              <Field
                name="telefono"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el teléfono"
              />
              <ErrorMessage name="telefono" class="text-danger" />
            </div>

            <!-- Footer del formulario -->
            <div class="card-footer my-8 d-flex justify-content-end">
              <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">
                Cancelar
              </a>
              <button type="submit" class="btn btn-bg-primary mx-3">
                Guardar
              </button>
            </div>
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
import { useComercialStore } from "@/stores/comercial";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface AddComercialFormFields {
  name: string;
  correo: string;
  apellido: string;
  addressLineTwo?: string;
  telefono: string;
  postalCode: string;
}

export default defineComponent({
  name: "AddComercial",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const comercialStore = useComercialStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addComercialModalRef = ref<HTMLElement | null>(null);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      correo: yup
        .string()
        .email("Ingrese un correo válido")
        .required("El correo es obligatorio"),
      apellido: yup.string().required("El apellido es obligatorio"),
      telefono: yup.string().required("El telefono es obligatorio"),
    });

    const { errors } = useForm<AddComercialFormFields>({
      validationSchema: schema,
    });

    // Función de envío del formulario
    const handleSubmit = async (
      values: AddComercialFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      const newComercial = {
        name: { es: values.name, en: "" },
        correo: values.correo,
        apellido: values.apellido,
        telefono: values.telefono,
      };

      try {
        await comercialStore.addComercial(newComercial);
        await comercialStore.fetchComercials();

        Swal.fire({
          text: "Comercial agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el comercial",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
        console.error("Error al agregar comercial:", error);
      } finally {
        hideModal(addComercialModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addComercialModalRef,
      errors,
    };
  },
});
</script>

<style scoped></style>
