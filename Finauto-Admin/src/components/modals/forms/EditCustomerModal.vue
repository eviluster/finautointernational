<template>
  <div
    class="modal fade"
    id="kt_modal_edit_customer"
    ref="editCustomerModalRef"
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
          <h2 class="fw-bold">Editar Customer</h2>
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
        <Form :validation-schema="schema" @submit="handleSubmit">
          <!-- Campo: Nombre (ES) -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Nombre </label>
            <Field
              name="nameEs"
              v-model="formData.nameEs"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese el nombre en español"
            />
            <ErrorMessage name="nameEs" class="text-danger" />
          </div>

          <!-- Campo: Email -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Correo electrónico</label>
            <Field
              name="email"
              v-model="formData.email"
              as="input"
              type="email"
              class="form-control"
              placeholder="Ingrese el email"
            />
            <ErrorMessage name="email" class="text-danger" />
          </div>

          <!-- Campo: Address Line One -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Dirección principal</label>
            <Field
              name="addessLineOne"
              v-model="formData.addessLineOne"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese la dirección principal"
            />
            <ErrorMessage name="addessLineOne" class="text-danger" />
          </div>

          <!-- Campo: Address Line Two -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="form-label">Dirección secundaria</label>
            <Field
              name="addressLineTwo"
              v-model="formData.addressLineTwo"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese la segunda línea de la dirección"
            />
            <ErrorMessage name="addressLineTwo" class="text-danger" />
          </div>

          <!-- Campo: City/Town -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Ciudad o pueblo</label>
            <Field
              name="cityTown"
              v-model="formData.cityTown"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese la ciudad o pueblo"
            />
            <ErrorMessage name="cityTown" class="text-danger" />
          </div>

          <!-- Campo: Postal Code -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Código postal</label>
            <Field
              name="postalCode"
              v-model="formData.postalCode"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ingrese el código postal"
            />
            <ErrorMessage name="postalCode" class="text-danger" />
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button type="submit" class="btn btn-bg-primary mx-3">
              Actualizar
            </button>
          </div>
        </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useCustomerStore } from "@/stores/customers";

export default defineComponent({
  name: "EditCustomer",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const customerStore = useCustomerStore();
    const editCustomerModalRef = ref<HTMLElement | null>(null);

    // Objeto reactivo para almacenar los datos del formulario
    const formData = ref({
      id: "",
      nameEs: "",
      nameEn: "",
      email: "",
      addessLineOne: "",
      addressLineTwo: "",
      cityTown: "",
      postalCode: "",
    });

    // Esquema de validación con yup
    const schema = yup.object({
      nameEs: yup.string().required("El nombre en español es obligatorio"),
      nameEn: yup.string(),
      email: yup
        .string()
        .email("Ingrese un email válido")
        .required("El email es obligatorio"),
      addessLineOne: yup
        .string()
        .required("La dirección principal es obligatoria"),
      addressLineTwo: yup.string(),
      cityTown: yup.string().required("La ciudad es obligatoria"),
      postalCode: yup.string().required("El código postal es obligatorio"),
    });

    const { errors } = useForm({ validationSchema: schema });

    // Sincronizamos los datos de la prop "customer" con el formulario
    watchEffect(() => {
      if (props.customer) {
        formData.value.id = props.customer.id || "";
        formData.value.nameEs = props.customer.name?.es || "";
        formData.value.nameEn = props.customer.name?.en || "";
        formData.value.email = props.customer.email || "";
        formData.value.addessLineOne = props.customer.addessLineOne || "";
        formData.value.addressLineTwo = props.customer.addressLineTwo || "";
        formData.value.cityTown = props.customer.cityTown || "";
        formData.value.postalCode = props.customer.postalCode || "";
      }
    });

    // Función de envío del formulario
    const handleSubmit = async (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      try {
        const updatedData = {
          id: formData.value.id,
          name: { es: values.nameEs, en: values.nameEn || "" },
          email: values.email,
          addessLineOne: values.addessLineOne,
          addressLineTwo: values.addressLineTwo,
          cityTown: values.cityTown,
          postalCode: values.postalCode,
        };

        console.log(updatedData);

        await customerStore.updateCustomer(updatedData);
        await customerStore.fetchCustomers(); // Refrescamos la lista de customers

        hideModal(editCustomerModalRef.value);
        resetForm();
      } catch (error) {
        console.error("Error al actualizar el customer:", error);
      }
    };

    return {
      editCustomerModalRef,
      formData,
      errors,
      schema,
      handleSubmit,
    };
  },
});
</script>

<style scoped></style>
