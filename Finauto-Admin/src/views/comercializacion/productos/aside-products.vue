<script setup></script>
<template>
  <!--begin::Aside column-->
  <div
    class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"
  >
    <!--begin::Thumbnail settings-->
    <div class="card card-flush py-4">
      <!-- Card header -->

      <!-- Sección de imagen -->
      <div class="mb-4 px-4 py-4 col-11 mx-6">
        <ImageInput v-model="imageUrl" :error="errors.image || ''" />
      </div>
    </div>
    <!--end::Thumbnail settings-->
    <!--begin::Status-->
    <div class="card card-flush py-4">
      <!--begin::Card header-->
      <div class="card-header">
        <!--begin::Card title-->
        <div class="card-title">
          <h2>Status</h2>
        </div>
        <!--end::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <div
            class="rounded-circle bg-success w-15px h-15px"
            id="kt_ecommerce_add_product_status"
          ></div>
        </div>
        <!--begin::Card toolbar-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body pt-0">
        <!--begin::Select2-->
        <select
          class="form-select mb-2"
          data-control="select2"
          data-hide-search="true"
          data-placeholder="Select an option"
          id="kt_ecommerce_add_product_status_select"
        >
          <option></option>
          <option value="published">Published</option>
          <option value="draft">Stock</option>

          <option value="inactive">Inactive</option>
        </select>
        <!--end::Select2-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Status-->

    <!--begin::Template settings-->
    <div class="card card-flush py-4">
      <!--begin::Card header-->
      <div class="card-header">
        <!--begin::Card title-->
        <div class="card-title">
          <h2>Product Template</h2>
        </div>
        <!--end::Card title-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body pt-0">
        <!--begin::Select store template-->
        <label for="kt_ecommerce_add_product_store_template" class="form-label"
          >Seleccione una plantilla de producto</label
        >
        <!--end::Select store template-->
        <!--begin::Select2-->
        <select
          class="form-select mb-2"
          data-control="select2"
          data-hide-search="true"
          data-placeholder="Select an option"
          id="kt_ecommerce_add_product_store_template"
          @change="redirectToRoute($event)"
        >
          <option disabled selected>Selecciona el tipo de producto</option>
          <option value="/apps/productos/addproduct/vehiculo">Vehiculos</option>
          <option value="/apps/productos/addproduct/piezas">Piezas</option>
          <option value="/apps/productos/addproduct/piezas">
            Equipamiento de garaje
          </option>
        </select>
        <!--end::Select2-->
        <!--begin::Description-->
        <div class="text-muted fs-7">
          Assign a template from your current theme to define how a single
          product is displayed.
        </div>
        <!--end::Description-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Template settings-->
  </div>
  <!--end::Aside column-->
</template>

<script>
import { ref, nextTick } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import ImageInput from "@/components/ImageInput.vue";

export default {
  components: {
    ImageInput,
  },
  setup() {
    const imageUrl = ref("");
    const router = useRouter();

    const redirectToRoute = (event) => {
      const selectedValue = event.target.value;
      router.push(selectedValue);
    };

    const schema = yup.object({
      image: yup.string().required("La imagen es obligatoria"),
    });

    const { errors } = useForm({ validationSchema: schema });

    // Subir imagen desde input
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      validateImage(file);
    };

    // Manejo de arrastrar y soltar imagen
    const handleImageDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      validateImage(file);
    };

    // Validar y mostrar imagen
    const validateImage = (file) => {
      if (!file) {
        setErrors({ image: "Debes seleccionar una imagen" });
        return;
      }
      if (!file.type.startsWith("image/")) {
        setErrors({ image: "El archivo debe ser una imagen" });
        return;
      }

      imageFile.value = file;
      previousImage.value = imagePreview.value; // Guardar imagen anterior por si cancela
      imagePreview.value = URL.createObjectURL(file);
    };

    // Restaurar imagen anterior (Cancelar)
    const restorePreviousImage = () => {
      imagePreview.value = previousImage.value;
    };

    // Eliminar imagen
    const removeImage = () => {
      imageFile.value = null;
      imagePreview.value = "";
    };

    // Activar input file correctamente
    const triggerFileInput = () => {
      nextTick(() => {
        imageInput.value.click();
      });
    };

    return {
      handleImageUpload,
      handleImageDrop,
      restorePreviousImage,
      triggerFileInput,
      removeImage,
      errors,
      router,
      redirectToRoute,
      imageUrl,
    };
  },
};
</script>

<style scoped></style>
