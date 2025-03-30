<template>
  <footer class="bg-dark text-white pt-4 pb-4">
    <div class="container">
      <div class="row">
        <!-- Columna 1: Nombre de la empresa, enlaces legales -->
        <div class="col-12 col-md-4 mb-3 mb-md-0 mb-sm-5">
          <figure>
            <img src="/images/Logo finauto 2022(text blanco).png" alt="logo" />
          </figure>
          <ul class="list-unstyled enumciados">
            <li>
              <a href="#" class="text-white text-decoration-none">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">
                Política de Privacidad
              </a>
            </li>
          </ul>
          <!-- <p class="mt-3 mb-0">
            © 2025 FINAUTO INTERNATIONAL LTD <br />
            Todos los derechos reservados.
          </p> -->
        </div>

        <!-- Columna 2: Información de contacto -->
        <div class="col-12 col-md-4 mb-3 mb-md-0 mb-sm-5">
          <h5>Contáctanos</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-telephone-fill me-2"></i> +505 8765 0000
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope-fill me-2"></i>
              <a
                href="mailto:finauto@finauto.com"
                class="text-white text-decoration-none"
              >
                finauto@finauto.com
              </a>
            </li>
            <li class="mb-2">
              <i class="bi bi-geo-alt-fill me-2"></i>
              1ra calle #4, Apopa
            </li>
          </ul>

          <!-- Redes sociales (ejemplo con Bootstrap Icons o Font Awesome) -->
          <div class="mt-3">
            <a href="#" class="text-white me-3 text-decoration-none">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-white me-3 text-decoration-none">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-white me-3 text-decoration-none">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-white text-decoration-none">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Columna 3: Formulario de contacto -->
        <div class="col-12 col-md-4">
          <h5>Envíanos un mensaje</h5>
          <form @submit.prevent="enviarFormulario">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                v-model="form.nombre"
                required
              />
            </div>
            <div class="mb-3">
              <label for="correo" class="form-label">Correo Electrónico</label>
              <input
                type="email"
                class="form-control"
                id="correo"
                v-model="form.correo"
                required
              />
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea
                class="form-control"
                id="mensaje"
                rows="3"
                v-model="form.mensaje"
                required
              ></textarea>
            </div>
            <!-- <button type="submit" class="btn btn-primary">Enviar</button> -->
            <button type="submit" style="margin: auto">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyrigth">
    <p>FINAUTO INTERNATIONAL LTD © Todos los derechos reservados.</p>
  </div>
</template>

<script>
  export default {
    name: "FooterComponent",
    data() {
      return {
        form: {
          nombre: "",
          correo: "",
          mensaje: "",
        },
      };
    },
    methods: {
      enviarFormulario() {
        // Aquí puedes manejar la lógica de envío del formulario,
        // ya sea por Axios, Fetch API, etc.
        console.log("Datos del formulario:", this.form);
        // Resetea el formulario
        this.form.nombre = "";
        this.form.correo = "";
        this.form.mensaje = "";
        alert("Formulario enviado");
      },
    },
  };
</script>

<style scoped>
  /* Ajustes opcionales para el footer */
  footer {
    /* Ajusta la altura mínima si lo deseas */
    /* min-height: 200px; */
  }
  .list-unstyled.enumciados li {
    margin-bottom: 20px;
  }
  /* Ejemplo de color para íconos (si usas Bootstrap Icons) */
  .bi {
    font-size: 25px;
  }
  .list-unstyled a {
    font-size: 20px !important;
  }
</style>
