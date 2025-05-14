<template>
  <div v-if="showServiceFormModal" class="modal-promo">
    <section class="service-form-section">
      <div class="form-container">
        <!-- <h1 class="mt-3 mb-1">Solicita tu Servicio</h1> -->
        <span class="close" @click="closeModal" aria-label="Cerrar modal"
          >&times;</span
        >

        <nav>
          <div class="nav nav-tabs custom" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Información principal
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Fecha y hora de solicitud
            </button>
          </div>
        </nav>

        <!-- FORM con vee-validate -->
        <Form
          :validation-schema="schema"
          @submit="onSubmit"
          class="service-form"
        >
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <p class="text-center mt-4 mb-3">
                Por favor, completa el formulario para agendar tu servicio en
                nuestra agencia.
              </p>
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
              <label for="service">Servicio a reservar:</label>
              <Field id="service" name="service" as="select">
                <option value="" disabled>Selecciona un servicio</option>
                <!-- Opción dinámica, solo si hay servicios -->
                <option
                  v-for="item in servicios"
                  :key="item.id"
                  :value="item.id"
                >
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
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <p class="text-center mt-4 mb-3">
                Por favor, completa el formulario para agendar tu servicio en
                nuestra agencia.
              </p>
              <div>
                <calendar2></calendar2>
              </div>

              <button type="submit" class="submit-btn">Enviar Solicitud</button>
            </div>
          </div>
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
  import calendar2 from "../../calendar2.vue";

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
    const profileTab = document.getElementById("nav-profile-tab");
    if (profileTab) {
      profileTab.addEventListener("shown.bs.tab", () => {
        // Disparamos un resize global para que FullCalendar recalcule
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 0);
      });
    }
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
  .custom {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .nav-link {
    font-size: 20px;
  }

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
    min-width: 500px;
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
