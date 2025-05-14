<template>
  <div
    class="modal fade"
    id="kt_modal_edit_cuenta"
    ref="editCuentaModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h2 class="fw-bold">Editar Cuenta Bancaria</h2>
          <div
            class="btn btn-icon btn-sm btn-active-icon-primary"
            data-bs-dismiss="modal"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>

        <!-- Form -->
        <Form :validation-schema="schema" @submit="handleSubmit">
          <div class="card shadow-sm px-6 py-4">
            <!-- Beneficiario -->
            <div class="mb-4">
              <label class="required form-label">Beneficiario</label>
              <Field
                name="beneficiario"
                v-model="formData.beneficiario"
                as="input"
                type="text"
                class="form-control"
                placeholder="Nombre del beneficiario"
              />
              <ErrorMessage name="beneficiario" class="text-danger" />
            </div>

            <!-- Dirección Beneficiario -->
            <div class="mb-4">
              <label class="required form-label">Dirección Beneficiario</label>
              <Field
                name="direccionBeneficiario"
                v-model="formData.direccionBeneficiario"
                as="input"
                type="text"
                class="form-control"
                placeholder="Dirección del beneficiario"
              />
              <ErrorMessage name="direccionBeneficiario" class="text-danger" />
            </div>

            <!-- Nombre Banco -->
            <div class="mb-4">
              <label class="required form-label">Nombre del Banco</label>
              <Field
                name="nombreBanco"
                v-model="formData.nombreBanco"
                as="input"
                type="text"
                class="form-control"
                placeholder="Nombre del banco"
              />
              <ErrorMessage name="nombreBanco" class="text-danger" />
            </div>

            <!-- Dirección Banco -->
            <div class="mb-4">
              <label class="required form-label">Dirección del Banco</label>
              <Field
                name="direccionBanco"
                v-model="formData.direccionBanco"
                as="input"
                type="text"
                class="form-control"
                placeholder="Dirección del banco"
              />
              <ErrorMessage name="direccionBanco" class="text-danger" />
            </div>

            <!-- Código -->
            <div class="mb-4">
              <label class="required form-label">Código</label>
              <Field
                name="codigo"
                v-model="formData.codigo"
                as="input"
                type="text"
                class="form-control"
                placeholder="Código identificador"
              />
              <ErrorMessage name="codigo" class="text-danger" />
            </div>

            <!-- Moneda -->
            <div class="mb-4">
              <label class="required form-label">Moneda</label>
              <Field
                name="currency"
                v-model="formData.currency"
                as="select"
                class="form-select"
              >
                <option disabled value="">Seleccione moneda</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </Field>
              <ErrorMessage name="currency" class="text-danger" />
            </div>

            <!-- Número de Cuenta -->
            <div class="mb-4">
              <label class="required form-label">Número de Cuenta</label>
              <Field
                name="numeroCuenta"
                v-model="formData.numeroCuenta"
                as="input"
                type="text"
                class="form-control"
                placeholder="Número de cuenta bancaria"
              />
              <ErrorMessage name="numeroCuenta" class="text-danger" />
            </div>
          </div>

          <!-- Footer -->
          <div class="card-footer my-4 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-bg-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
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
import { defineComponent, ref, watchEffect } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useCuentaStore } from "@/stores/cuenta-bancaria";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "EditCuenta",
  emits: ["refresh"],
  components: { Form, Field, ErrorMessage },
  props: {
    cuenta: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const cuentaStore = useCuentaStore();
    const editCuentaModalRef = ref<HTMLElement | null>(null);

    const formData = ref({
      id: "",
      beneficiario: "",
      direccionBeneficiario: "",
      nombreBanco: "",
      direccionBanco: "",
      codigo: "",
      currency: "" as "USD" | "EUR",
      numeroCuenta: "",
    });

    const schema = yup.object({
      beneficiario: yup.string().required("El beneficiario es obligatorio"),
      direccionBeneficiario: yup
        .string()
        .required("La dirección es obligatoria"),
      nombreBanco: yup.string().required("El nombre del banco es obligatorio"),
      direccionBanco: yup
        .string()
        .required("La dirección del banco es obligatoria"),
      codigo: yup.string().required("El código es obligatorio"),
      currency: yup
        .mixed<"USD" | "EUR">()
        .oneOf(["USD", "EUR"], "Moneda inválida")
        .required("La moneda es obligatoria"),
      numeroCuenta: yup.string().required("El número de cuenta es obligatorio"),
    });

    useForm({ validationSchema: schema });

    watchEffect(() => {
      if (props.cuenta) {
        formData.value.id = props.cuenta.id || "";
        formData.value.beneficiario = props.cuenta.beneficiario || "";
        formData.value.direccionBeneficiario =
          props.cuenta.direccionBeneficiario || "";
        formData.value.nombreBanco = props.cuenta.nombreBanco || "";
        formData.value.direccionBanco = props.cuenta.direccionBanco || "";
        formData.value.codigo = props.cuenta.codigo || "";
        formData.value.currency = props.cuenta.currency;
        formData.value.numeroCuenta = props.cuenta.numeroCuenta || "";
      }
    });

    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      try {
        const updated = { id: props.cuenta.id, ...values };
        console.log(updated);
        await cuentaStore.updateCuenta(updated);
        await cuentaStore.fetchCuentas();
        emit("refresh");
        Swal.fire({
          text: "Cuenta bancaria agregada correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } catch (error) {
        console.error("Error al actualizar la cuenta:", error);
        Swal.fire({
          text: "Error al crear la cuenta bancaria",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: { confirmButton: "btn btn-primary" },
        });
      } finally {
        hideModal(editCuentaModalRef.value);
        resetForm();
      }
    };

    return {
      formData,
      schema,
      handleSubmit,
      editCuentaModalRef,
    };
  },
});
</script>

<style scoped></style>
