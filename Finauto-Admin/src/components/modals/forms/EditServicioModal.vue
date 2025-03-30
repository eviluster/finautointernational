<template>
  <div
    class="modal fade"
    id="kt_modal_edit_servicio"
    ref="editServicioModalRef"
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
          <h2 class="fw-bold">Editar Servicio</h2>
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

      <!-- Campo: Nombre del servicio -->
      <div class="mb-4 px-4 py-4 col-11 mx-6">
        <label class="required form-label">Nombre del servicio</label>
        <Field 
          name="nombre" 
          v-model="formData.nombre"
          as="input" 
          type="text" 
          class="form-control" 
          placeholder="Ponga el nombre del servicio" 
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
      <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">Cancelar</a>
      <button type="submit" class="btn btn-bg-primary mx-3">Actualizar</button>
    </div>
  </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref ,watch } from "vue";
  import * as yup from "yup";
  import { Form, Field, ErrorMessage ,useForm} from "vee-validate";
  import { hideModal } from "@/core/helpers/modal";
  import { useServiceStore } from "@/stores/servicios"; 
  import { type IServicio } from "@/core/data/servicios"; 
  import ImageInput from "@/components/ImageInput.vue";
  
  export default defineComponent({
    name: "AddServicio",
    components: {
      Form,
      Field,
      ErrorMessage,
      ImageInput,
    },
    props: {
    servicio: {
      type: Object,
      required: true,
    },
  },

    setup(props) {
      const idEdit = ref()
      const formData = ref({
      image:"",
      nombre: "",
      descripcion: "",
    });

    watch(
      () => props.servicio,
      (ServiceToEdit) => {
        if (ServiceToEdit) {
          idEdit.value =ServiceToEdit.id;
          formData.value.image = ServiceToEdit.image || "";
          formData.value.nombre = ServiceToEdit.nombre || "";
          formData.value.descripcion = ServiceToEdit.descripcion || "";
        }
      },
      { immediate: true } // Ensure it runs when the component is mounted
    );
      const serviceStore = useServiceStore();  
      const formRef = ref<null | HTMLFormElement>(null);
     const editServicioModalRef = ref<null | HTMLElement>(null);
     const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      image: yup.string().required("La imagen es obligatoria")
    });

    const { errors } = useForm({ validationSchema: schema });

      
    // URL de la imagen (usada en el ImageInput mediante v-model)
    const imageUrl = ref<string>("");

   

      const handleSubmit = (values: any, { resetForm }: { resetForm: () => void }) => {
        console.log("ejecutando");

      const editService :IServicio = {
        id: idEdit.value, 
        nombre: formData.value.nombre,
        descripcion: formData.value.descripcion,
        image: formData.value.image,
      };

        serviceStore.updateService(editService);
        console.log("servicio agregado:", editService);
        hideModal(editServicioModalRef.value);
        resetForm();
        imageUrl.value = ""; 
      };

   
    
      return {
        schema,
        handleSubmit,
        formRef,
        editServicioModalRef,
        imageUrl,
        errors,
        formData
      };
    },
  });
</script>
