<template>
  <div
    class="modal fade"
    id="kt_modal_add_categoriaproducto"
    ref="addCategoriaProductoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir una categoría de producto</h2>
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
            <!-- Campo: Nombre -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre</label>
              <Field
                name="name"
                as="input"
                tipo="text"
                class="form-control"
                placeholder="Ponga el nombre"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Tipo -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Tipo</label>
              <Field name="tipo" as="select" class="form-select">
                <option disabled value="">Seleccione un tipo</option>
                <option value="vehicle">Vehículo</option>
                <option value="service">Servicio</option>
                <option value="parte">Parte</option>
                <option value="equipo">Equipo</option>
              </Field>
              <ErrorMessage name="tipo" class="text-danger" />
            </div>
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button tipo="submit" class="btn btn-bg-primary mx-3">
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
import { useCategoriaProductoStore } from "@/stores/categoria-producto";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface AddCategoriaFormFields {
  name: string;
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

export default defineComponent({
  name: "AddCategoriaProducto",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const categoriaStore = useCategoriaProductoStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addCategoriaProductoModalRef = ref<HTMLElement | null>(null);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      tipo: yup
        .mixed<AddCategoriaFormFields["tipo"]>()
        .oneOf(["vehicle", "service", "parte", "equipo"], "Tipo inválido")
        .required("El tipo es obligatorio"),
    });

    const { errors } = useForm<AddCategoriaFormFields>({
      validationSchema: schema,
    });

    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      const newCategoria = {
        name: { es: values.name, en: "" },
        tipo: values.tipo,
      };

      try {
        await categoriaStore.addCategoriaProducto(newCategoria);
        await categoriaStore.fetchCategoriaProducto();

        Swal.fire({
          text: "Categoría agregada correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error: any) {
        console.error("Error al agregar categoría:", error);
        Swal.fire({
          text: "Error al crear la categoría",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } finally {
        hideModal(addCategoriaProductoModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addCategoriaProductoModalRef,
      errors,
    };
  },
});
</script>

<style scoped></style>
