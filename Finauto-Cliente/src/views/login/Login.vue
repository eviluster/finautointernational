<template>
  <div class="login-signin">
    <div class="mb-20">
      <h3 class="opacity-40 font-weight-normal">Iniciar Sesión</h3>
      <p class="opacity-40">
        Introduzca sus datos para iniciar sesión en su cuenta:
      </p>
    </div>
    <Form @submit="onSubmit" class="form" id="kt_login_signin_form">
      <div class="form-group">
        <Field
          name="email"
          type="text"
          placeholder="Email"
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
        />
        <ErrorMessage name="email">
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

      <div
        class="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60"
      >
        <div class="checkbox-inline">
          <label
            class="checkbox checkbox-outline checkbox-white text-white m-0"
          >
            <Field type="checkbox" name="remember" />
            <span></span>Recuérdame
          </label>
        </div>
        <a
          href="/forgot-password"
          id="kt_login_forgot"
          class="text-white font-weight-bold"
          @click.prevent="showForgotForm"
          >¿Olvidó su contraseña?</a
        >
      </div>

      <div class="form-group text-center mt-10">
        <button
          type="submit"
          id="kt_login_signin_submit"
          class="btn btn-pill btn-primary opacity-90 px-15 py-3"
        >
          Iniciar sesión
        </button>
      </div>
    </Form>
    <div class="mt-10">
      <span class="opacity-40 mr-4">¿Aún no tienes una cuenta?</span>
      <router-link
        to="/register"
        id="kt_login_signup"
        class="text-white opacity-30 font-weight-normal"
        >Regístrate</router-link
      >
    </div>
  </div>
  <!--end::Login Sign in form-->
</template>

<script setup>
  import { ref, inject } from "vue";
  import { useRouter } from "vue-router";
  import { useCookies } from "vue3-cookies";
  import { Form, Field, ErrorMessage, useForm } from "vee-validate";
  import * as yup from "yup";

  const { cookies } = useCookies();
  const axios = inject("axios");
  const router = useRouter();
  const username = ref("");
  const password = ref("");
  const loading = ref(false);
  const errorMessage = ref("");
  const snackbar = inject("snackbar");

  const schema = yup.object({
    email: yup
      .string()
      .required("El email es obligatorio")
      .email("Debe ser un email válido"),
    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(6, "Mínimo 6 caracteres"),
    remember: yup.boolean(),
  });

  const { handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const onSubmit = handleSubmit(async (values) => {
    console.log("run");
    if (!username.value || !password.value) return;
    loading.value = true;
    errorMessage.value = "";
    const dataSent = {
      username: username.value,
      password: password.value,
    };
    console.log(dataSent);

    try {
      const response = await axios.post("/auth/signin", dataSent);
      console.log("login", response.data);
      //if (response.data.isSuccess) {
      cookies.set("refresh_token", response.data.refresh_token, {
        secure: true,
        sameSite: "Strict",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 día
      });

      const userData = {
        name: response.data.name,
        email: response.data.email,
      };
      cookies.set("userData", JSON.stringify(userData), {
        secure: true,
        sameSite: "Strict",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 día
      });
      snackbar.show({
        color: "success",
        message: "Sesión iniciada correctamente",
      });
      await router.push({ path: "/" });
    } catch (error) {
      console.error("Error de autenticación:", error);
      snackbar.show({
        color: "error",
        message:
          error.response.data.message ||
          error.message ||
          "Error en la autenticación",
      });

      if (error.response) {
        errorMessage.value =
          error.response.data.message || "Error en la autenticación";
      } else if (error.request) {
        errorMessage.value = "No se pudo conectar con el servidor";
      } else {
        errorMessage.value = "Error inesperado";
      }
    } finally {
      loading.value = false;
    }
  });
</script>
<style scoped>
  @import "../../assets/styles/style.bundle.css";
</style>
