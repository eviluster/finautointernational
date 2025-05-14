<template>
  <div
    class="modal fade"
    id="kt_modal_add_customer"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px miModal">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_provincia_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir un Customer</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_provincia_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>

        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <!-- Campo: Nombre del customer -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del cliente</label>
              <Field
                name="name"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del customer"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>

            <!-- Campo: Email -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Correo electrónico</label>
              <Field
                name="email"
                as="input"
                type="email"
                class="form-control"
                placeholder="Ponga el email"
              />
              <ErrorMessage name="email" class="text-danger" />
            </div>

            <!-- Campo: Address Line One -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Dirección principal</label>
              <Field
                name="addessLineOne"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga la dirección principal"
              />
              <ErrorMessage name="addessLineOne" class="text-danger" />
            </div>

            <!-- Campo: Address Line Two -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="form-label">Dirección secundaria</label>
              <Field
                name="addressLineTwo"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga la segunda línea de la dirección"
              />
              <ErrorMessage name="addressLineTwo" class="text-danger" />
            </div>

            <!-- Campo: City / Town -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Ciudad o pueblo</label>
              <Field
                name="cityTown"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga la ciudad o pueblo"
              />
              <ErrorMessage name="cityTown" class="text-danger" />
            </div>

            <!-- Campo: Postal Code -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Código postal</label>
              <Field
                name="postalCode"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el código postal"
              />
              <ErrorMessage name="postalCode" class="text-danger" />
            </div>
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal">
              Cancelar
            </a>
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
import { useCustomerStore } from "@/stores/customers";
import Swal from "sweetalert2/dist/sweetalert2.js";

interface AddCustomerFormFields {
  name: string;
  email: string;
  addessLineOne: string;
  addressLineTwo?: string;
  cityTown: string;
  postalCode: string;
}

export default defineComponent({
  name: "AddCustomer",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const customerStore = useCustomerStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addCustomerModalRef = ref<HTMLElement | null>(null);

    const schema = yup.object({
      name: yup.string().required("El nombre es obligatorio"),
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

    const { errors } = useForm<AddCustomerFormFields>({
      validationSchema: schema,
    });

    // Función de envío del formulario
    const handleSubmit = async (
      values: AddCustomerFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      const newCustomer = {
        name: { es: values.name, en: "" },
        email: values.email,
        addessLineOne: values.addessLineOne,
        addressLineTwo: values.addressLineTwo,
        cityTown: values.cityTown,
        postalCode: values.postalCode,
      };

      try {
        await customerStore.addCustomer(newCustomer);
        await customerStore.fetchCustomers();

        Swal.fire({
          text: "Customer agregado correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } catch (error) {
        Swal.fire({
          text: "Error al crear el customer",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
        console.error("Error al agregar customer:", error);
      } finally {
        hideModal(addCustomerModalRef.value);
        resetForm();
      }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addCustomerModalRef,
      errors,
    };
  },
});
</script>

<style scoped></style>
