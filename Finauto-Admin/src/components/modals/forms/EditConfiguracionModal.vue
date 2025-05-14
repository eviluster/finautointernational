<template>
  <div
    class="modal fade"
    id="kt_modal_edit_configuracion"
    ref="editConfiguracionModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content" style="padding: 20px">
        <div class="modal-header" id="kt_modal_edit_provincia_header">
          <h2 class="fw-bold">Editar Configuración</h2>
          <div
            id="kt_modal_edit_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <Form :validation-schema="schema" @submit="handleSubmit">
          <div class="container my-4">
            <div class="row">
              <!-- Columna izquierda -->
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="from" class="form-label">From (Email)</label>
                  <Field
                    id="from"
                    name="from"
                    type="email"
                    v-model="formData.from"
                    class="form-control"
                  />
                  <ErrorMessage name="from" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="to" class="form-label">To (Email)</label>
                  <Field
                    id="to"
                    name="to"
                    type="email"
                    v-model="formData.to"
                    class="form-control"
                  />
                  <ErrorMessage name="to" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="porcientoConfReserva" class="form-label">
                    Porciento Conf Reserva (%)
                  </label>
                  <Field
                    id="porcientoConfReserva"
                    name="porcientoConfReserva"
                    type="number"
                    v-model.number="formData.porcientoConfReserva"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="porcientoConfReserva"
                    class="text-danger"
                  />
                </div>
                <div class="mb-3">
                  <label for="porcientoMinPrice" class="form-label">
                    Porciento Min Price (%)
                  </label>
                  <Field
                    id="porcientoMinPrice"
                    name="porcientoMinPrice"
                    type="number"
                    v-model.number="formData.porcientoMinPrice"
                    class="form-control"
                  />
                  <ErrorMessage name="porcientoMinPrice" class="text-danger" />
                </div>
              </div>

              <!-- Columna derecha -->
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="tiempoGarantia" class="form-label">
                    Tiempo Garantía (días)
                  </label>
                  <Field
                    id="tiempoGarantia"
                    name="tiempoGarantia"
                    type="number"
                    v-model.number="formData.tiempoGarantia"
                    class="form-control"
                  />
                  <ErrorMessage name="tiempoGarantia" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="kmGarantia" class="form-label">Km Garantía</label>
                  <Field
                    id="kmGarantia"
                    name="kmGarantia"
                    type="number"
                    v-model.number="formData.kmGarantia"
                    class="form-control"
                  />
                  <ErrorMessage name="kmGarantia" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="validezOferta" class="form-label">
                    Validez Oferta (días)
                  </label>
                  <Field
                    id="validezOferta"
                    name="validezOferta"
                    type="number"
                    v-model.number="formData.validezOferta"
                    class="form-control"
                  />
                  <ErrorMessage name="validezOferta" class="text-danger" />
                </div>

                <!-- Nuevos campos -->
                <div class="mb-3">
                  <label for="importPriceCar" class="form-label">
                    Import Price Car
                  </label>
                  <Field
                    id="importPriceCar"
                    name="importPriceCar"
                    type="number"
                    v-model.number="formData.importPriceCar"
                    class="form-control"
                  />
                  <ErrorMessage name="importPriceCar" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="importPriceService" class="form-label">
                    Import Price Service
                  </label>
                  <Field
                    id="importPriceService"
                    name="importPriceService"
                    type="number"
                    v-model.number="formData.importPriceService"
                    class="form-control"
                  />
                  <ErrorMessage name="importPriceService" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="importPriceParte" class="form-label">
                    Import Price Parte
                  </label>
                  <Field
                    id="importPriceParte"
                    name="importPriceParte"
                    type="number"
                    v-model.number="formData.importPriceParte"
                    class="form-control"
                  />
                  <ErrorMessage name="importPriceParte" class="text-danger" />
                </div>
                <div class="mb-3">
                  <label for="importPriceEquipoGarage" class="form-label">
                    Import Price Equipo Garage
                  </label>
                  <Field
                    id="importPriceEquipoGarage"
                    name="importPriceEquipoGarage"
                    type="number"
                    v-model.number="formData.importPriceEquipoGarage"
                    class="form-control"
                  />
                  <ErrorMessage
                    name="importPriceEquipoGarage"
                    class="text-danger"
                  />
                </div>
              </div>
            </div>

            <div class="mt-4">
              <button type="submit" class="btn btn-primary me-3">
                Actualizar
              </button>
              <button type="button" class="btn btn-link" @click="closeModal">
                Cancelar
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useConfiguracionStore } from "@/stores/configuracion";

export default defineComponent({
  name: "EditConfiguracion",
  components: { Form, Field, ErrorMessage },
  props: {
    configuracion: { type: Object, required: true },
  },
  setup(props) {
    const configuracionStore = useConfiguracionStore();
    const editConfiguracionModalRef = ref<HTMLElement | null>(null);
    const closeModal = () => hideModal(editConfiguracionModalRef.value);

    // Datos reactivos del formulario
    const formData = ref({
      id: "",
      from: "",
      to: "",
      porcientoConfReserva: 0,
      porcientoMinPrice: 0,
      tiempoGarantia: 1,
      kmGarantia: 1,
      validezOferta: 1,
      importPriceCar: 0,
      importPriceService: 0,
      importPriceParte: 0,
      importPriceEquipoGarage: 0,
    });

    // Esquema Yup con los nuevos campos
    const schema = yup.object({
      from: yup.string().email().required(),
      to: yup.string().email().required(),
      porcientoConfReserva: yup.number().min(0).max(100).required(),
      porcientoMinPrice: yup.number().min(0).max(100).required(),
      tiempoGarantia: yup.number().min(1).required(),
      kmGarantia: yup.number().min(1).required(),
      validezOferta: yup.number().min(1).required(),
      importPriceCar: yup.number().min(0).required(),
      importPriceService: yup.number().min(0).required(),
      importPriceParte: yup.number().min(0).required(),
      importPriceEquipoGarage: yup.number().min(0).required(),
    });

    useForm({ validationSchema: schema });

    // Sincroniza props.configuracion → formData
    watchEffect(() => {
      const c = props.configuracion as any;
      if (c) {
        formData.value = {
          id: c.id,
          from: c.from,
          to: c.to,
          porcientoConfReserva: c.porcientoConfReserva,
          porcientoMinPrice: c.porcientoMinPrice,
          tiempoGarantia: c.tiempoGarantia,
          kmGarantia: c.kmGarantia,
          validezOferta: c.validezOferta,

          importPriceCar: c.importPriceCar,
          importPriceService: c.importPriceService,
          importPriceParte: c.importPriceParte,
          importPriceEquipoGarage: c.importPriceEquipoGarage,
        };
      }
    });

    // Envío del formulario
    const handleSubmit = async () => {
      try {
        console.log("run");

        await configuracionStore.updateConfiguracion({ ...formData.value });
        await configuracionStore.fetchConfiguraciones();
        hideModal(editConfiguracionModalRef.value);
      } catch (err) {
        console.error("Error al actualizar configuración:", err);
      }
    };

    return {
      editConfiguracionModalRef,
      formData,
      schema,
      handleSubmit,
      closeModal,
    };
  },
});
</script>
