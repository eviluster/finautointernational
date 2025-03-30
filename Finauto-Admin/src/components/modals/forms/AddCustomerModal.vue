<template>
  <div
    class="modal fade"
    id="kt_modal_add_customer"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_customer_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Añadir un cliente</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <Form
          @submit="handleSubmit"
          :validation-schema="schema"
          ref="formRef"
          class="my-6"
        >
          <div class="card shadow-sm">
            <!-- Campo: Nombre del cliente -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Nombre del cliente</label>
              <Field
                name="nombre"
                as="input"
                type="text"
                class="form-control"
                placeholder="Ponga el nombre del servicio"
              />
              <ErrorMessage name="nombre" class="text-danger" />
            </div>

            <!-- Campo: Email -->
            <div class="mb-4 px-4 py-4 col-11 mx-6">
              <label class="required form-label">Email</label>
              <Field
                name="email"
                as="input"
                class="form-control"
                placeholder="Ponga el correoelectrónico"
              />
              <ErrorMessage name="email" class="text-danger" />
            </div>
          </div>

          <!-- Campo: ID de cuenta -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Número de teléfono</label>
            <Field
              name="phone"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ponga el ID de su cuenta"
            />
            <ErrorMessage name="phone" class="text-danger" />
          </div>

          <!-- Campo: Estado -->
          <div class="mb-4 px-4 py-4 col-11 mx-6">
            <label class="required form-label">Estado</label>
            <Field
              name="estado"
              as="input"
              type="text"
              class="form-control"
              placeholder="Ponga el estado"
            />
            <ErrorMessage name="estado" class="text-danger" />
          </div>

          <!-- Footer del formulario -->
          <div class="card-footer my-8 d-flex justify-content-end">
            <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
              >Cancelar</a
            >
            <button type="submit" class="btn btn-bg-primary mx-3">
              Guardar
            </button>
          </div>
        </Form>
        <!--end::Form-->
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
import { type ICustomer } from "@/core/data/customers";
import ImageInput from "@/components/ImageInput.vue";

export default defineComponent({
  name: "AddServicio",
  components: {
    Form,
    Field,
    ErrorMessage,
    ImageInput,
  },

  setup() {
    const customerStore = useCustomerStore();
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const schema = yup.object({
      nombre: yup.string().required("El nombre es obligatorio"),
      email: yup
        .string()
        .email("Debe ser un correo electrónico válido")
        .required("El correo es obligatorio"),
      phone: yup.string().required("El ID de cuenta es obligatorio"),
      estado: yup.string().required("El estado es obligatorio"),
    });

    const { errors } = useForm({ validationSchema: schema });

    const handleSubmit = (
      values: any,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando");

      const newCustomer: ICustomer = {
        id: Math.floor(Math.random() * 99999) + 1,
        nombre: values.nombre,
        email: values.email,
        phone: values.phone,
        estado: values.estado,
        date: new Date().toLocaleString(),
      };

      customerStore.addCustomer(newCustomer);
      console.log("servicio agregado:", newCustomer);
      hideModal(addCustomerModalRef.value);
      resetForm();
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
