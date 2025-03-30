<template>
  <div
    class="modal fade"
    id="kt_modal_edit_tarjeta"
    ref="editTarjetaModalRef"
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
          <h2 class="fw-bold">Editar Tarjeta</h2>
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
            <!-- Sección de imagen -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <ImageInput
                v-model="formData.image"
                :error="errors.image || ''"
              />
            </div>

            <!-- Campo: Nombre del tarjeta -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del tarjeta</label>
              <Field
                name="nombre"
                v-model="formData.nombre"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del tarjeta"
              />
              <ErrorMessage name="nombre" class="text-danger" />
            </div>

            <!-- Campo: Código del tarjeta -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Código</label>
              <Field
                name="codigo"
                v-model="formData.codigo"
                as="input"
                type="text"
                class="form-control"
                placeholder="Pon el codigo"
              />
              <ErrorMessage name="codigo" class="text-danger" />
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
import { useTarjetaStore } from "@/stores/tarjetas";
import ImageInput from "@/components/ImageInput.vue";

export default defineComponent({
  name: "AddTarjeta",
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageInput,
  },
  props: {
    tarjeta: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const idEdit = ref();
    const formData = ref({
      image: "",
      nombre: "",
      codigo: "",
      descripcion: "",
    });

    watch(
      () => props.tarjeta,
      (TarjetaToEdit) => {
        if (TarjetaToEdit) {
          idEdit.value = TarjetaToEdit.id;
          formData.value.image = TarjetaToEdit.image || "";
          formData.value.nombre = TarjetaToEdit.nombre || "";
          formData.value.codigo = TarjetaToEdit.codigo || "";
          formData.value.descripcion = TarjetaToEdit.descripcion || "";
        }
      },
      { immediate: true },
    );
    const tarjetaStore = useTarjetaStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const editTarjetaModalRef = ref<null | HTMLElement>(null);
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      image: yup.string().required("La imagen es obligatoria"),
    });

    const { errors } = useForm({ validationSchema: schema });

    // URL de la imagen (usada en el ImageInput mediante v-model)
    const imageUrl = ref<string>("");

    const handleSubmit = (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando");

      const editService = {
        id: idEdit.value,
        nombre: formData.value.nombre,
        descripcion: formData.value.descripcion,
        image: formData.value.image,
      };

      tarjetaStore.updateTarjeta(editService.id);
      console.log("Tarjeta agregado:", editService);
      hideModal(editTarjetaModalRef.value);
      resetForm();
      imageUrl.value = "";
    };

    return {
      schema,
      handleSubmit,
      formRef,
      editTarjetaModalRef,
      imageUrl,
      errors,
      formData,
    };
  },
});
</script>
