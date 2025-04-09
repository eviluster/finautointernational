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
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <h2 class="fw-bold">Añadir un Vehiculo</h2>
          <div
            id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <!-- Se agrega @submit para que llame a handleSubmit -->
        <Form
          :validation-schema="schema"
          @submit="handleSubmit"
          ref="formRef"
          class="my-6"
          v-slot="{ errors }"
        >
          <div class="card shadow-sm">
            <div class="mb-4 px-4 py-4 mx-6">
              <ImageInput v-model="imageUrls" :error="errors.galery || ''" />
            </div>

            <!-- Campo: Nombre del vehiculo -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="required form-label">Nombre del vehiculo</label>
              <!-- name cambiado a "name" -->
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del vehiculo"
                v-model="formFields.name"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Descripción -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="form-label">Descripción</label>
              <Field
                name="description"
                as="textarea"
                class="form-control"
                placeholder="Ponga la descripción"
                v-model="formFields.description"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>

            <!-- Campo: Precio Base -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="required form-label">Precio Base</label>
              <Field
                name="precioBase"
                as="input"
                type="number"
                class="form-control"
                placeholder="Ponga el precio base"
                v-model="formFields.precioBase"
              />
              <ErrorMessage name="precioBase" class="text-danger" />
            </div>

            <!-- Marca y Modelo -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Marca</label>
                <Field
                  as="select"
                  name="marca"
                  class="form-control"
                  v-model="formFields.marca"
                >
                  <option value="">Seleccione una marca</option>
                  <option
                    v-for="item in marcas"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="marca" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Modelo</label>
                <Field
                  as="select"
                  name="modelo"
                  class="form-control"
                  v-model="formFields.modelo"
                >
                  <option value="">Seleccione un modelo</option>
                  <!-- Filtramos los modelos según la marca seleccionada -->
                  <option
                    v-for="item in modelos"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="modelo" class="text-danger" />
              </div>
            </div>

            <!-- Dimensiones y Tamaño de la caja de carga (datos estáticos) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Dimensiones (mm)</label>
                <Field
                  as="select"
                  name="dimensiones"
                  class="form-control"
                  v-model="formFields.dimensiones"
                >
                  <option value="">Seleccione dimensiones</option>
                  <option
                    v-for="item in dimensiones"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="dimensiones" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label"
                  >Tamaño de la caja de carga (mm)</label
                >
                <Field
                  as="select"
                  name="tamanoCajaCarga"
                  class="form-control"
                  v-model="formFields.tamanoCajaCarga"
                >
                  <option value="">Seleccione tamaño de caja</option>
                  <option
                    v-for="item in tamanoCajaCarga"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="tamanoCajaCarga" class="text-danger" />
              </div>
            </div>

            <!-- Distancia entre ejes y Asientos (datos estáticos) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia entre ejes (mm)</label>
                <Field
                  as="select"
                  name="distanciaEjes"
                  class="form-control"
                  v-model="formFields.distanciaEjes"
                >
                  <option value="">Seleccione distancia entre ejes</option>
                  <option
                    v-for="item in distanciaEjes"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="distanciaEjes" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Asientos</label>
                <Field
                  as="select"
                  name="asientos"
                  class="form-control"
                  v-model="formFields.asientos"
                >
                  <option value="">Seleccione número de asientos</option>
                  <option
                    v-for="item in asientos"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="asientos" class="text-danger" />
              </div>
            </div>

            <!-- Tracción y Tipo de frenos (nomencladores obtenidos de "la API") -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Tracción</label>
                <Field
                  as="select"
                  name="traccion"
                  class="form-control"
                  v-model="formFields.traccion"
                >
                  <option value="">Seleccione tracción</option>
                  <option
                    v-for="item in tracciones"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="traccion" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Tipo de frenos</label>
                <Field
                  as="select"
                  name="tipoFrenos"
                  class="form-control"
                  v-model="formFields.tipoFrenos"
                >
                  <option value="">Seleccione tipo de frenos</option>
                  <option
                    v-for="item in tipoFrenos"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="tipoFrenos" class="text-danger" />
              </div>
            </div>

            <!-- Distancia al suelo y Peso en vacío (datos estáticos) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia al suelo (mm)</label>
                <Field
                  as="select"
                  name="distanciaSuelo"
                  class="form-control"
                  v-model="formFields.distanciaSuelo"
                >
                  <option value="">Seleccione distancia al suelo</option>
                  <option
                    v-for="item in distanciaSuelo"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="distanciaSuelo" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Peso en vacío (kg)</label>
                <Field
                  as="select"
                  name="pesoVacio"
                  class="form-control"
                  v-model="formFields.pesoVacio"
                >
                  <option value="">Seleccione peso en vacío</option>
                  <option
                    v-for="item in pesoVacio"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="pesoVacio" class="text-danger" />
              </div>
            </div>

            <!-- Torque y Velocidad máxima (datos estáticos) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Torque (N*m)</label>
                <Field
                  as="select"
                  name="torque"
                  class="form-control"
                  v-model="formFields.torque"
                >
                  <option value="">Seleccione torque</option>
                  <option
                    v-for="item in torque"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="torque" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Velocidad máxima (km/h)</label>
                <Field
                  as="select"
                  name="velocidadMax"
                  class="form-control"
                  v-model="formFields.velocidadMax"
                >
                  <option value="">Seleccione velocidad máxima</option>
                  <option
                    v-for="item in velocidadMax"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="velocidadMax" class="text-danger" />
              </div>
            </div>

            <!-- Desplazamiento y Potencia máxima (datos estáticos) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Desplazamiento (cc)</label>
                <Field
                  as="select"
                  name="desplazamiento"
                  class="form-control"
                  v-model="formFields.desplazamiento"
                >
                  <option value="">Seleccione desplazamiento</option>
                  <option
                    v-for="item in desplazamiento"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="desplazamiento" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Potencia máxima (kW)</label>
                <Field
                  as="select"
                  name="potenciaMax"
                  class="form-control"
                  v-model="formFields.potenciaMax"
                >
                  <option value="">Seleccione potencia máxima</option>
                  <option
                    v-for="item in potenciaMax"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="potenciaMax" class="text-danger" />
              </div>
            </div>

            <!-- Neumáticos y Caja de cambios (nomencladores API) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Neumáticos</label>
                <Field
                  as="select"
                  name="neumaticos"
                  class="form-control"
                  v-model="formFields.neumaticos"
                >
                  <option value="">Seleccione neumáticos</option>
                  <option
                    v-for="item in neumaticos"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="neumaticos" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Caja de cambios</label>
                <Field
                  as="select"
                  name="cajaCambios"
                  class="form-control"
                  v-model="formFields.cajaCambios"
                >
                  <option value="">Seleccione caja de cambios</option>
                  <option
                    v-for="item in cajaCambios"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="cajaCambios" class="text-danger" />
              </div>
            </div>

            <!-- Suspensión delantera y trasera (usando el nomenclador "suspensiones") -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Suspensión delantera</label>
                <Field
                  as="select"
                  name="suspensionDelantera"
                  class="form-control"
                  v-model="formFields.suspensionDelantera"
                >
                  <option value="">Seleccione suspensión delantera</option>
                  <option
                    v-for="item in suspensiones"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name }}
                  </option>
                </Field>
                <ErrorMessage name="suspensionDelantera" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Suspensión trasera</label>
                <Field
                  as="select"
                  name="suspensionTrasera"
                  class="form-control"
                  v-model="formFields.suspensionTrasera"
                >
                  <option value="">Seleccione suspensión trasera</option>
                  <option
                    v-for="item in suspensiones"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="suspensionTrasera" class="text-danger" />
              </div>
            </div>

            <!-- Capacidad del tanque y Motor (nomencladores API) -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Capacidad del tanque (l)</label>
                <Field
                  as="select"
                  name="capacidadTanque"
                  class="form-control"
                  v-model="formFields.capacidadTanque"
                >
                  <option value="">Seleccione capacidad del tanque</option>
                  <option
                    v-for="item in capacidadTanque"
                    :key="item.id"
                    :value="item.valor"
                  >
                    {{ item.valor }}
                  </option>
                </Field>
                <ErrorMessage name="capacidadTanque" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Motor</label>
                <Field
                  as="select"
                  name="engine"
                  class="form-control"
                  v-model="formFields.engine"
                >
                  <option value="">Seleccione el motor</option>
                  <option
                    v-for="item in motores"
                    :key="item.name.es"
                    :value="item.name.es"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="engine" class="text-danger" />
              </div>
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
import { defineComponent, ref, onMounted, computed } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useVehiculoStore } from "@/stores/vehiculo";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImageInput from "@/components/ImageInputTest.vue";

