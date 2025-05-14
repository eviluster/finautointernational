<template>
  <Form
    :validation-schema="schema"
    @submit="handleSubmit"
    ref="formRef"
    class="my-6"
  >
    <div class="card shadow-sm">
      <!-- Campo: Photo -->
      <div class="mb-4 px-4 py-4 col-11 mx-6">
        <label class="required form-label">Foto</label>
        <ImageInput v-model="imageUrls" :error="errors.photo || ''" />
      </div>

      <!-- Campo: Price -->
      <div class="mb-4 px-4 py-4 col-11 mx-6">
        <label class="required form-label">Precio</label>
        <Field
          name="price"
          as="input"
          type="number"
          class="form-control"
          placeholder="Introduce el precio"
        />
        <ErrorMessage name="price" class="text-danger" />
      </div>

      <!-- Status -->
      <div class="card card-flush py-4 mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center"
        >
          <h2 class="card-title">Status</h2>
          <div class="rounded-circle bg-success w-15px h-15px" />
        </div>
        <div class="card-body pt-0">
          <Field
            as="select"
            name="status"
            class="form-select"
            v-model="formFields.status"
          >
            <option disabled value="">Selecciona el estado</option>
            <option value="offert">Offert</option>
            <option value="published">Published</option>
            <option value="stock">Stock</option>
            <option value="inactive">Inactive</option>
          </Field>
          <span>{{ errors.status }}</span>
          <ErrorMessage name="status" class="text-danger" />
        </div>
      </div>

      <!-- Template settings -->
      <div class="card card-flush py-4">
        <div class="card-header">
          <h2 class="card-title">Product Template</h2>
        </div>
        <div class="card-body pt-0">
          <label for="template" class="form-label"
            >Seleccione una plantilla de producto</label
          >
          <Field
            as="select"
            id="template"
            name="tipo"
            class="form-select"
            v-model="formFields.tipo"
          >
            <option disabled value="">Selecciona el tipo de producto</option>
            <option value="vehicle">Vehículos</option>
            <option value="pieza">Piezas</option>
            <option value="equipoGarage">Producto de garaje</option>
            <option value="servicio">Servicio</option>
          </Field>
          <ErrorMessage name="tipo" class="text-danger" />
        </div>
      </div>

      <!-- Campo: Offer Price -->
      <div class="mb-4 px-4 py-4 col-11 mx-6">
        <label class="form-label">Precio Oferta</label>
        <Field
          name="offertPrice"
          as="input"
          type="number"
          class="form-control"
          placeholder="Introduce el precio de oferta"
        />
        <ErrorMessage name="offertPrice" class="text-danger" />
      </div>
    </div>

    <div class="card-footer my-8 d-flex justify-content-end">
      <a href="#" class="btn btn-bg-secondary" data-bs-dismiss="modal"
        >Cancelar</a
      >
      <button type="submit" class="btn btn-bg-primary mx-3">Guardar</button>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { hideModal } from "@/core/helpers/modal";
import { useProductoStore } from "@/stores/products";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ImageInput from "@/components/ImageInputTestProduct.vue";

interface AddProductFormFields {
  status: string;
  servicio: string;
  pieza: string;
  equipoGarage: string;
  vehicle: string;
  price: number;
  offertPrice: number;
  photo: string;
  vigencia: string;
}

export default defineComponent({
  name: "AddProduct",
  components: { Form, Field, ErrorMessage, ImageInput },

  setup() {
    const productStore = useProductoStore();
    const formRef = ref<HTMLFormElement | null>(null);
    const addProductModalRef = ref<HTMLElement | null>(null);
    const imageUrls = ref<string>("");
    const formFields = ref({
      photo: "",
      status: "",
      element: "",
      tipo: "",
      price: 0,
      offertPrice: 0,
      vigencia: "",
    });
    const schema = yup.object({
      price: yup
        .number()
        .typeError("El precio debe ser un número")
        .required("El precio es obligatorio"),
      offertPrice: yup
        .number()
        .typeError("El precio de oferta debe ser un número")
        .min(0, "El precio de oferta no puede ser negativo"),
      photo: yup.string().required("La foto es obligatoria"),
    });

    const { errors } = useForm<AddProductFormFields>({
      validationSchema: schema,
    });

    const handleSubmit = async (
      values: AddProductFormFields,
      { resetForm }: { resetForm: () => void },
    ) => {
      console.log("ejecutando", values);

      // if (!imageUrls.value) {
      //   Swal.fire({
      //     text: "Debe subir una foto",
      //     icon: "error",
      //     buttonsStyling: false,
      //     confirmButtonText: "Ok",
      //     heightAuto: false,
      //     customClass: { confirmButton: "btn btn-primary" },
      //   });
      //   return;
      // }

      // const newProduct = {
      //   price: values.price,
      //   offertPrice: values.offertPrice,
      //   photo: imageUrls.value,
      // };

      // try {
      //   await productStore.addProducto(newProduct);
      //   await productStore.fetchProductos();
      //   Swal.fire({
      //     text: "Producto agregado correctamente",
      //     icon: "success",
      //     buttonsStyling: false,
      //     confirmButtonText: "Ok",
      //     heightAuto: false,
      //     customClass: { confirmButton: "btn btn-primary" },
      //   });
      // } catch (error) {
      //   Swal.fire({
      //     text: "Error al crear el producto",
      //     icon: "error",
      //     buttonsStyling: false,
      //     confirmButtonText: "Ok",
      //     heightAuto: false,
      //     customClass: { confirmButton: "btn btn-primary" },
      //   });
      //   console.error("Error al agregar producto:", error);
      // } finally {
      //   hideModal(addProductModalRef.value);
      //   resetForm();
      //   imageUrls.value = "";
      // }
    };

    return {
      schema,
      handleSubmit,
      formRef,
      addProductModalRef,
      imageUrls,
      errors,
      formFields,
    };
  },
});
</script>
