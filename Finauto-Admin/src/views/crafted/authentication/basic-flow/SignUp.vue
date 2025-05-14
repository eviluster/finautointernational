<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Crear una cuenta</h1>
        <!--end::Title-->
      </div>
      <!--end::Heading-->

      <!--begin::Input group: Nombre y Apellido-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6">Nombre</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="name"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="name" />
            </div>
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6">Apellido</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="lastname"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="lastname" />
            </div>
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group: Email-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-gray-900 fs-6"
          >Correo electrónico</label
        >
        <Field
          class="form-control form-control-lg form-control-solid"
          type="email"
          name="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group: Nombre de usuario y Teléfono-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6"
            >Nombre de usuario</label
          >
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="username"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="username" />
            </div>
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bold text-gray-900 fs-6">Teléfono</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="phone"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="phone" />
            </div>
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group: Contraseña-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6"
            >Contraseña</label
          >
          <!--end::Label-->

          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              name="password"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div
            class="d-flex align-items-center mb-3"
            data-kt-password-meter-control="highlight"
          >
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
            ></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">
          Usa 8 o más caracteres con una combinación de letras, números y
          símbolos.
        </div>
        <!--end::Hint-->
      </div>
      <!--end::Input group--->

      <!--begin::Input group: Confirmar contraseña-->
      <div class="fv-row mb-5">
        <label class="form-label fw-bold text-gray-900 fs-6"
          >Confirmar contraseña</label
        >
        <Field
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password_confirmation"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password_confirmation" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group: Descripción-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-gray-900 fs-6">Descripción</label>
        <Field
          as="textarea"
          class="form-control form-control-lg form-control-solid"
          name="description"
          rows="4"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="description" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary"
        >
          <span class="indicator-label">Registrar</span>
          <span class="indicator-progress">
            Por favor espera...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </VForm>

    <!--end::Form-->

    <!--begin::Input group-->
    <div class="fv-row my-10">
      <!--begin::Separator-->
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <span class="fw-semibold text-gray-400 fs-7 mx-2">O</span>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      <!--end::Separator-->

      <!--begin::Link-->
      <div class="text-gray-500 fw-semibold fs-4 text-center">
        ¿Ya tienes una cuenta?
        <router-link to="/sign-in" class="link-primary fw-bold">
          Inicia sesión aquí
        </router-link>
      </div>
      <!--end::Link-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, nextTick, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import { PasswordMeterComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "sign-up",
  components: { Field, VForm, ErrorMessage },
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const submitButton = ref<HTMLButtonElement | null>(null);

    const registration = Yup.object().shape({
      name: Yup.string().required().label("Nombre"),
      lastname: Yup.string().required().label("Apellido"),
      email: Yup.string().min(4).required().email().label("Correo electrónico"),
      username: Yup.string().required().label("Nombre de usuario"),
      phone: Yup.string().required().label("Teléfono"),
      password: Yup.string().required().label("Contraseña"),
      password_confirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
        .label("Confirmar contraseña"),
      description: Yup.string().required().label("Descripción"),
    });

    onMounted(() => {
      nextTick(() => {
        PasswordMeterComponent.bootstrap();
      });
    });

    const onSubmitRegister = async (values: any) => {
      // Omitimos campos no necesarios
      const { password_confirmation, ...payload } = values as User & {
        description: string;
      };

      console.log("Payload de registro:", payload);
      try {
        await store.register(payload);
      } catch (err) {
        console.error("Error al registrar el usuario:", err);
      }

      const error = Object.values(store.errors);
      if (!error.length) {
        Swal.fire({
          text: "¡Te has registrado correctamente!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "¡Entendido!",
          heightAuto: false,
          customClass: { confirmButton: "btn fw-semibold btn-light-primary" },
        }).then(() => router.push({ name: "dashboard" }));
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "¡Intentar de nuevo!",
          heightAuto: false,
          customClass: { confirmButton: "btn fw-semibold btn-light-danger" },
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      submitButton.value!.disabled = false;
    };

    return { registration, onSubmitRegister, submitButton, getAssetPath };
  },
});
</script>
