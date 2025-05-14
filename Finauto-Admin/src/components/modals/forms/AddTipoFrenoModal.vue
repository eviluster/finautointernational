<template>
  <div
    class="modal fade"
    id="kt_modal_add_tipofreno"
    ref="addTipoFrenoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir una tipo de freno</h2>
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
            <!-- Campo: Nombre del tipofreno -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label"
                >Nombre del tipo de freno</label
              >
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del tipofreno"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="form-label">Descripción</label>
              <Field
                name="description"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>
          </div>

          <!-- Footer del formulario -->
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
import { useTipoFrenoStore } from "@/stores/tipo-freno";
import Swal from "sweetalert2/dist/sweetalert2.js";
interface AddTipoFrenoFormFields {
  name: string;
  description: string;
}
export default defineComponent({
  name: "AddTipoFreno",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const tipofrenoStore = useTipoFrenoStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addTipoFrenoModalRef = ref<HTMLElement | null>(null);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string(),
    });

    const { errors } = useForm<AddTipoFrenoFormFields>({
      validationSchema: schema,
    });
    const selectedOption = ref(null);

    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      const newTipoFreno = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
      };

      try {
        const response = await tipofrenoStore.addTipoFreno(newTipoFreno);
        await tipofrenoStore.fetchTipoFreno();

        Swal.fire({
          text: "Tipo de freno agregada correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } catch (error: any) {
        console.error("Error al agregar tipofreno:", error);

        Swal.fire({
          text: "Error al crear el tipo de freno",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } finally {
        hideModal(addTipoFrenoModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addTipoFrenoModalRef,
      errors,
      selectedOption,
    };
  },
});
</script>

<style scoped></style>
