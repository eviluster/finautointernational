<template>
  <!--begin::App-->
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <!--begin::Wrapper-->
      <div
        class="app-wrapper flex-column flex-row-fluid"
        id="kt_app_wrapper_vehiculo"
      >
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
                    <li class="breadcrumb-item text-muted">Vehiculo</li>
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
                      <!--begin:::Tab item-->
                      <li class="nav-item">
                        <a
                          class="nav-link text-active-primary pb-4"
                          data-bs-toggle="tab"
                          href="#kt_ecommerce_add_product_advanced"
                          >Advanced</a
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
                            <div class="card-body">
                              <Form :validation-schema="schema">
                                <!-- Nombre del producto -->
                                <div class="mb-3">
                                  <label class="form-label required"
                                    >Nombre del producto</label
                                  >
                                  <Field
                                    name="nombre"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="nombre"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Descripción -->
                                <div class="mb-3">
                                  <label class="form-label required"
                                    >Descripción</label
                                  >
                                  <Field
                                    name="descripcion"
                                    as="textarea"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="descripcion"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Precio -->
                                <div class="mb-3">
                                  <label class="form-label required"
                                    >Precio</label
                                  >
                                  <Field
                                    name="precio"
                                    type="number"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="precio"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Marca y Modelo -->
                                <div class="row">
                                  <div class="col-md-6">
                                    <label class="form-label required"
                                      >Marca</label
                                    >
                                    <Field
                                      name="marca"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="marca"
                                      class="text-danger"
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label class="form-label">Modelo</label>
                                    <Field
                                      name="modelo"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="modelo"
                                      class="text-danger"
                                    />
                                  </div>
                                </div>

                                <!-- Dimensiones -->
                                <div class="mb-3">
                                  <label class="form-label">Dimensiones</label>
                                  <Field
                                    name="dimensiones"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="dimensiones"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Tamaño de la caja de carga -->
                                <div class="mb-3">
                                  <label class="form-label"
                                    >Tamaño de la caja de carga</label
                                  >
                                  <Field
                                    name="tamanoCajaCarga"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="tamanoCajaCarga"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Otros campos -->
                                <div class="row">
                                  <div class="col-md-6">
                                    <label class="form-label">Weebare</label>
                                    <Field
                                      name="weebare"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="weebare"
                                      class="text-danger"
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label class="form-label">Asientos</label>
                                    <Field
                                      name="asientos"
                                      type="number"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="asientos"
                                      class="text-danger"
                                    />
                                  </div>
                                </div>

                                <!-- Distancia al suelo -->
                                <div class="mb-3">
                                  <label class="form-label"
                                    >Distancia al suelo</label
                                  >
                                  <Field
                                    name="distanciaSuelo"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="distanciaSuelo"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Más especificaciones -->
                                <div class="row">
                                  <div class="col-md-6">
                                    <label class="form-label">Peso vacío</label>
                                    <Field
                                      name="pesoVacio"
                                      type="number"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="pesoVacio"
                                      class="text-danger"
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label class="form-label"
                                      >Desplazamiento</label
                                    >
                                    <Field
                                      name="desplazamiento"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="desplazamiento"
                                      class="text-danger"
                                    />
                                  </div>
                                </div>

                                <!-- Potencia máxima y Torque -->
                                <div class="row">
                                  <div class="col-md-6">
                                    <label class="form-label"
                                      >Potencia máxima</label
                                    >
                                    <Field
                                      name="potenciaMaxima"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="potenciaMaxima"
                                      class="text-danger"
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label class="form-label">Torque</label>
                                    <Field
                                      name="torque"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="torque"
                                      class="text-danger"
                                    />
                                  </div>
                                </div>

                                <!-- Velocidad máxima -->
                                <div class="mb-3">
                                  <label class="form-label"
                                    >Velocidad máxima</label
                                  >
                                  <Field
                                    name="velocidadMaxima"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="velocidadMaxima"
                                    class="text-danger"
                                  />
                                </div>

                                <!-- Tracción y tipo de freno -->
                                <div class="row">
                                  <div class="col-md-6">
                                    <label class="form-label">Tracción</label>
                                    <Field
                                      name="traccion"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="traccion"
                                      class="text-danger"
                                    />
                                  </div>
                                  <div class="col-md-6">
                                    <label class="form-label"
                                      >Tipo de freno</label
                                    >
                                    <Field
                                      name="tipoFreno"
                                      type="text"
                                      class="form-control"
                                    />
                                    <ErrorMessage
                                      name="tipoFreno"
                                      class="text-danger"
                                    />
                                  </div>
                                </div>

                                <!-- Capacidad del tanque de combustible -->
                                <div class="mb-3">
                                  <label class="form-label"
                                    >Capacidad del tanque de combustible</label
                                  >
                                  <Field
                                    name="capacidadTanque"
                                    type="text"
                                    class="form-control"
                                  />
                                  <ErrorMessage
                                    name="capacidadTanque"
                                    class="text-danger"
                                  />
                                </div>
                              </Form>
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
                                  class="dropzone"
                                  id="kt_ecommerce_add_product_media"
                                >
                                  <!--begin::Message-->
                                  <div class="dz-message needsclick">
                                    <!--begin::Icon-->
                                    <i
                                      class="ki-duotone ki-file-up text-primary fs-3x"
                                    >
                                      <span class="path1"></span>
                                      <span class="path2"></span>
                                    </i>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="ms-4">
                                      <h3
                                        class="fs-5 fw-bold text-gray-900 mb-1"
                                      >
                                        Drop files here or click to upload.
                                      </h3>
                                      <span
                                        class="fs-7 fw-semibold text-gray-500"
                                        >Upload up to 10 files</span
                                      >
                                    </div>
                                    <!--end::Info-->
                                  </div>
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
                        </div>
                      </div>
                      <!--end::Tab pane-->
                      <!--begin::Tab pane-->
                      <div
                        class="tab-pane fade"
                        id="kt_ecommerce_add_product_advanced"
                        role="tab-panel"
                      >
                        <div class="d-flex flex-column gap-7 gap-lg-10">
                          <!--begin::Inventory-->
                          <div class="card card-flush py-4">
                            <!--begin::Card header-->
                            <div class="card-header">
                              <div class="card-title">
                                <h2>Inventario</h2>
                              </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                              <Form :validation-schema="schema">
                                <!-- No. BIN -->
                                <div class="mb-10 fv-row">
                                  <label class="required form-label"
                                    >No. BIN</label
                                  >
                                  <Field
                                    type="text"
                                    name="bin"
                                    class="form-control mb-2"
                                    placeholder="No. BIN"
                                  />
                                  <ErrorMessage
                                    name="bin"
                                    class="text-danger"
                                  />
                                  <div class="text-muted fs-7">
                                    Ingrese el número BIN.
                                  </div>
                                </div>

                                <!-- Cantidad (En estante y En almacén) -->
                                <div class="mb-10 fv-row">
                                  <label class="required form-label"
                                    >Cantidad</label
                                  >
                                  <div class="d-flex gap-3">
                                    <div class="col-md-6">
                                      <Field
                                        type="number"
                                        name="shelf"
                                        class="form-control mb-2"
                                        placeholder="En estante"
                                      />
                                      <ErrorMessage
                                        name="shelf"
                                        class="text-danger"
                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <Field
                                        type="number"
                                        name="warehouse"
                                        class="form-control mb-2"
                                        placeholder="En almacén"
                                      />
                                      <ErrorMessage
                                        name="warehouse"
                                        class="text-danger"
                                      />
                                    </div>
                                  </div>

                                  <div class="text-muted fs-7">
                                    Introduzca la cantidad del producto.
                                  </div>
                                </div>
                              </Form>
                            </div>

                            <!--end::Card header-->
                          </div>
                          <!--end::Inventory-->
                          <!--begin::Variations-->
                          <div class="card card-flush py-4">
                            <div class="container mt-3">
                              <h5>Variaciones</h5>
                              <p>Agregar variaciones de productos</p>

                              <div
                                v-for="(variation, index) in variations"
                                :key="index"
                                class="d-flex align-items-center mb-2"
                              >
                                <!-- Selector -->
                                <select
                                  v-model="variation.type"
                                  class="form-select me-2"
                                  style="max-width: 150px"
                                >
                                  <option value="" disabled>Seleccione</option>
                                  <option value="color">Color</option>
                                  <option value="talla">Talla</option>
                                </select>

                                <!-- Input -->
                                <input
                                  v-model="variation.value"
                                  type="text"
                                  class="form-control me-2"
                                  placeholder="Variation"
                                />

                                <!-- Botón Eliminar -->
                                <button
                                  class="btn btn-danger btn-sm"
                                  @click.prevent="removeVariation(index)"
                                >
                                  ✖
                                </button>
                              </div>

                              <!-- Botón Agregar -->
                              <button
                                class="btn btn-primary btn-sm"
                                @click.prevent="addVariation()"
                              >
                                + Agregar otra variación
                              </button>
                            </div>
                          </div>
                          <!--end::Variations-->
                        </div>
                      </div>
                      <!--end::Tab pane-->
                    </div>
                    <!--end::Tab content-->
                    <div class="d-flex justify-content-end">
                      <!--begin::Button-->
                      <a
                        href="apps/ecommerce/catalog/products.html"
                        id="kt_ecommerce_add_product_cancel"
                        class="btn btn-light me-5"
                        >Cancel</a
                      >
                      <!--end::Button-->
                      <!--begin::Button-->
                      <button
                        type="submit"
                        id="kt_ecommerce_add_product_submit"
                        class="btn btn-primary"
                      >
                        <span class="indicator-label">Save Changes</span>
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Form, Field, ErrorMessage },
  setup() {
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      precio: yup
        .number()
        .required("El precio es obligatorio")
        .positive("Debe ser un número positivo"),
      marca: yup.string().required("La marca es obligatoria"),
      modelo: yup.string().required("El modelo es obligatorio"),
      capacidadTanque: yup.string().required("Este campo es obligatorio"),
      bin: yup.string().required("El número BIN es obligatorio"),
      shelf: yup
        .number()
        .typeError("La cantidad en estante debe ser un número")
        .required("Cantidad en estante es obligatoria")
        .min(0, "Debe ser mayor o igual a 0"),
      warehouse: yup
        .number()
        .typeError("La cantidad en almacén debe ser un número")
        .min(0, "Debe ser mayor o igual a 0"),
      allowBackorders: yup.boolean(),
    });

    const { handleSubmit } = useForm({ validationSchema: schema });

    const onSubmit = handleSubmit((values) => {
      console.log("Producto agregado:", values);
      alert("Producto agregado con éxito 🎉");
    });

    const variations = ref([{ type: "", value: "" }]);

    const addVariation = () => {
      variations.value.push({ type: "", value: "" });
    };

    const removeVariation = (index) => {
      variations.value.splice(index, 1);
    };

    return { schema, onSubmit, variations, addVariation, removeVariation };
  },
});
</script>

<style>
#kt_app_wrapper_vehiculo {
  margin: 0;
}
</style>
