<script>
import { defineComponent, ref } from "vue";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Field },
  setup() {
    const imageFile = ref(null);
    const imagePreview = ref("");
    const file = ref(null);
    const fileName = ref("");
    const imageInput = ref(null);
    const fileInput = ref(null);

    const { handleSubmit, setErrors, errors } = useForm({
      validationSchema: yup.object({
        name: yup.string().required("El nombre es obligatorio").min(3).max(50),
        description: yup
          .string()
          .required("La descripción es obligatoria")
          .min(5)
          .max(200),
      }),
    });

    // Manejador para cargar la imagen
    const handleImageUpload = (event) => {
      const selectedFile = event.target.files[0];
      validateImage(selectedFile);
    };

    // Manejador para arrastrar y soltar la imagen
    const handleImageDrop = (event) => {
      event.preventDefault();
      const selectedFile = event.dataTransfer.files[0];
      validateImage(selectedFile);
    };

    // Validar imagen
    const validateImage = (selectedFile) => {
      if (!selectedFile) {
        setErrors({ image: "Debes seleccionar una imagen" });
        return;
      }
      if (!selectedFile.type.startsWith("image/")) {
        setErrors({ image: "El archivo debe ser una imagen" });
        return;
      }

      imageFile.value = selectedFile;
      imagePreview.value = URL.createObjectURL(selectedFile);
    };

    // Manejador para cargar el archivo
    const handleFileUpload = (event) => {
      const selectedFile = event.target.files[0];
      validateFile(selectedFile);
    };

    // Manejador para arrastrar y soltar archivos
    const handleFileDrop = (event) => {
      event.preventDefault();
      const selectedFile = event.dataTransfer.files[0];
      validateFile(selectedFile);
    };

    // Validar archivo
    const validateFile = (selectedFile) => {
      if (!selectedFile) {
        setErrors({ file: "Debes seleccionar un archivo" });
        return;
      }

      file.value = selectedFile;
      fileName.value = selectedFile.name;
    };

    const onSubmit = handleSubmit((values) => {
      if (!imageFile.value) {
        setErrors({ image: "Debes subir una imagen" });
        return;
      }
      if (!file.value) {
        setErrors({ file: "Debes subir un archivo" });
        return;
      }

      console.log("Datos enviados:", {
        image: imageFile.value,
        file: file.value,
        name: values.name,
        description: values.description,
      });

      alert("Formulario enviado con éxito");
    });

    return {
      imagePreview,
      fileName,
      imageInput,
      fileInput,
      handleImageUpload,
      handleFileUpload,
      handleImageDrop,
      handleFileDrop,
      onSubmit,
      errors,
    };
  },
});
</script>
<template>
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column" id="kt_app_wrapper_servicio">
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Toolbar-->
            <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
              <!--begin::Toolbar container-->
              <div
                id="kt_app_toolbar_container"
                class="app-container container-xxl d-flex flex-stack"
              >
                <!--begin::Page title-->
                <div
                  class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
                >
                  <!--begin::Title-->
                  <h1
                    class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"
                  >
                    Product Form
                  </h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                  <ul
                    class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
                  >
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                      <a href="index.html" class="text-muted text-hover-primary"
                        >Home</a
                      >
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-500 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">eCommerce</li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-500 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">Servicio</li>
                    <!--end::Item-->
                  </ul>
                  <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
              </div>
              <!--end::Toolbar container-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <!--begin::Content container-->
              <div
                id="kt_app_content_container"
                class="app-container container-xxl"
              >
                <!--begin::Form-->
                <form
                  id="kt_ecommerce_add_product_form"
                  class="form d-flex flex-column flex-lg-row"
                  data-kt-redirect="apps/ecommerce/catalog/products.html"
                >
                  <!--begin::Main column-->
                  <div
                    class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"
                  >
                    <!--begin:::Tabs-->
                    <ul
                      class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2"
                    >
                      <!--begin:::Tab item-->
                      <li class="nav-item">
                        <a
                          class="nav-link text-active-primary pb-4 active"
                          data-bs-toggle="tab"
                          href="#kt_ecommerce_add_product_general"
                          >General</a
                        >
                      </li>
                      <!--end:::Tab item-->
                    </ul>
                    <!--end:::Tabs-->
                    <!--begin::Tab content-->
                    <div class="tab-content">
                      <!--begin::Tab pane-->
                      <div
                        class="tab-pane fade show active"
                        id="kt_ecommerce_add_product_general"
                        role="tab-panel"
                      >
                        <div class="d-flex flex-column gap-7 gap-lg-10">
                          <!--begin::General options-->
                          <div class="card card-flush py-4">
                            <!--begin::Card header-->
                            <div class="card-header">
                              <div class="card-title">
                                <h2>General</h2>
                              </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                              <!--begin::Input group-->
                              <!-- Nombre -->
                            </div>

                            <div class="mb-3 mx-4">
                              <label class="form-label required">Nombre</label>
                              <Field
                                name="name"
                                v-slot="{ field, errors }"
                                rules="required|min:3|max:50"
                              >
                                <input
                                  type="text"
                                  class="form-control"
                                  v-bind="field"
                                />
                                <div v-if="errors.length" class="text-danger">
                                  {{ errors[0] }}
                                </div>
                              </Field>
                            </div>

                            <!-- Descripción -->
                            <div class="mb-3 mx-4">
                              <label class="form-label required"
                                >Descripción</label
                              >
                              <Field
                                name="description"
                                v-slot="{ field, errors }"
                                rules="required|min:5|max:200"
                              >
                                <textarea
                                  class="form-control"
                                  v-bind="field"
                                  rows="3"
                                ></textarea>
                                <div v-if="errors.length" class="text-danger">
                                  {{ errors[0] }}
                                </div>
                              </Field>
                            </div>
                            <!--end::Card header-->
                          </div>
                          <!--end::General options-->
                          <!--begin::Media-->
                          <div class="card card-flush py-4">
                            <!--begin::Card header-->
                            <div class="card-header">
                              <div class="card-title">
                                <h2>Media</h2>
                              </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                              <!--begin::Input group-->
                              <div class="fv-row mb-2">
                                <!--begin::Dropzone-->
                                <div
                                  class="dropzone p-0"
                                  id="kt_ecommerce_add_product_media"
                                >
                                  <!--begin::Message-->
                                  <div class="dz-message needsclick">
                                    <!--begin::Icon-->

                                    <!--end::Icon-->
                                    <!--begin::Info-->

                                    <!-- Archivo con Drag & Drop y Clic -->
                                    <div
                                      class="upload-box"
                                      @click="fileInput.click()"
                                      @dragover.prevent
                                      @dragenter.prevent
                                      @drop="handleFileDrop"
                                    >
                                      <input
                                        type="file"
                                        class="d-none"
                                        @change="handleFileUpload"
                                        ref="fileInput"
                                      />
                                      <div class="drag-area text-center p-3">
                                        <i
                                          class="ki-duotone ki-file-up text-primary fs-3x m-3"
                                        >
                                          <span class="path1"></span>
                                          <span class="path2"></span>
                                        </i>
                                        <p v-if="!fileName" class="m-0">
                                          Haz clic o arrastra un archivo aquí
                                        </p>
                                        <p v-else class="mt-2">
                                          Archivo seleccionado: {{ fileName }}
                                        </p>
                                      </div>
                                    </div>
                                    <div v-if="errors.file" class="text-danger">
                                      {{ errors.file }}
                                    </div>
                                  </div>

                                  <!--end::Info-->
                                </div>
                                <!--end::Dropzone-->
                              </div>
                              <!--end::Input group-->
                              <!--begin::Description-->
                              <div class="text-muted fs-7">
                                Set the product media gallery.
                              </div>
                              <!--end::Description-->
                            </div>
                            <!--end::Card header-->
                          </div>
                          <!--end::Media-->
                          <!--begin::Pricing-->

                          <!--end::Pricing-->
                        </div>
                      </div>
                      <!--end::Tab pane-->
                      <!--begin::Tab pane-->

                      <!--end::Tab pane-->
                    </div>
                    <!--end::Tab content-->
                    <div class="d-flex justify-content-end">
                      <!--begin::Button-->
                      <a
                        href="apps/ecommerce/catalog/products.html"
                        id="kt_ecommerce_add_product_cancel"
                        class="btn btn-light me-5"
                        >Cancelar</a
                      >
                      <!--end::Button-->
                      <!--begin::Button-->
                      <button
                        type="submit"
                        id="kt_ecommerce_add_product_submit"
                        class="btn btn-primary"
                      >
                        <span class="indicator-label">Guardar</span>
                        <span class="indicator-progress"
                          >Please wait...
                          <span
                            class="spinner-border spinner-border-sm align-middle ms-2"
                          ></span
                        ></span>
                      </button>
                      <!--end::Button-->
                    </div>
                  </div>
                  <!--end::Main column-->
                </form>
                <!--end::Form-->
              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
          <!--begin::Footer-->
        </div>
        <!--end::Footer-->
      </div>
      <!--end:::Main-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Page-->
</template>

<style scoped>
#kt_app_wrapper_servicio {
  margin: 0;
}
.upload-box {
  padding: 0;
  width: 100%;
  margin: 0;
}
.upload-box:hover {
  border-color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}
.drag-area {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
