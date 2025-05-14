<template>
  <div
    class="modal fade"
    id="kt_modal_edit_vehiculo"
    ref="editVehiculoModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_edit_vehiculo_header">
          <h2 class="fw-bold">Editar Vehículo</h2>
          <div
            id="kt_modal_edit_vehiculo_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <!-- Formulario (con vee-validate) -->
        <Form
          :validation-schema="schema"
          @submit="handleSubmit"
          ref="formRef"
          class="my-6"
          v-slot="{ errors }"
        >
          <div class="card shadow-sm">
            <!-- Imágenes -->
            <div class="mb-4 px-4 py-4 mx-6">
              <ImageInput v-model="imageUrls" :error="errors.galery || ''" />
            </div>

            <!-- Nombre del Vehículo -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="required form-label">Nombre del vehículo</label>
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ingrese el nombre del vehículo"
                v-model="formFields.name"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Descripción -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="form-label">Descripción</label>
              <Field
                name="description"
                as="textarea"
                class="form-control"
                placeholder="Ingrese una descripción"
                v-model="formFields.description"
              />
              <ErrorMessage name="description" class="text-danger" />
            </div>

            <!-- Precio Base -->
            <div class="mb-4 px-4 py-4 mx-6">
              <label class="required form-label">Precio Base</label>
              <Field
                name="PrecioBase"
                as="input"
                type="number"
                class="form-control"
                placeholder="Ingrese el precio base"
                v-model="formFields.PrecioBase"
              />
              <ErrorMessage name="PrecioBase" class="text-danger" />
            </div>

            <!-- Marca y Modelo (nomencladores vía API) -->
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
                    :key="item.id"
                    :value="item.id"
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
                  <option
                    v-for="item in modelos"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="modelo" class="text-danger" />
              </div>
            </div>

            <!-- Campos ingresados manualmente: Dimensiones y Tamaño de la caja de carga -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">
                  Dimensiones (mm)
                  <small class="text-muted"
                    >(Ingrese números separados por comas)</small
                  >
                </label>
                <Field
                  name="dimensiones"
                  as="input"
                  type="text"
                  class="form-control"
                  placeholder="Ej: 4000,1700,1500"
                  v-model="formFields.dimensiones"
                />
                <ErrorMessage name="dimensiones" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">
                  Tamaño de la caja de carga (mm)
                  <small class="text-muted"
                    >(Ingrese números separados por comas)</small
                  >
                </label>
                <Field
                  name="tamanoCajaCarga"
                  as="input"
                  type="text"
                  class="form-control"
                  placeholder="Ej: 2000,2500"
                  v-model="formFields.tamanoCajaCarga"
                />
                <ErrorMessage name="tamanoCajaCarga" class="text-danger" />
              </div>
            </div>

            <!-- Otros campos numéricos -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia entre ejes (mm)</label>
                <Field
                  name="distanciaEjes"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese distancia entre ejes"
                  v-model="formFields.distanciaEjes"
                />
                <ErrorMessage name="distanciaEjes" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Asientos</label>
                <Field
                  name="asientos"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese el número de asientos"
                  v-model="formFields.asientos"
                />
                <ErrorMessage name="asientos" class="text-danger" />
              </div>
            </div>

            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Distancia al suelo (mm)</label>
                <Field
                  name="distanciaSuelo"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese distancia al suelo"
                  v-model="formFields.distanciaSuelo"
                />
                <ErrorMessage name="distanciaSuelo" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Peso en vacío (kg)</label>
                <Field
                  name="pesoVacio"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese el peso en vacío"
                  v-model="formFields.pesoVacio"
                />
                <ErrorMessage name="pesoVacio" class="text-danger" />
              </div>
            </div>

            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Torque (N*m)</label>
                <Field
                  name="torque"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese el torque"
                  v-model="formFields.torque"
                />
                <ErrorMessage name="torque" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Velocidad máxima (km/h)</label>
                <Field
                  name="velocidadMax"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese velocidad máxima"
                  v-model="formFields.velocidadMax"
                />
                <ErrorMessage name="velocidadMax" class="text-danger" />
              </div>
            </div>

            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Desplazamiento (cc)</label>
                <Field
                  name="desplazamiento"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese desplazamiento"
                  v-model="formFields.desplazamiento"
                />
                <ErrorMessage name="desplazamiento" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Potencia máxima (kW)</label>
                <Field
                  name="potenciaMax"
                  as="input"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese la potencia máxima"
                  v-model="formFields.potenciaMax"
                />
                <ErrorMessage name="potenciaMax" class="text-danger" />
              </div>
            </div>

            <!-- Nomencladores vía API: Tracción, Neumáticos, Caja de cambios, Suspensión, Tipo de freno y Motor -->
            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Tracción de delantera</label>
                <Field
                  as="select"
                  name="traccionDelantera"
                  class="form-control"
                  v-model="formFields.traccionDelantera"
                >
                  <option value="">Seleccione la tracción</option>
                  <option
                    v-for="item in traccionesDelantera"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="traccionDelantera" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Tracción de trasera</label>
                <Field
                  as="select"
                  name="traccionTrasera"
                  class="form-control"
                  v-model="formFields.traccionTrasera"
                >
                  <option value="">Seleccione la tracción</option>
                  <option
                    v-for="item in traccionesTrasera"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="traccionTrasera" class="text-danger" />
              </div>
            </div>

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
                    :key="item.id"
                    :value="item.id"
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
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="cajaCambios" class="text-danger" />
              </div>
            </div>

            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Tipo de suspensión</label>
                <Field
                  as="select"
                  name="tipoSuspension"
                  class="form-control"
                  v-model="formFields.tipoSuspension"
                >
                  <option value="">Seleccione tipo de suspensión</option>
                  <option
                    v-for="item in suspensiones"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="tipoSuspension" class="text-danger" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Tipo de freno</label>
                <Field
                  as="select"
                  name="tipoFreno"
                  class="form-control"
                  v-model="formFields.tipoFreno"
                >
                  <option value="">Seleccione tipo de freno</option>
                  <option
                    v-for="item in tipoFrenos"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="tipoFreno" class="text-danger" />
              </div>
            </div>

            <div class="row py-4 mx-6">
              <div class="col-md-6">
                <label class="form-label">Capacidad del tanque (l)</label>
                <Field
                  as="input"
                  type="number"
                  name="capacidadTanque"
                  class="form-control"
                  placeholder="Ingrese capacidad del tanque"
                  v-model="formFields.capacidadTanque"
                />
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
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name.es }}
                  </option>
                </Field>
                <ErrorMessage name="engine" class="text-danger" />
              </div>
            </div>
          </div>

          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">
              Cancelar
            </a>
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
import { defineComponent, ref, onMounted, computed } from "vue";
import { watch } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImageInput from "@/components/ImageInputTest.vue";
import { useVehiculoStore } from "@/stores/vehiculo";
// Importamos los stores para los nomencladores vía API
import { useMarcaStore } from "@/stores/marcas";
import { useModeloStore } from "@/stores/modelos";
import { useTipoFrenoStore } from "@/stores/tipo-freno";
import { useTipoNeumaticoStore } from "@/stores/tipo-neumatico";
import { useTipoSuspencionStore } from "@/stores/tipo-suspencion";
import { useTraccionStore } from "@/stores/traccion";
import { useMotorStore } from "@/stores/motor";
import { useCajaCambioStore } from "@/stores/caja-cambio";

