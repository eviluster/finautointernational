<template>
    <div v-if="showServiceFormModal" class="modal-promo">
      <section class="service-form-section">
        <div class="form-container">
          <span class="close" @click="closeModal" aria-label="Cerrar modal">&times;</span>
          <h1>Solicita tu Servicio</h1>
          <p>Por favor, completa el formulario para agendar tu servicio en nuestra agencia.</p>
          
          <form @submit.prevent="handleSubmit" class="service-form">
            <label for="name">Nombre completo:</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              placeholder="Ingresa tu nombre" 
              required 
            />
  
            <label for="email">Correo electrónico:</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              placeholder="Ingresa tu correo electrónico" 
              required 
            />
  
            <label for="phone">Número de teléfono:</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              placeholder="Ingresa tu número de teléfono" 
              required 
            />
  
            <label for="service">Tipo de servicio:</label>
            <select id="service" v-model="formData.service" required>
              <option value="" disabled>Selecciona un servicio</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="pintura">Pintura</option>
              <option value="reparaciones">Reparaciones</option>
              <option value="diagnostico">Diagnóstico</option>
            </select>
  
            <label for="date">Fecha de solicitud:</label>
            <input 
              type="date" 
              id="date" 
              v-model="formData.date" 
              required 
            />
  
            <label for="comments">Comentarios adicionales:</label>
            <textarea 
              id="comments" 
              v-model="formData.comments" 
              rows="4" 
              placeholder="Escribe cualquier comentario adicional..."
            ></textarea>
  
            <button type="submit" class="submit-btn">Enviar Solicitud</button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
import { ref, watch } from "vue";

export default {
  props: {
    showServiceFormModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close", "submit"],
  setup(props, { emit }) {
    console.log("Valor inicial de showServiceFormModal:", props.showServiceFormModal);

    // Datos del formulario
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      comments: "",
    });

    // Watch para bloquear/desbloquear scroll
    watch(
      () => props.showServiceFormModal,
      (newValue) => {
        document.body.style.overflow = newValue ? "hidden" : "auto";
      },
      { immediate: true }
    );

    // Cerrar modal
    const closeModal = () => {
      emit("close");
    };

    // Enviar datos del formulario
    const handleSubmit = () => {
      emit("submit", formData.value);
      closeModal();
    };

    return {
      formData,
      closeModal,
      handleSubmit,
    };
  },
};
</script>

  
  <style scoped>
  .modal-promo {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
  
  .service-form-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .form-container {
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    margin-top:10%;
  }
  
  .close {
    color: #aaa;
    /*position: absolute;
    right: 15px;
    top: 10px;*/
    cursor: pointer;
    font-size: 28px;
    font-weight: bold;
    float:right;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }
  
  p {
    font-size: 1em;
    margin-bottom: 20px;
    color: #666;
  }
  
  .service-form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .service-form input,
  .service-form select,
  .service-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .submit-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #00c853;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #008c42;
  }
  </style>
  