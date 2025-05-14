<template>
  <div
    class="modal fade"
    id="kt_modal_edit_equipamiento"
    ref="editEquipamientoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_edit_provincia_header">
          <h2 class="fw-bold">Editar Equipamiento</h2>
          <div
            id="kt_modal_edit_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <!-- Galería de imágenes -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <ImageInput
                v-model="formData.galery"
                :error="errors.galery || ''"
              />
            </div>

            <!-- Nombre -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del equipamiento</label>
              <Field
                name="name"
                v-model="formData.name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del equipamiento"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Descripción -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Descripción</label>
              <Field
                name="description"
                v-model="formData.description"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>

            <!-- Precio Base -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Precio Base</label>
              <Field
                name="precioBase"
                v-model.number="formData.precioBase"
                as="input"
                type="number"
                class="form-control"
                placeholder="Ponga el precio base"
              />
              <ErrorMessage name="precioBase" class="text-danger" />
            </div>
          </div>

          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button type="submit" class="btn btn-bg-primary mx-3">
              Actualizar
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
import { useEquipamientoStore } from "@/stores/equipamiento";
import ImageInput from "@/components/ImageInputTest.vue";

interface EditEquipamientoForm {
  name: string;
  description: string;
  precioBase: number;
  galery: string[];
}

export default defineComponent({
  name: "EditEquipamiento",
  components: { Form, Field, ErrorMessage, ImageInput },
  props: {
    equipamiento: {
      type: Object as () => {
        id: string; // ahora id es string
        name: { es: string; en: string };
        description: { es: string; en: string };
        precioBase: number;
        galery: string[];
      },
      required: true,
    },
  },
  setup(props) {
    const equipamientoStore = useEquipamientoStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const editEquipamientoModalRef = ref<HTMLElement | null>(null);

    // id como string
    const idEdit = ref<string>("");

    const formData = ref<EditEquipamientoForm>({
      name: "",
      description: "",
      precioBase: 0,
      galery: [],
    });

    watch(
      () => props.equipamiento,
      (srv) => {
        if (srv) {
          idEdit.value = srv.id; // srv.id ya es string
          formData.value.name = srv.name.es;
          formData.value.description = srv.description.es;
          formData.value.precioBase = srv.precioBase;
          formData.value.galery = srv.galery || [];
        }
      },
      { immediate: true },
    );

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string().required("La descripción es obligatoria"),
      precioBase: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio base es obligatorio"),
      galery: yup
        .array()
        .of(yup.string())
        .min(1, "Se requiere al menos una imagen")
        .max(5, "Solo se permiten hasta 5 imágenes"),
    });

    const { errors } = useForm<EditEquipamientoForm>({
      validationSchema: schema,
    });

    const handleSubmit = async (
      values: EditEquipamientoForm,
      { resetForm }: { resetForm: () => void },
    ) => {
      const updatedData = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        precioBase: values.precioBase,
        // Usamos formData.galery en vez de values.galery
        galery: formData.value.galery,
      };

      try {
        await equipamientoStore.updateEquipamiento(idEdit.value, updatedData);
        await equipamientoStore.fetchEquipamientos();
      } catch (err) {
        console.error("Error actualizando equipamiento:", err);
      } finally {
        hideModal(editEquipamientoModalRef.value);
        resetForm();
      }
    };

    return {
      formRef,
      editEquipamientoModalRef,
      formData,
      schema,
      errors,
      handleSubmit,
    };
  },
});
</script>
