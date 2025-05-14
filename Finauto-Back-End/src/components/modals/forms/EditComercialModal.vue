<template>
  <div
    class="modal fade"
    id="kt_modal_edit_comercial"
    ref="editComercialModalRef"
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
          <h2 class="fw-bold">Editar Comercial</h2>
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
          <!-- Campo: Nombre (ES) -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Nombre </label>
            <Field
              name="nameEs"
              v-model="formData.nameEs"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese el nombre en español"
            />
            <ErrorMessage name="nameEs" class="text-danger" />
          </div>

          <!-- Campo: Apellido-->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Apellido</label>
            <Field
              name="apellido"
              v-model="formData.apellido"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese el apellido"
            />
            <ErrorMessage name="apellido" class="text-danger" />
          </div>

          <!-- Campo: Correo -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Correo electrónico</label>
            <Field
              name="correo"
              v-model="formData.correo"
              as="input"
              type="correo"
              class="form-control"
              placeholder="Ingrese el correo"
            />
            <ErrorMessage name="correo" class="text-danger" />
          </div>

          <!-- Campo: Teléfono -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Teléfono</label>
            <Field
              name="telefono"
              v-model="formData.telefono"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese el telefono"
            />
            <ErrorMessage name="telefono" class="text-danger" />
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
import { defineComponent, ref, watchEffect } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useComercialStore } from "@/stores/comercial";

export default defineComponent({
  name: "EditComercial",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    comercial: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const comercialStore = useComercialStore();
    const editComercialModalRef = ref<HTMLElement | null>(null);

    // Objeto reactivo para almacenar los datos del formulario
    const formData = ref({
      id: "",
      nameEs: "",
      nameEn: "",
      correo: "",
      apellido: "",
      addressLineTwo: "",
      telefono: "",
      postalCode: "",
    });

    // Esquema de validación con yup
    const schema = yup.object({
      nameEs: yup.string().required("El nombre en español es obligatorio"),
      nameEn: yup.string(),
      correo: yup
        .string()
        .email("Ingrese un correo válido")
        .required("El correo es obligatorio"),
      apellido: yup.string().required("La dirección principal es obligatoria"),
      telefono: yup.string().required("La ciudad es obligatoria"),
    });

    const { errors } = useForm({ validationSchema: schema });

    // Sincronizamos los datos de la prop "comercial" con el formulario
    watchEffect(() => {
      if (props.comercial) {
        formData.value.id = props.comercial.id || "";
        formData.value.nameEs = props.comercial.name?.es || "";
        formData.value.nameEn = props.comercial.name?.en || "";
        formData.value.correo = props.comercial.correo || "";
        formData.value.apellido = props.comercial.apellido || "";
        formData.value.telefono = props.comercial.telefono || "";
      }
    });

    // Función de envío del formulario
    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      try {
        const updatedData = {
          id: formData.value.id,
          name: { es: values.nameEs, en: values.nameEn || "" },
          correo: values.correo,
          apellido: values.apellido,
          telefono: values.telefono,
        };

        console.log(updatedData);

        await comercialStore.updateComercial(updatedData);
        await comercialStore.fetchComercials(); // Refrescamos la lista de comercials

        hideModal(editComercialModalRef.value);
        resetForm();
      } catch (error) {
        console.error("Error al actualizar el comercial:", error);
      }
    };

    return {
      editComercialModalRef,
      formData,
      errors,
      schema,
      handleSubmit,
    };
  },
});
</script>

<style scoped></style>
