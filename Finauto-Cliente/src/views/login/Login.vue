<template>
  <div class="login-signin">
    <div class="mb-20">
      <h3 class="opacity-40 font-weight-normal">Iniciar Sesión</h3>
      <p class="opacity-40">
        Introduzca sus datos para iniciar sesión en su cuenta:
      </p>
    </div>
    <form class="form" id="kt_login_signin_form">
      <div class="form-group">
        <input
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
          type="text"
          placeholder="Email"
          name="username"
          autocomplete="off"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div
        class="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60"
      >
        <div class="checkbox-inline">
          <label
            class="checkbox checkbox-outline checkbox-white text-white m-0"
          >
            <input type="checkbox" name="remember" />
            <span></span>Recuérdame</label
          >
        </div>
        <a
          href="/forgot-password"
          id="kt_login_forgot"
          class="text-white font-weight-bold"
          @click="showForgotForm"
          >¿Olvidó su contraseña?</a
        >
      </div>
      <div class="form-group text-center mt-10">
        <button
          id="kt_login_signin_submit"
          class="btn btn-pill btn-primary opacity-90 px-15 py-3"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
    <div class="mt-10">
      <span class="opacity-40 mr-4">¿Aún no tienes una cuenta?</span>
      <a
        href="/register"
        id="kt_login_signup"
        class="text-white opacity-30 font-weight-normal"
        @click="showSignupForm"
        >Regístrate</a
      >
    </div>
  </div>
  <!--end::Login Sign in form-->
</template>

<script>
  export default {
    name: "LoginForm",
    /*methods: {
    goToForgotPassword() {
      this.$router.push('/forgot-password'); // Redirige a la página de "Olvidé mi contraseña"
    },
    goToRegister() {
      this.$router.push('/register'); // Redirige a la página de registro
    },
  },*/
  };
</script>
<style scoped>
  /*@import '../../assets/styles/login-5.css';*/
  @import "../../assets/styles/style.bundle.css";
  /*@import '../../assets/plugins/plugins.bundle.css';
@import '../../assets/plugins/prismjs.bundle.css';

/* Estilos para tu nuevo layout */
</style>
