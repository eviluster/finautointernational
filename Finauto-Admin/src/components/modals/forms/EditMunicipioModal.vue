<template>
  <div
    class="modal fade"
    id="kt_modal_edit_municipio"
    ref="editMunicipioModalRef"
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
          <h2 class="fw-bold">Editar Municipio</h2>
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
        <Form :validation-schema="schema" @submit="handleSubmit">
          <!-- Campo: Nombre del metodo -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Nombre del metodo</label>
            <Field
              name="nameEs"
              v-model="formData.nameEs"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ponga el nombre del metodo"
            />
            <ErrorMessage name="nameEs" class="text-danger" />
          </div>

          <!-- Campo: Descripción -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Descripción</label>
            <Field
              name="descriptionEs"
              v-model="formData.descriptionEs"
              as="textarea"
              class="form-control"
              placeholder="Ponga la descripción"
            />
            <ErrorMessage name="descriptionEs" class="text-danger" />
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
import { defineComponent, ref, watchEffect, computed } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useMunicipioStore } from "@/stores/municipios";

export default defineComponent({
  name: "EditMunicipio",
  components: {
    Form,
    Field,
    ErrorMessage,
    // Agrega aquí otros componentes, como ImageInput, si es necesario
  },
  props: {
    municipio: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const municipioStore = useMunicipioStore();
    const editMunicipioModalRef = ref<HTMLElement | null>(null);

    // Objeto reactivo para almacenar los datos del formulario
    const formData = ref({
      id: "",
      nameEs: "",
      nameEn: "",
      descriptionEs: "",
      descriptionEn: "",
    });

    // Esquema de validación con yup
    const schema = yup.object({
      nameEs: yup.string().required("El nombre en español es obligatorio"),
      nameEn: yup.string(),
      descriptionEs: yup
        .string()
        .required("La descripción en español es obligatoria"),
      descriptionEn: yup.string(),
    });

    const { errors } = useForm({ validationSchema: schema });

    // Sincronizamos los datos de la prop "municipio" con el formulario
    watchEffect(() => {
      if (props.municipio) {
        formData.value.id = props.municipio.id || "";
        formData.value.nameEs = props.municipio.name?.es || "";
        formData.value.nameEn = props.municipio.name?.en || "";
        formData.value.descriptionEs = props.municipio.description?.es || "";
        formData.value.descriptionEn = props.municipio.description?.en || "";
      }
    });

    // Función de envío del formulario
    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      try {
        const updatedData = {
          name: { es: values.nameEs, en: values.nameEn || "" },
          description: {
            es: values.descriptionEs,
            en: values.descriptionEn || "",
          },
        };

        console.log(updatedData);

        await municipioStore.updateMunicipio(formData.value.id, updatedData);
        await municipioStore.fetchMunicipios(); // Refrescamos la lista de municipios

        hideModal(editMunicipioModalRef.value);
        resetForm();
      } catch (error) {
        console.error("Error al actualizar la municipio:", error);
      }
    };

    return {
      editMunicipioModalRef,
      formData,
      errors,
      schema,
      handleSubmit,
    };
  },
});
</script>
