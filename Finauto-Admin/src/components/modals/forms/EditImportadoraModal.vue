<template>
  <div
    class="modal fade"
    id="kt_modal_edit_importadora"
    ref="editImportadoraModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_edit_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Editar Importadora</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_edit_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <!-- Campo: Nombre del importadora -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del importadora</label>
              <Field
                name="nombre"
                v-model="formData.nombre"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del importadora"
              />
              <ErrorMessage name="nombre" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Descripción</label>
              <Field
                name="descripcion"
                v-model="formData.descripcion"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
              />
              <ErrorMessage name="descripcion" class="text-danger" />
            </div>
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button type="submit" class="btn btn-bg-primary mx-3">
              Actualizar
            </button>
          </div>
        </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useImportadoraStore } from "@/stores/importadoras";
import { type IImportadora } from "@/core/data/importadoras";

export default defineComponent({
  name: "AddImportadora",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    importadora: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const idEdit = ref();
    const formData = ref({
      image: "",
      nombre: "",
      descripcion: "",
    });

    watch(
      () => props.importadora,
      (ServiceToEdit) => {
        if (ServiceToEdit) {
          idEdit.value = ServiceToEdit.id;
          formData.value.image = ServiceToEdit.image || "";
          formData.value.nombre = ServiceToEdit.nombre || "";
          formData.value.descripcion = ServiceToEdit.descripcion || "";
        }
      },
      { immediate: true }, // Ensure it runs when the component is mounted
    );
    const importadoraStore = useImportadoraStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const editImportadoraModalRef = ref<null | HTMLElement>(null);
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
    });

    const { errors } = useForm({ validationSchema: schema });

    const handleSubmit = (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando");

      const editImportadora: IImportadora = {
        id: idEdit.value,
        nombre: formData.value.nombre,
        descripcion: formData.value.descripcion,
      };

      importadoraStore.updateImportadora(editImportadora);
      console.log("importadora agregado:", editImportadora);
      hideModal(editImportadoraModalRef.value);
      resetForm();
    };

    return {
      schema,
      handleSubmit,
      formRef,
      editImportadoraModalRef,
      errors,
      formData,
    };
  },
});
</script>
