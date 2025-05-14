<template>
  <div v-if="showServiceFormModal" class="modal-promo">
    <section class="service-form-section">
      <div class="form-container">
        <span class="close" @click="closeModal" aria-label="Cerrar modal"
          >&times;</span
        >
        <h1>Solicita tu Servicio</h1>
        <p>
          Por favor, completa el formulario para agendar tu servicio en nuestra
          agencia.
        </p>

        <!-- FORM con vee-validate -->
        <Form
          :validation-schema="schema"
          @submit="onSubmit"
          class="service-form"
        >
          <label for="name">Nombre completo:</label>
          <Field
            id="name"
            name="name"
            as="input"
            placeholder="Ingresa tu nombre"
          />
          <ErrorMessage name="name" class="error" />

          <label for="email">Correo electrónico:</label>
          <Field
            id="email"
            name="email"
            as="input"
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <ErrorMessage name="email" class="error" />

          <label for="phone">Número de teléfono:</label>
          <Field
            id="phone"
            name="phone"
            as="input"
            type="tel"
            placeholder="Ingresa tu número de teléfono"
          />
          <ErrorMessage name="phone" class="error" />

          <label for="service">Tipo de servicio:</label>
          <Field id="service" name="service" as="select">
            <option value="" disabled>Selecciona un servicio</option>
            <!-- Opción dinámica, solo si hay servicios -->
            <option v-for="item in servicios" :key="item.id" :value="item.id">
              {{ item.name.es }}
            </option>
          </Field>
          <ErrorMessage name="service" class="error" />

          <label for="comments">Comentarios adicionales:</label>
          <Field
            id="comments"
            name="comments"
            as="textarea"
            rows="4"
            placeholder="Escribe cualquier comentario adicional..."
          />
          <ErrorMessage name="comments" class="error" />

          <button type="submit" class="submit-btn">Enviar Solicitud</button>
        </Form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, defineEmits, defineProps, onMounted } from "vue";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import api from "../../services/api";

  const props = defineProps({
    showServiceFormModal: {
      type: Boolean,
      required: true,
    },
  });
  const emit = defineEmits(["close", "submit"]);
  interface Servicio {
    id: string;
    name: {
      es: string;
      en: string;
    };
    description: {
      es: string;
      en: string;
    };
    galery: string[];
  }
  const servicios = ref<Servicio[]>([]);

  onMounted(async () => {
    fetchServicios();
  });

  const fetchServicios = async () => {
    try {
      const { data } = await api.get("/servicio/all");
      servicios.value = data.data;
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
    }
  };

  // Esquema de validación con Yup
  const schema = yup.object({
    name: yup
      .string()
      .required("El nombre es obligatorio")
      .min(3, "Mínimo 3 caracteres"),
    email: yup
      .string()
      .required("El correo es obligatorio")
      .email("Formato de correo inválido"),
    phone: yup
      .string()
      .required("El teléfono es obligatorio")
      .matches(/^[0-9]{7,15}$/, "Solo dígitos (7–15 caracteres)"),
    service: yup.string().required("Debe seleccionar un servicio"),
    date: yup
      .date()
      .required("La fecha es obligatoria")
      .typeError("Fecha inválida"),
    comments: yup.string().max(500, "Máximo 500 caracteres").nullable(),
  });

  // Bloquear/desbloquear scroll al abrir/cerrar modal
  watch(
    () => props.showServiceFormModal,
    (nuevo) => {
      document.body.style.overflow = nuevo ? "hidden" : "auto";
    },
    { immediate: true }
  );

  // Cierra el modal
  function closeModal() {
    emit("close");
  }

  // Al enviar el Form, vee-validate pasa los valores ya validados
  function onSubmit(values) {
    emit("submit", values);
    closeModal();
  }
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
    max-width: 600px;
    width: 100%;

    position: relative;
  }

  .close {
    color: #aaa;
    cursor: pointer;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    right: 15px;
    top: 10px;
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
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error {
    color: #e53935;
    font-size: 0.875em;
    margin-bottom: 10px;
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
    margin-top: 10px;
  }

  .submit-btn:hover {
    background-color: #008c42;
  }
</style>
