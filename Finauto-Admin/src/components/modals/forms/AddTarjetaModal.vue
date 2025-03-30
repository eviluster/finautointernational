<template>
  <div
    class="modal fade"
    id="kt_modal_add_tarjeta"
    ref="addTarjetaModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir un Método de pago</h2>
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
            <!-- Sección de imagen -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <ImageInput v-model="imageUrl" :error="errors.image || ''" />
            </div>

            <!-- Campo: Nombre del tarjeta -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del tarjeta</label>
              <Field
                name="nombre"
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
                as="input"
                type="text"
                class="form-control"
                placeholder="Pon el codigo"
              />
              <ErrorMessage name="codigo" class="text-danger" />
            </div>

            <!-- Campo: Método de pago  -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Método de pago</label>
              <Field
                name="metodo"
                as="select"
                v-model="selectedOption"
                class="form-select"
                aria-label="Seleccione metodo"
              >
                <option value="" selected disabled>
                  Seleccione una opción
                </option>
                <option value="met1">Metodo 1</option>
                <option value="met2">Metodo 2</option>
              </Field>

              <ErrorMessage name="metodo" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Descripción</label>
              <Field
                name="descripcion"
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
import { useTarjetaStore } from "@/stores/tarjetas";
import ImageInput from "@/components/ImageInput.vue";

export default defineComponent({
  name: "AddTarjetaModal",
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageInput,
  },

  setup() {
    const tarjetaStore = useTarjetaStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addTarjetaModalRef = ref<null | HTMLElement>(null);
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      codigo: yup.string().required("El codigo es obligatorio"),
      metodo: yup.string().required("El metodo es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      image: yup.string().required("La imagen es obligatoria"),
    });

    const { errors } = useForm({ validationSchema: schema });

    // URL de la imagen (usada en el ImageInput mediante v-model)
    const imageUrl = ref<string>("");
    const selectedOption = ref();
    const handleSubmit = (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando");

      const newTarjeta = {
        nombre: values.nombre,
        codigo: values.codigo,
        metodo: selectedOption.value,
        descripcion: values.descripcion,
        image: imageUrl.value,
      };

      tarjetaStore.addTarjeta(newTarjeta);
      //listar Tarjetas();
      console.log("tarjeta agregado:", newTarjeta);
      hideModal(addTarjetaModalRef.value);
      resetForm();
      imageUrl.value = "";
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addTarjetaModalRef,
      imageUrl,
      errors,
      selectedOption,
    };
  },
});
</script>

<style scoped></style>