// Interfaz para los campos del formulario
interface AddVehiculoFormFields {
  name: string;
  description: string;
  PrecioBase: number;
  galery: string[];
  marca: string;
  modelo: string;
  // Campos ingresados manualmente
  dimensiones: string;
  tamanoCajaCarga: string;
  distanciaEjes: number | null;
  asientos: number | null;
  traccionDelantera: string;
  traccionTrasera: string;
  tipoFreno: string;
  distanciaSuelo: number | null;
  pesoVacio: number | null;
  torque: number | null;
  velocidadMax: number | null;
  desplazamiento: number | null;
  potenciaMax: number | null;
  // Nomencladores vía API
  neumaticos: string;
  cajaCambios: string;
  tipoSuspension: string;
  capacidadTanque: number | null;
  engine: string;
}

// La prop recibe el vehículo a editar
interface Props {
  vehiculo: any;
}

export default defineComponent({
  name: "EditVehiculoModal",
  props: {
    vehiculo: {
      type: Object,
      required: true,
    },
  },
  components: { Form, Field, ErrorMessage, ImageInput },
  setup(props: Props) {
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
    const editVehiculoModalRef = ref<HTMLElement | null>(null);
    const imageUrls = ref<string[]>([]);

    // Inicialización única en onMounted: clonamos la prop para romper la reactividad profunda.
    onMounted(() => {
      if (props.vehiculo) {
        const vehiculoClone = JSON.parse(JSON.stringify(props.vehiculo));
        formFields.value = {
          name: vehiculoClone.name?.es || "",
          description: vehiculoClone.description?.es || "",
          PrecioBase: vehiculoClone.PrecioBase || 0,
          galery: vehiculoClone.galery || [],
          marca: vehiculoClone.marca || "",
          modelo: vehiculoClone.modelo || "",
          dimensiones: vehiculoClone.dimensiones
            ? vehiculoClone.dimensiones.join(",")
            : "",
          tamanoCajaCarga: vehiculoClone.tamanoCajaCarga
            ? vehiculoClone.tamanoCajaCarga.join(",")
            : "",
          distanciaEjes: vehiculoClone.distanciaEjes || null,
          asientos: vehiculoClone.asientos || null,
          traccionDelantera: vehiculoClone.traccionDelantera || "",
          traccionTrasera: vehiculoClone.traccionTrasera || "",
          tipoFreno: vehiculoClone.tipoFreno || "",
          distanciaSuelo: vehiculoClone.distanciaSuelo || null,
          pesoVacio: vehiculoClone.pesoVacio || null,
          torque: vehiculoClone.torque || null,
          velocidadMax: vehiculoClone.velocidadMax || null,
          desplazamiento: vehiculoClone.desplazamiento || null,
          potenciaMax: vehiculoClone.potenciaMax || null,
          neumaticos: vehiculoClone.neumaticos || "",
          cajaCambios: vehiculoClone.cajaCambios || "",
          tipoSuspension: vehiculoClone.tipoSuspension || "",
          capacidadTanque: vehiculoClone.capacitdadTanqueCombustible || null,
          engine: vehiculoClone.engine || "",
        };
        imageUrls.value = vehiculoClone.galery || [];
      }
    });

    // Definimos el objeto reactivo para el formulario.
    // (Se declara antes de onMounted para que pueda ser utilizado en onMounted)
    const formFields = ref<AddVehiculoFormFields>({
      name: "",
      description: "",
      PrecioBase: 0,
      galery: [],
      marca: "",
      modelo: "",
      dimensiones: "",
      tamanoCajaCarga: "",
      distanciaEjes: null,
      asientos: null,
      traccionDelantera: "",
      traccionTrasera: "",
      tipoFreno: "",
      distanciaSuelo: null,
      pesoVacio: null,
      torque: null,
      velocidadMax: null,
      desplazamiento: null,
      potenciaMax: null,
      neumaticos: "",
      cajaCambios: "",
      tipoSuspension: "",
      capacidadTanque: null,
      engine: "",
    });

    // ...

    watch(
      () => props.vehiculo,
      (newVehiculo) => {
        if (newVehiculo) {
          const vehiculoClone = JSON.parse(JSON.stringify(newVehiculo));
          formFields.value = {
            name: vehiculoClone.name?.es || "",
            description: vehiculoClone.description?.es || "",
            PrecioBase: vehiculoClone.PrecioBase || 0,
            galery: vehiculoClone.galery || [],
            marca: vehiculoClone.marca || "",
            modelo: vehiculoClone.modelo || "",
            dimensiones: vehiculoClone.dimensiones
              ? vehiculoClone.dimensiones.join(",")
              : "",
            tamanoCajaCarga: vehiculoClone.tamanoCajaCarga
              ? vehiculoClone.tamanoCajaCarga.join(",")
              : "",
            distanciaEjes: vehiculoClone.distanciaEjes || null,
            asientos: vehiculoClone.asientos || null,
            traccionDelantera: vehiculoClone.traccionDelantera || "",
            traccionTrasera: vehiculoClone.traccionTrasera || "",
            tipoFreno: vehiculoClone.tipoFreno || "",
            distanciaSuelo: vehiculoClone.distanciaSuelo || null,
            pesoVacio: vehiculoClone.pesoVacio || null,
            torque: vehiculoClone.torque || null,
            velocidadMax: vehiculoClone.velocidadMax || null,
            desplazamiento: vehiculoClone.desplazamiento || null,
            potenciaMax: vehiculoClone.potenciaMax || null,
            neumaticos: vehiculoClone.neumaticos || "",
            cajaCambios: vehiculoClone.cajaCambios || "",
            tipoSuspension: vehiculoClone.tipoSuspension || "",
            capacidadTanque: vehiculoClone.capacidadTanque || null,
            engine: vehiculoClone.engine || "",
          };
          imageUrls.value = vehiculoClone.galery || [];
        }
      },
      { immediate: true },
    );

    // Esquema de validación
    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
      description: yup.string(),
      PrecioBase: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio base es obligatorio"),
      galery: yup
        .array()
        .of(yup.string())
        .max(5, "Solo se permiten hasta 5 imágenes"),
      // Puedes agregar más validaciones según sea necesario.
    });

    const { errors } = useForm<AddVehiculoFormFields>({
      validationSchema: schema,
    });

    // Nomencladores vía API mediante stores
    const marcas = computed(() => marcaStore.marcas);
    const modelos = computed(() => modeloStore.modelos);
    const traccionesDelantera = computed(() => traccionStore.traccion);
    const traccionesTrasera = computed(() => traccionStore.traccion);
    const tipoFrenos = computed(() => tipoFrenoStore.tipofreno);
    const neumaticos = computed(() => tipoNeumaticoStore.tiponeumatico);
    const suspensiones = computed(() => tipoSuspencionStore.tiposuspencion);
    const motores = computed(() => motorStore.motors);
    const cajaCambios = computed(() => cajacambioStore.cajacambio);

    // Función para obtener nomencladores vía API
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

    onMounted(() => {
      fetchNomencladores();
    });

    // Función para transformar un string (ejemplo "4000,1700,1500") a array de números
    function transformarAArrayNumeros(
      valor: string | number[] | null,
    ): number[] | null {
      if (!valor) return null;
      if (Array.isArray(valor)) return valor;
      if (typeof valor === "string") {
        return valor
          .split(",")
          .map((n) => Number(n.trim()))
          .filter((n) => !isNaN(n));
      }
      return null;
    }

    // Función para enviar el formulario de actualización
    const handleSubmit = async (
      values: AddVehiculoFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("Ejecutando actualización...", values);

      // Transformar los campos que vienen como string a array de números.
      const dimensionesArray = transformarAArrayNumeros(values.dimensiones);
      const tamanoCajaCargaArray = transformarAArrayNumeros(
        values.tamanoCajaCarga,
      );

      // Construimos el objeto a enviar con el id del vehículo a actualizar.
      const updatedVehiculo: any = {
        id: props.vehiculo.id,
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        galery: imageUrls.value,
        PrecioBase: values.PrecioBase,
        dimensiones: dimensionesArray,
        tamanoCajaCarga: tamanoCajaCargaArray,
      };

      // Asignamos de forma condicional los demás campos si tienen contenido.
      if (values.marca !== "") {
        updatedVehiculo.marca = values.marca;
      }
      if (values.modelo !== "") {
        updatedVehiculo.modelo = values.modelo;
      }
      if (values.traccionDelantera !== "") {
        updatedVehiculo.traccionDelantera = values.traccionDelantera;
      }
      if (values.traccionTrasera !== "") {
        updatedVehiculo.traccionTrasera = values.traccionTrasera;
      }
      if (values.tipoFreno !== "") {
        updatedVehiculo.tipoFreno = values.tipoFreno;
      }
      if (values.neumaticos !== "") {
        updatedVehiculo.neumaticos = values.neumaticos;
      }
      if (values.cajaCambios !== "") {
        updatedVehiculo.cajaCambios = values.cajaCambios;
      }
      if (values.tipoSuspension !== "") {
        updatedVehiculo.tipoSuspension = values.tipoSuspension;
      }
      if (values.engine !== "") {
        updatedVehiculo.engine = values.engine;
      }
      if (values.distanciaEjes !== null && values.distanciaEjes !== undefined) {
        updatedVehiculo.distanciaEjes = values.distanciaEjes;
      }
      if (values.asientos !== null && values.asientos !== undefined) {
        updatedVehiculo.asientos = values.asientos;
      }
      if (
        values.distanciaSuelo !== null &&
        values.distanciaSuelo !== undefined
      ) {
        updatedVehiculo.distanciaSuelo = values.distanciaSuelo;
      }
      if (values.pesoVacio !== null && values.pesoVacio !== undefined) {
        updatedVehiculo.pesoVacio = values.pesoVacio;
      }
      if (values.torque !== null && values.torque !== undefined) {
        updatedVehiculo.torque = values.torque;
      }
      if (values.velocidadMax !== null && values.velocidadMax !== undefined) {
        updatedVehiculo.velocidadMax = values.velocidadMax;
      }
      if (
        values.desplazamiento !== null &&
        values.desplazamiento !== undefined
      ) {
        updatedVehiculo.desplazamiento = values.desplazamiento;
      }
      if (values.potenciaMax !== null && values.potenciaMax !== undefined) {
        updatedVehiculo.potenciaMax = values.potenciaMax;
      }
      if (
        values.capacidadTanque !== null &&
        values.capacidadTanque !== undefined
      ) {
        updatedVehiculo.capacitdadTanqueCombustible = values.capacidadTanque;
      }

      try {
        await vehiculoStore.updateVehiculo(updatedVehiculo);
        console.log("Datos actualizados:", updatedVehiculo);
        await vehiculoStore.fetchVehiculos();
        Swal.fire({
          text: "Vehículo actualizado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al actualizar el vehículo",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
        console.error("Error al actualizar vehículo:", error);
      } finally {
        hideModal(editVehiculoModalRef.value);
        resetForm();
        imageUrls.value = [];
      }
    };

    return {
      schema,
      handleSubmit,
      transformarAArrayNumeros,
      formRef,
      editVehiculoModalRef,
      imageUrls,
      errors,
      formFields,
      marcas,
      modelos,
      traccionesDelantera,
      traccionesTrasera,
      tipoFrenos,
      neumaticos,
      suspensiones,
      motores,
      cajaCambios,
      // Retornamos también los stores para uso si es necesario
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
