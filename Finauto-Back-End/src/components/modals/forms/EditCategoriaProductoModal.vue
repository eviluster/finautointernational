<template>
  <div
    class="modal fade"
    id="kt_modal_edit_categoriaproducto"
    ref="editCategoriaProductoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="fw-bold">Editar categoría</h2>
          <div
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          :initial-values="initialValues"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre</label>
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Tipo</label>
              <Field
                name="tipo"
                as="select"
                class="form-select"
                v-model="selectedOption"
              >
                <option disabled value="">Seleccione un tipo</option>
                <option value="vehicle">Vehículo</option>
                <option value="service">Servicio</option>
                <option value="parte">Parte</option>
                <option value="equipo">Equipo</option>
              </Field>
              <ErrorMessage name="tipo" class="text-danger" />
            </div>
          </div>

          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">
              Cancelar
            </a>
            <button type="submit" class="btn btn-bg-primary mx-3">
              Guardar cambios
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useCategoriaProductoStore } from "@/stores/categoria-producto";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface Categoria {
  id: string;
  name: { es: string; en: string };
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

interface EditCategoriaFormFields {
  id: string;
  name: string;
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

export default defineComponent({
  name: "EditCategoriaProducto",
  components: { Form, Field, ErrorMessage },
  props: {
    categoria: {
      type: Object as () => Categoria,
      required: true,
    },
  },
  setup(props) {
    const categoriaStore = useCategoriaProductoStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const editCategoriaProductoModalRef = ref<HTMLElement | null>(null);
    const selectedOption = ref<EditCategoriaFormFields["tipo"]>(
      props.categoria.tipo,
    );

    const schema = yup.object({
      id: yup.string().required(),
      name: yup.string().required("El nombre es obligatorio"),
      tipo: yup
        .mixed<EditCategoriaFormFields["tipo"]>()
        .oneOf(["vehicle", "service", "parte", "equipo"], "Tipo inválido")
        .required("El tipo es obligatorio"),
    });

    const initialValues: EditCategoriaFormFields = {
      id: props.categoria.id,
      name: props.categoria.name.es,
      tipo: props.categoria.tipo,
    };

    const { errors } = useForm<EditCategoriaFormFields>({
      validationSchema: schema,
      initialValues,
    });

    watch(
      () => props.categoria.tipo,
      (newTipo) => {
        selectedOption.value = newTipo;
      },
    );

    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      const { id, name, tipo } = values as EditCategoriaFormFields;

      const updatedData = { name: { es: name, en: "" }, tipo };

      try {
        // Pass both ID and data to update
        await categoriaStore.updateCategoriaProducto(id, updatedData);
        await categoriaStore.fetchCategoriaProducto();

        Swal.fire({
          text: "Categoría actualizada correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error: any) {
        console.error("Error al actualizar categoría:", error);
        Swal.fire({
          text: "Error al actualizar la categoría",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } finally {
        hideModal(editCategoriaProductoModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      editCategoriaProductoModalRef,
      errors,
      selectedOption,
      initialValues,
    };
  },
});
</script>

<style scoped></style>
