<template>
  <div class="login-signin">
    <div class="mb-20">
      <h3 class="opacity-40 font-weight-normal">Regístrese</h3>
      <p class="opacity-40">Introduzca sus datos para crear su cuenta</p>
    </div>
    <Form @submit="onSubmit" class="form" id="kt_login_signin_form">
      <!-- <div class="form-group">
        <ImageInput v-model="imageUrls" :error="errors.photo?.[0] || ''" />
      </div> -->
      <div class="form-group">
        <Field
          name="name"
          type="text"
          placeholder="Nombre"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="name">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <Field
          name="lastname"
          type="text"
          placeholder="Apellidos"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="lastname">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <Field
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="username">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <Field
          name="email"
          type="email"
          placeholder="Email"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="email">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <Field
          name="phone"
          type="text"
          placeholder="Telefono"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="phone">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group">
        <Field
          name="password"
          type="password"
          placeholder="Password"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="password">
          <span class="text-danger small">{{ $message }}</span>
        </ErrorMessage>
      </div>

      <div class="form-group text-center mt-7 d-flex">
        <button
          type="submit"
          id="kt_login_signin_submit"
          class="btn btn-pill btn-primary opacity-90 px-15 py-3"
        >
          Registrarse
        </button>
        <button
          type="reset"
          class="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2"
        >
          Cancelar
        </button>
      </div>

      <div class="mt-4">
        <span class="opacity-40 mr-4">¿Tienes una cuenta?</span>
        <router-link
          to="/login"
          id="kt_login_signup"
          class="text-white opacity-30 font-weight-normal"
          >Iniciar sesión</router-link
        >
      </div>
    </Form>
  </div>
  <!--end::Login Sign in form-->
</template>

<script setup>
  import { ref, inject } from "vue";
  import { useRouter } from "vue-router";
  import { useCookies } from "vue3-cookies";
  import { Form, Field, ErrorMessage, useForm } from "vee-validate";
  import * as yup from "yup";
  import { useAuth } from "@/composables/useAuth";
  import ImageInput from "@/components/ImageInputTestProduct.vue";

  const imageUrls = ref("");
  const { cookies } = useCookies();
  const axios = inject("axios");
  const router = useRouter();
  const username = ref("");
  const password = ref("");
  const loading = ref(false);
  const errorMessage = ref("");
  const snackbar = inject("snackbar");
  const { isTokenExpired } = useAuth();

  const schema = yup.object({
    name: yup.string().required("El nombre es obligatorio"),
    lastname: yup.string().required("Los apellidos son obligatorios"),
    username: yup.string().required("El nombre de usuario es obligatorio"),
    email: yup
      .string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    phone: yup.string().required("El teléfono es obligatorio"),

    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(6, "Mínimo 6 caracteres"),
  });

  const { handleSubmit } = useForm({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: schema,
  });
  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log("run");
      await isTokenExpired();
      const response = await axios.post("/auth/signup", values);
      if (data.data.isSuccess) {
        snackbar.show({
          color: "success",
          message: `Usuario registrado correctamente`,
        });
      } else {
        snackbar.show({
          color: "error",
          message: data.data.errorMessage || "Error al procesar la solicitud",
        });
      }
      console.log("Usuario registrado:", response.data);
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  });
</script>
<style scoped>
  @import "../../assets/styles/style.bundle.css";
</style>
