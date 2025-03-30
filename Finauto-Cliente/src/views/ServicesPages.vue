<template>
  <h2>servicios</h2>
  <!-- Barra de búsqueda -->

  <div class="principal-card">
    <div class="service-container">
      <div class="service-card">
        <img src="/images/service1.jpg" alt="servicio" />
        <div class="text-service">
          <div class="service-title">
            <h3>Nombre Servicio</h3>
          </div>
          <div class="description">
            <p>
              Dolor fugiat pariatur do ut laboris commodo. Proident nostrud
              labore aliqua incididunt ullamco id. Adipisicing duis cupidatat
              mollit voluptate eu adipisicing proident deserunt tempor et esse
              magna. Ad cupidatat eu adipisicing labore ipsum cupidatat
              cupidatat elit. Laboris cillum esse deserunt reprehenderit
              consequat commodo est ex culpa sunt pariatur esse dolor. Dolor
              proident dolore exercitation esse anim in do aliquip dolor mollit.
              Sint exercitation tempor veniam dolor nulla in mollit excepteur.
            </p>
          </div>
        </div>
      </div>
      <div class="service-card2">
        <img src="/images/service1.jpg" alt="servicio" />
        <div class="text-service">
          <div class="service-title">
            <h3>Nombre Servicio</h3>
          </div>
          <div class="description">
            <p>
              Dolor fugiat pariatur do ut laboris commodo. Proident nostrud
              labore aliqua incididunt ullamco id. Adipisicing duis cupidatat
              mollit voluptate eu adipisicing proident deserunt tempor et esse
              magna. Ad cupidatat eu adipisicing labore ipsum cupidatat
              cupidatat elit. Laboris cillum esse deserunt reprehenderit
              consequat commodo est ex culpa sunt pariatur esse dolor. Dolor
              proident dolore exercitation esse anim in do aliquip dolor mollit.
              Sint exercitation tempor veniam dolor nulla in mollit excepteur.
            </p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <img src="/images/service1.jpg" alt="servicio" />
        <div class="text-service">
          <div class="service-title">
            <h3>Nombre Servicio</h3>
          </div>
          <div class="description">
            <p>
              Dolor fugiat pariatur do ut laboris commodo. Proident nostrud
              labore aliqua incididunt ullamco id. Adipisicing duis cupidatat
              mollit voluptate eu adipisicing proident deserunt tempor et esse
              magna. Ad cupidatat eu adipisicing labore ipsum cupidatat
              cupidatat elit. Laboris cillum esse deserunt reprehenderit
              consequat commodo est ex culpa sunt pariatur esse dolor. Dolor
              proident dolore exercitation esse anim in do aliquip dolor mollit.
              Sint exercitation tempor veniam dolor nulla in mollit excepteur.
            </p>
          </div>
        </div>
      </div>
      <div class="service-card2">
        <img src="/images/service1.jpg" alt="servicio" />
        <div class="text-service">
          <div class="service-title">
            <h3>Nombre Servicio</h3>
          </div>
          <div class="description">
            <p>
              Dolor fugiat pariatur do ut laboris commodo. Proident nostrud
              labore aliqua incididunt ullamco id. Adipisicing duis cupidatat
              mollit voluptate eu adipisicing proident deserunt tempor et esse
              magna. Ad cupidatat eu adipisicing labore ipsum cupidatat
              cupidatat elit. Laboris cillum esse deserunt reprehenderit
              consequat commodo est ex culpa sunt pariatur esse dolor. Dolor
              proident dolore exercitation esse anim in do aliquip dolor mollit.
              Sint exercitation tempor veniam dolor nulla in mollit excepteur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal que aparecerá si no está registrado -->
  <div v-if="showRegistrationModal" class="modal" style="display: flex">
    <div class="modal-content">
      <span class="close" @click="closeRegistrationModal">&times;</span>
      <h2>No estás registrado</h2>
      <p>Por favor, regístrate para acceder al contenido.</p>

      <router-link to="login" class="register-link"
        >Ir a la página de registro</router-link
      >
    </div>
  </div>

  <section class="promo-section">
    <div class="promo-content">
      <h1>¡Mantén tu auto en perfecto estado!</h1>
      <p>
        En nuestra agencia, ofrecemos servicios de mantenimiento, pintura y
        reparaciones para que tu auto esté siempre como nuevo.
      </p>
      <p>
        <strong
          >¡Solicita tu servicio hoy y obtén un 20% de descuento en tu primera
          visita!</strong
        >
      </p>
      <a class="protected-link" href="#" @click.prevent="checkRegistration"
        >Solicitar Servicio</a
      >
    </div>
  </section>

  <!-- Modal de solicitud de servicio -->
  <ServiceForm
    v-if="showServiceFormModal"
    :showServiceFormModal="showServiceFormModal"
    @close="closeServiceFormModal"
  />
