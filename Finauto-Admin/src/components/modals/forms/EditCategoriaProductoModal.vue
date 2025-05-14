<template>
  <div
    class="modal fade"
    id="kt_modal_edit_categoriaproducto"
    ref="editCategoriaProductoModalRef"
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
          <h2 class="fw-bold">Editar CategoriaProducto</h2>
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
          <!-- Campo: Nombre en Español -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Nombre (ES)</label>
            <Field
              name="nameEs"
              v-model="formData.nameEs"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ponga el nombre en español"
            />
            <ErrorMessage name="nameEs" class="text-danger" />
          </div>

          <!-- Campo: Tipo -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Tipo</label>
            <Field
              name="tipo"
              v-model="formData.tipo"
              as="select"
              class="form-select"
            >
              <option disabled value="">Seleccione un tipo</option>
              <option value="vehicle">Vehículo</option>
              <option value="service">Servicio</option>
              <option value="parte">Parte</option>
              <option value="equipo">Equipo</option>
            </Field>
            <ErrorMessage name="tipo" class="text-danger" />
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">
              Cancelar
            </a>
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
import { useCategoriaProductoStore } from "@/stores/categoria-producto";

interface CategoriaProducto {
  id: string;
  name: { es: string; en: string };
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

interface EditForm {
  id: string;
  nameEs: string;
  nameEn: string;
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

export default defineComponent({
  name: "EditCategoriaProducto",
  components: { Form, Field, ErrorMessage },
  props: {
    categoriaproducto: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useCategoriaProductoStore();
    const editCategoriaProductoModalRef = ref<HTMLElement | null>(null);

    // Datos reactivos del formulario
    const formData = ref<EditForm>({
      id: "",
      nameEs: "",
      nameEn: "",
      tipo: "" as EditForm["tipo"],
    });

    // Esquema de validación
    const schema = yup.object({
      nameEs: yup.string().required("El nombre en español es obligatorio"),
      nameEn: yup.string(),
      tipo: yup
        .mixed<EditForm["tipo"]>()
        .oneOf(["vehicle", "service", "parte", "equipo"], "Tipo inválido")
        .required("El tipo es obligatorio"),
    });

    // Inicializamos useForm para obtener errores
    const { errors } = useForm({ validationSchema: schema });

    // Sincronizamos la prop con formData
    watchEffect(() => {
      if (props.categoriaproducto) {
        const c = props.categoriaproducto;
        formData.value.id = c.id;
        formData.value.nameEs = c.name.es;
        formData.value.nameEn = c.name.en;
        formData.value.tipo = c.tipo;
      }
    });

    // Handler de envío
    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      try {
        const updated = {
          name: { es: values.nameEs, en: values.nameEn || "" },
          tipo: values.tipo,
        };
        await store.updateCategoriaProducto(values.id, updated);
        await store.fetchCategoriaProducto();

        hideModal(editCategoriaProductoModalRef.value);
        resetForm();
      } catch (err) {
        console.error("Error al actualizar:", err);
      }
    };

    return {
      editCategoriaProductoModalRef,
      formData,
      errors,
      schema,
      handleSubmit,
    };
  },
});
</script>

<style scoped></style>
