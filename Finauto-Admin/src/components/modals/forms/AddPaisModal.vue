<template>
  <div
    class="modal fade"
    id="kt_modal_add_pais"
    ref="addPaisModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir una Pais</h2>
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
            <!-- Campo: Nombre del pais -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del pais</label>
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del pais"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Código del pais -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Código del pais</label>
              <Field
                name="code"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el código del pais"
              />
              <ErrorMessage name="code" class="text-danger" />
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
import { usePaisStore } from "@/stores/pais";
import Swal from "sweetalert2/dist/sweetalert2.js";
interface AddPaisFormFields {
  name: string;
  description: string;
}
export default defineComponent({
  name: "AddPais",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const paisStore = usePaisStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addPaisModalRef = ref<HTMLElement | null>(null);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string(),
      code: yup.string(),
    });

    const { errors } = useForm<AddPaisFormFields>({
      validationSchema: schema,
    });
    const selectedOption = ref(null);

    // Función de envío del formulario
    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      const newPais = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
      };

      try {
        const response = await paisStore.addPais(newPais);
        await paisStore.fetchPais();
        console.log("Pais agregada:", response);
        Swal.fire({
          text: "Pais agregado correctamente",
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
          text: "Error al crear el pais",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
        console.error("Error al agregar pais:", error);
      } finally {
        hideModal(addPaisModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addPaisModalRef,
      errors,
      selectedOption,
    };
  },
});
</script>

<style scoped></style>
