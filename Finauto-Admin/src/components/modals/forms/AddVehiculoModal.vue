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

        <!-- Formulario (con vee-validate) -->
        <Form
          :validation-schema="schema"
          @submit="handleSubmit"
          ref="formRef"
          class="my-6"
          v-slot="{ errors }"
        >
          <div class="card shadow-sm">
            <!-- Imagenes -->
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
                name="precioBase"
                as="input"
                type="number"
                class="form-control"
                placeholder="Ingrese el precio base"
                v-model="formFields.precioBase"
              />
              <ErrorMessage name="precioBase" class="text-danger" />
            </div>

            <!-- Marca y Modelo (nomencladores obtenidos vía API) -->
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

            <!-- Campos que serán ingresados manualmente por el usuario -->
            <!-- Para "dimensiones" y "tamanoCajaCarga" se espera que el usuario ingrese una lista de números separados por comas (por ejemplo: "4000,1700,1500") -->
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

            <!-- Los demás campos numéricos se ingresan mediante inputs -->
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

            <!-- Nomencladores vía API: Neumáticos, Caja de cambios, Suspensión y Motor -->
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
              <div class="col-md-12">
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

// Importación de stores para nomencladores vía API
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
  // Estos campos ahora serán ingresados por el usuario como inputs
  dimensiones: string;
  tamanoCajaCarga: string;
  distanciaEjes: number | null;
  asientos: number | null;
  traccion: string;
  tipoFrenos: string;
  distanciaSuelo: number | null;
  pesoVacio: number | null;
  torque: number | null;
  velocidadMax: number | null;
  desplazamiento: number | null;
  potenciaMax: number | null;
  neumaticos: string;
  cajaCambios: string;
  tipoSuspension: string;
  capacidadTanque: number | null;
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

    // Objeto reactivo para los campos del formulario
    const formFields = ref<AddVehiculoFormFields>({
      name: "",
      description: "",
      precioBase: 0,
      galery: [],
      marca: "",
      modelo: "",
      dimensiones: "", // Usuario ingresará un string (por ejemplo, "4000,1700,1500")
      tamanoCajaCarga: "", // Usuario ingresará un string (por ejemplo, "2000,2500")
      distanciaEjes: null,
      asientos: null,
      traccion: "",
      tipoFrenos: "",
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

    // Esquema de validación (se puede ampliar)
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
      // Puedes agregar validación personalizada para los campos nuevos si es necesario.
    });

    const { errors } = useForm<AddVehiculoFormFields>({
      validationSchema: schema,
    });

    // Nomencladores (datos vía API) mediante stores
    const marcas = computed(() => marcaStore.marcas);
    const modelos = computed(() => modeloStore.modelos);
    const tracciones = computed(() => traccionStore.traccion);
    const tipoFrenos = computed(() => tipoFrenoStore.tipofreno);
    const neumaticos = computed(() => tipoNeumaticoStore.tiponeumatico);
    const suspensiones = computed(() => tipoSuspencionStore.tiposuspencion);
    const motores = computed(() => motorStore.motors);
    const cajaCambios = computed(() => cajacambioStore.cajacambio);

    // Función para obtener nomencladores vía API (cada store debe tener su método fetch)
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

    // Función para enviar el formulario
    const handleSubmit = async (
      values: AddVehiculoFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("Ejecutando...", values);

      // Se procesa la transformación de los campos que llegan como string a array de números
      const dimensionesArray = transformarAArrayNumeros(values.dimensiones);
      const tamanoCajaCargaArray = transformarAArrayNumeros(
        values.tamanoCajaCarga,
      );

      const newVehiculo = {
        name: { es: values.name, en: "" },
        description: { es: values.description, en: "" },
        galery: imageUrls.value,
        PrecioBase: values.precioBase,
        marca: values.marca,
        modelo: values.modelo,
        dimensiones: dimensionesArray,
        tamanoCajaCarga: tamanoCajaCargaArray,
        distanciaEjes: values.distanciaEjes,
        asientos: values.asientos,
        traccionDelantera: values.traccion,
        traccionTrasera: values.traccion,
        tipoFreno: values.tipoFrenos,
        distanciaSuelo: values.distanciaSuelo,
        pesoVacio: values.pesoVacio,
        torque: values.torque,
        velocidadMax: values.velocidadMax,
        desplazamiento: values.desplazamiento,
        potenciaMax: values.potenciaMax,
        tipoNeumatico: values.neumaticos,
        cajaCambio: values.cajaCambios,
        tipoSuspension: values.tipoSuspension,
        capacitdadTanqueCombustible: values.capacidadTanque,
        engine: values.engine,
      };

      try {
        await vehiculoStore.addVehiculo(newVehiculo);
        console.log("Datos enviados:", newVehiculo);

        await vehiculoStore.fetchVehiculos();
        Swal.fire({
          text: "Vehículo agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el vehículo",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
        console.error("Error al agregar vehículo:", error);
      } finally {
        hideModal(addVehiculoModalRef.value);
        resetForm();
        imageUrls.value = [];
      }
    };

    return {
      schema,
      handleSubmit,
      transformarAArrayNumeros,
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
      // No se retornan datos estáticos para los campos que ahora son inputs.
      // Se retornan también las referencias a los stores en caso de necesitarlos.
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