import { useMarcaStore } from "@/stores/marcas";
import { useModeloStore } from "@/stores/modelos";
import { useTipoFrenoStore } from "@/stores/tipo-freno";
import { useTipoNeumaticoStore } from "@/stores/tipo-neumatico";
import { useTipoSuspencionStore } from "@/stores/tipo-suspencion";
import { useTraccionStore } from "@/stores/traccion";
import { useMotorStore } from "@/stores/motor";
import { useCajaCambioStore } from "@/stores/caja-cambio";

interface AddVehiculoFormFields {
  name: string;
  description: string;
  precioBase: number;
  galery: string[];
  marca: string;
  modelo: string;
  dimensiones: string;
  tamanoCajaCarga: string;
  distanciaEjes: string;
  asientos: string;
  traccion: string;
  tipoFrenos: string;
  distanciaSuelo: string;
  pesoVacio: string;
  torque: string;
  velocidadMax: string;
  desplazamiento: string;
  potenciaMax: string;
  neumaticos: string;
  cajaCambios: string;
  suspensionDelantera: string;
  suspensionTrasera: string;
  capacidadTanque: string;
  engine: string;
}

export default defineComponent({
  name: "AddVehiculo",
  components: { Form, Field, ErrorMessage, ImageInput },
  setup() {
    const vehiculoStore = useVehiculoStore();
    const cajacambioStore = useCajaCambioStore();
    const motorStore = useMotorStore();
    const traccionStore = useTraccionStore();
    const tipoFrenoStore = useTipoFrenoStore();
    const tipoNeumaticoStore = useTipoNeumaticoStore();
    const tipoSuspencionStore = useTipoSuspencionStore();
    const marcaStore = useMarcaStore();
    const modeloStore = useModeloStore();

    const formRef = ref<HTMLFormElement | null>(null);
    const addVehiculoModalRef = ref<HTMLElement | null>(null);
    const imageUrls = ref<string[]>([]);

    // Para el formulario se utiliza un objeto reactivo con todos los campos necesarios.
    const formFields = ref<AddVehiculoFormFields>({
      name: "",
      description: "",
      precioBase: 0,
      galery: [],
      marca: "",
      modelo: "",
      dimensiones: "",
      tamanoCajaCarga: "",
      distanciaEjes: "",
      asientos: "",
      traccion: "",
      tipoFrenos: "",
      distanciaSuelo: "",
      pesoVacio: "",
      torque: "",
      velocidadMax: "",
      desplazamiento: "",
      potenciaMax: "",
      neumaticos: "",
      cajaCambios: "",
      suspensionDelantera: "",
      suspensionTrasera: "",
      capacidadTanque: "",
      engine: "",
    });

    // Esquema de validación (solo se definen algunos campos, puedes ampliarlo según lo requieras)
    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string(),
      precioBase: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio base es obligatorio"),
      galery: yup
        .array()
        .of(yup.string())
        .max(5, "Solo se permiten hasta 5 imágenes"),
    });

    const { errors } = useForm<AddVehiculoFormFields>({
      validationSchema: schema,
    });

    // Variables reactivas para nomencladores (datos obtenidos vía "API")
    const marcas = computed(() => marcaStore.marcas);
    const modelos = computed(() => modeloStore.modelos);
    const tracciones = computed(() => traccionStore.traccion);
    const tipoFrenos = computed(() => tipoFrenoStore.tipofreno);
    const neumaticos = computed(() => tipoNeumaticoStore.tiponeumatico);
    const suspensiones = computed(() => tipoSuspencionStore.tiposuspencion);
    const motores = computed(() => motorStore.motors);
    const cajaCambios = computed(() => cajacambioStore.cajacambio);

    // Datos estáticos para otros campos
    const dimensiones = ref([
      { id: 1, valor: "4000 x 1700 x 1500" },
      { id: 2, valor: "4500 x 1800 x 1600" },
    ]);
    const tamanoCajaCarga = ref([
      { id: 1, valor: "2000 mm" },
      { id: 2, valor: "2500 mm" },
    ]);
    const distanciaEjes = ref([
      { id: 1, valor: "2500 mm" },
      { id: 2, valor: "2800 mm" },
    ]);
    const asientos = ref([
      { id: 1, valor: "2" },
      { id: 2, valor: "4" },
      { id: 3, valor: "5" },
    ]);
    const distanciaSuelo = ref([
      { id: 1, valor: "150 mm" },
      { id: 2, valor: "180 mm" },
    ]);
    const pesoVacio = ref([
      { id: 1, valor: "1200 kg" },
      { id: 2, valor: "1500 kg" },
    ]);
    const torque = ref([
      { id: 1, valor: "200 N*m" },
      { id: 2, valor: "250 N*m" },
    ]);
    const velocidadMax = ref([
      { id: 1, valor: "180 km/h" },
      { id: 2, valor: "200 km/h" },
    ]);
    const desplazamiento = ref([
      { id: 1, valor: "1600 cc" },
      { id: 2, valor: "2000 cc" },
    ]);
    const potenciaMax = ref([
      { id: 1, valor: "100 kW" },
      { id: 2, valor: "120 kW" },
    ]);
    const capacidadTanque = ref([
      { id: 1, valor: "45" },
      { id: 2, valor: "55" },
    ]);
    const pesoStatic = ref([
      // Si fuese necesario, puedes añadir más datos estáticos aquí.
    ]);

    // Función para simular llamadas a una API que obtienen los nomencladores.
    const fetchNomencladores = async () => {
      await cajacambioStore.fetchCajaCambio();
      await motorStore.fetchMotors();
      await traccionStore.fetchTraccion();
      await tipoFrenoStore.fetchTipoFreno();
      await tipoNeumaticoStore.fetchTipoNeumatico();
      await tipoSuspencionStore.fetchTipoSuspencion();
      await marcaStore.fetchMarcas();
      await modeloStore.fetchModelos();
    };

    // Llamado a la función de nomencladores al montar el componente.
    onMounted(() => {
      fetchNomencladores();
    });

    // Función para enviar el formulario
    const handleSubmit = async (
      values: AddVehiculoFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("Ejecutando...", values);

      const newVehiculo = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        galery: imageUrls.value,
        precioBase: values.precioBase,
        marca: values.marca,
        modelo: values.modelo,
        dimensiones: values.dimensiones,
        tamanoCajaCarga: values.tamanoCajaCarga,
        distanciaEjes: values.distanciaEjes,
        asientos: values.asientos,
        traccion: values.traccion,
        tipoFrenos: values.tipoFrenos,
        distanciaSuelo: values.distanciaSuelo,
        pesoVacio: values.pesoVacio,
        torque: values.torque,
        velocidadMax: values.velocidadMax,
        desplazamiento: values.desplazamiento,
        potenciaMax: values.potenciaMax,
        neumaticos: values.neumaticos,
        cajaCambios: values.cajaCambios,
        suspensionDelantera: values.suspensionDelantera,
        suspensionTrasera: values.suspensionTrasera,
        capacidadTanque: values.capacidadTanque,
        engine: values.engine,
      };

      try {
        const response = await vehiculoStore.addVehiculo(newVehiculo);
        await vehiculoStore.fetchVehiculos();
        Swal.fire({
          text: "Vehiculo agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el vehiculo",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
        console.error("Error al agregar vehiculo:", error);
      } finally {
        hideModal(addVehiculoModalRef.value);
        resetForm();
        imageUrls.value = [];
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addVehiculoModalRef,
      imageUrls,
      errors,
      formFields,
      marcas,
      modelos,
      tracciones,
      tipoFrenos,
      neumaticos,
      suspensiones,
      motores,
      cajaCambios,
      // Datos estáticos
      dimensiones,
      tamanoCajaCarga,
      distanciaEjes,
      asientos,
      distanciaSuelo,
      pesoVacio,
      torque,
      velocidadMax,
      desplazamiento,
      potenciaMax,
      capacidadTanque,
      cajacambioStore,
      motorStore,
      traccionStore,
      tipoFrenoStore,
      tipoNeumaticoStore,
      tipoSuspencionStore,
      marcaStore,
      modeloStore,
    };
  },
});
</script>

<style scoped>
/* Puedes agregar estilos personalizados o utilizar Bootstrap */
</style>
