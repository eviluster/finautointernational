<template>
  <div
    class="modal fade"
    id="kt_modal_add_vehiculo"
    ref="addVehiculoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="fw-bold">Añadir un Vehiculo</h2>
          <div
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <Form @submit="handleSubmit" :validation-schema="schema" ref="formRef">
          <div class="card shadow-sm">
            <!-- Sección de imagen -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <ImageInput v-model="imageFile" :error="errors.image || ''" />
            </div>

            <!-- Campo: Nombre -->
            <div class="mb-3 px-4 py-4 mx-6">
              <label class="required form-label">Nombre del vehiculo</label>
              <Field
                name="nombre"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del vehiculo"
              />
              <ErrorMessage name="nombre" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-3 px-4 py-4 mx-6">
              <label class="required form-label">Descripción</label>
              <Field
                name="descripcion"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
              />
              <ErrorMessage name="descripcion" class="text-danger" />
            </div>

            <!-- Precio -->
            <div class="mb-3 px-4 py-4 mx-6">
              <label class="form-label required">Precio</label>
              <Field name="precio" type="number" class="form-control" />
              <ErrorMessage name="precio" class="text-danger" />
            </div>

            <!-- Marca y Modelo -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Marca</label>
                <Field as="select" name="marca" class="form-control">
                  <option value="">Seleccione una marca</option>
                </Field>
                <ErrorMessage name="marca" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Modelo</label>
                <Field as="select" name="modelo" class="form-control">
                  <option value="">Seleccione un modelo</option>
                </Field>
                <ErrorMessage name="modelo" class="text-danger" />
              </div>
            </div>

            <!-- Dimensiones y Tamaño de la caja de carga -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Dimensiones (mm)</label>
                <Field as="select" name="dimensiones" class="form-control">
                  <option value="">Seleccione dimensiones</option>
                </Field>
                <ErrorMessage name="dimensiones" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label"
                  >Tamaño de la caja de carga (mm)</label
                >
                <Field as="select" name="tamanoCajaCarga" class="form-control">
                  <option value="">Seleccione tamaño de caja</option>
                </Field>
                <ErrorMessage name="tamanoCajaCarga" class="text-danger" />
              </div>
            </div>

            <!-- Distancia entre ejes y Asientos -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia entre ejes (mm)</label>
                <Field as="select" name="distanciaEjes" class="form-control">
                  <option value="">Seleccione distancia entre ejes</option>
                </Field>
                <ErrorMessage name="distanciaEjes" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Asientos</label>
                <Field as="select" name="asientos" class="form-control">
                  <option value="">Seleccione número de asientos</option>
                </Field>
                <ErrorMessage name="asientos" class="text-danger" />
              </div>
            </div>

            <!-- Tracción y Tipo de frenos -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Tracción</label>
                <Field as="select" name="traccion" class="form-control">
                  <option value="">Seleccione tracción</option>
                </Field>
                <ErrorMessage name="traccion" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Tipo de frenos</label>
                <Field as="select" name="tipoFrenos" class="form-control">
                  <option value="">Seleccione tipo de frenos</option>
                </Field>
                <ErrorMessage name="tipoFrenos" class="text-danger" />
              </div>
            </div>

            <!-- Distancia al suelo y Peso en vacío -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia al suelo (mm)</label>
                <Field as="select" name="distanciaSuelo" class="form-control">
                  <option value="">Seleccione distancia al suelo</option>
                </Field>
                <ErrorMessage name="distanciaSuelo" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Peso en vacío (kg)</label>
                <Field as="select" name="pesoVacio" class="form-control">
                  <option value="">Seleccione peso en vacío</option>
                </Field>
                <ErrorMessage name="pesoVacio" class="text-danger" />
              </div>
            </div>

            <!-- Torque y Velocidad máxima -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Torque (N*m)</label>
                <Field as="select" name="torque" class="form-control">
                  <option value="">Seleccione torque</option>
                </Field>
                <ErrorMessage name="torque" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Velocidad máxima (km/h)</label>
                <Field as="select" name="velocidadMaxima" class="form-control">
                  <option value="">Seleccione velocidad máxima</option>
                </Field>
                <ErrorMessage name="velocidadMaxima" class="text-danger" />
              </div>
            </div>
            <!-- Desplazamiento y Potencia máxima -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Desplazamiento (cc)</label>
                <Field as="select" name="desplazamiento" class="form-control">
                  <option value="">Seleccione desplazamiento</option>
                </Field>
                <ErrorMessage name="desplazamiento" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Potencia máxima (kW)</label>
                <Field as="select" name="potenciaMaxima" class="form-control">
                  <option value="">Seleccione potencia máxima</option>
                </Field>
                <ErrorMessage name="potenciaMaxima" class="text-danger" />
              </div>
            </div>
            <!-- Neumáticos y Caja de cambios -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Neumáticos</label>
                <Field as="select" name="neumaticos" class="form-control">
                  <option value="">Seleccione neumáticos</option>
                </Field>
                <ErrorMessage name="neumaticos" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Caja de cambios</label>
                <Field as="select" name="cajaCambios" class="form-control">
                  <option value="">Seleccione caja de cambios</option>
                </Field>
                <ErrorMessage name="cajaCambios" class="text-danger" />
              </div>
            </div>

            <!-- Suspensión delantera y trasera -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Suspensión delantera</label>
                <Field
                  as="select"
                  name="suspensionDelantera"
                  class="form-control"
                >
                  <option value="">Seleccione suspensión delantera</option>
                </Field>
                <ErrorMessage name="suspensionDelantera" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Suspensión trasera</label>
                <Field
                  as="select"
                  name="suspensionTrasera"
                  class="form-control"
                >
                  <option value="">Seleccione suspensión trasera</option>
                </Field>
                <ErrorMessage name="suspensionTrasera" class="text-danger" />
              </div>
            </div>
            <!-- Capacidad del tanque -->
            <div class="pb-6 py-4 mx-6">
              <label class="form-label"
                >Capacidad del tanque de combustible (l)</label
              >
              <Field as="select" name="capacidadTanque" class="form-control">
                <option value="">Seleccione capacidad del tanque</option>
              </Field>
              <ErrorMessage name="capacidadTanque" class="text-danger" />
            </div>
          </div>

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
import axios from "axios";
import ImageInput from "@/components/ImageInputTest.vue";

export default defineComponent({
  name: "AddVehiculo",
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageInput,
  },

  setup() {
    const formRef = ref(null);
    const addVehiculoModalRef = ref(null);
    const imageFile = ref<File | null>(null);

    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      descripcion: yup.string().required("La descripción es obligatoria"),
      image: yup.mixed().required("La imagen es obligatoria"),
      precio: yup
        .number()
        .required("El precio es obligatorio")
        .positive("Debe ser un número positivo"),
    });

    const { errors } = useForm({ validationSchema: schema });

    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      if (!imageFile.value) {
        console.error("No se ha seleccionado una imagen.");
        return;
      }

      const formData = new FormData();
      formData.append("image", imageFile.value);
      formData.append("nombre", values.nombre);
      formData.append("descripcion", values.descripcion);

      try {
        const response = await axios.post(
          "http://localhost:3000/service",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
        );

        console.log("Vehiculo creado:", response.data);
        hideModal(addVehiculoModalRef.value);
        resetForm();
        imageFile.value = null;
      } catch (error) {
        console.error("Error al crear el vehiculo:", error);
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addVehiculoModalRef,
      imageFile,
      errors,
    };
  },
});
</script>