</template>

<script setup>
  import { computed, ref, watch } from "vue";
  import ServiceForm from "../components/modal/ServiceForm.vue";
  import store from "../store/store";

  // Referencias para los modales
  const showRegistrationModal = ref(false);
  const showServiceFormModal = ref(false);
  watch(
    () => showServiceFormModal.value || showRegistrationModal.value,
    (newValue) => {
      document.body.style.overflow = newValue ? "hidden" : "auto";
    },
    { immediate: true }
  );

  const checkRegistration = () => {
    const isRegistered = computed(() => {
      return store.state.isRegistered;
    });

    isRegistered.value
      ? (showServiceFormModal.value = true)
      : (showRegistrationModal.value = true);
  };

  const closeServiceFormModal = () => (showServiceFormModal.value = false);
  const closeRegistrationModal = () => {
    showRegistrationModal.value = false;
  };

  // Función para verificar registro y mostrar modal correspondiente
  /*const checkRegistration = (event) => {
  event.preventDefault();
  // Aquí deberías verificar si el usuario está registrado
  const isRegistered = true; // Simula el estado de autenticación

  if (!isRegistered) {
    showRegistrationModal.value = true; // Muestra el modal de registro
  } else {
    showServiceFormModal.value = true; // Muestra el formulario de servicio
  }
};

// Funciones para cerrar modales


const closeServiceFormModal = () => {
  showServiceFormModal.value = false;
};*/
</script>

<style scoped>
  /*@import '../assets/styles/servicios.css';*/

  .service-card,
  .service-card2 {
    display: flex;
  }
  h2 {
    text-align: center;
    color: #00aa4e;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .service-card,
  .service-card2 {
    justify-content: flex-start;
    gap: 17px;
    background-color: black;
    border-bottom: 2px solid white;
  }
  .service-card,
  .service-card2 {
    padding-right: 10%;
    padding-left: 10%;
  }
  .service-card2 {
    /* padding-left: 20px; */
    background-color: #121212;
  }
  .service-card img,
  .service-card2 img {
    width: 300px;
    height: 300px;
  }
  .text-service {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
  }
  .service-title {
    text-align: center;
    padding-top: 30px;
  }
  .link {
    text-align: center;
  }
  .link a {
    text-decoration: none;
    color: #00aa4e;
  }
  .service-card2 {
    flex-direction: row-reverse;
  }
  .description {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* Estilos del modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
  }

  .modal-content h2 {
    margin-bottom: 10px;
  }

  .modal-content p {
    margin-bottom: 20px;
  }

  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
  }

  .register-link {
    display: inline-block;
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }

  .register-link:hover {
    background-color: #218838;
  }

  /*Section Promo*/
  .promo-section {
    background: url("/images/14232.jpg") no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  .promo-content {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 40px;
    border-radius: 10px;
    max-width: 600px;
  }

  .promo-content h1 {
    /* font-size: 2.5em; */
    margin-bottom: 20px;
  }

  .promo-content p {
    font-size: 1.2em;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .protected-link {
    display: inline-block;
    padding: 15px 30px;
    background-color: #00c853;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .protected-link:hover {
    background-color: #008c42;
  }

  @media (max-width: 768px) {
    .service-card,
    .service-card2 {
      flex-direction: column;
    }
    .service-card img,
    .service-card2 img {
      width: 100%;
      height: auto;
    }
  }
</style>
