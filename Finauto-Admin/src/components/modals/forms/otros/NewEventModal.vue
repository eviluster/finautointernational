<template>
  <div
    class="modal fade"
    id="kt_modal_add_event"
    ref="modalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <el-form
          id="kt_modal_add_event_form"
          @submit.prevent="submit"
          :model="formData"
          :rules="rules"
          ref="formRef"
          class="form fv-plugins-bootstrap5 fv-plugins-framework"
        >
          <div class="modal-header">
            <h2 class="fw-bold">Add a New Event</h2>
            <div
              class="btn btn-icon btn-sm btn-active-icon-primary"
              @click="close"
            >
              <KTIcon icon-name="cross" icon-class="fs-1" />
            </div>
          </div>

          <div class="modal-body py-10 px-lg-17">
            <!-- Fecha -->
            <div class="fv-row mb-9">
              <label class="fs-6 fw-semibold mb-2 required">Fecha</label>
              <el-form-item prop="fecha">
                <el-date-picker
                  v-model="formData.fecha"
                  type="date"
                  placeholder="Selecciona fecha"
                />
              </el-form-item>
            </div>

            <div v-if="!formData.fullDay">
              <!-- Hora de Inicio -->
              <el-form-item label="Hora de Inicio" prop="startTime">
                <el-time-picker
                  v-model="formData.startTime"
                  placeholder="Selecciona hora"
                  format="HH:mm"
                  value-format="HH:mm"
                  :picker-options="{ step: '00:05' }"
                />
              </el-form-item>

              <!-- Hora de Fin -->
              <el-form-item label="Hora de Fin" prop="endTime">
                <el-time-picker
                  v-model="formData.endTime"
                  placeholder="Selecciona hora"
                  format="HH:mm"
                  value-format="HH:mm"
                  :picker-options="{ step: '00:05' }"
                />
              </el-form-item>
            </div>

            <!-- Full Day -->
            <div class="fv-row mb-9">
              <label class="form-check form-check-custom form-check-solid">
                <el-checkbox v-model="formData.fullDay" />
                <span class="form-check-label fw-semibold">All Day</span>
              </label>
            </div>

            <!-- State -->
            <div class="fv-row mb-9">
              <label class="fs-6 fw-semibold mb-2 required">State</label>
              <el-form-item prop="state">
                <el-select v-model="formData.state" placeholder="Select state">
                  <el-option
                    v-for="opt in stateOptions"
                    :key="opt"
                    :label="opt"
                    :value="opt"
                  />
                </el-select>
              </el-form-item>
            </div>
          </div>

          <div class="modal-footer flex-center">
            <button type="button" class="btn btn-light me-3" @click="close">
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-lg btn-primary"
              :data-kt-indicator="loading ? 'on' : null"
            >
              <span v-if="!loading">Create Event</span>
              <span v-else class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
//import { Modal } from "bootstrap";
import Swal from "sweetalert2";
import { CalendarStateEnum } from "@/core/enums/CalendarStateEnum";
import { hideModal } from "@/core/helpers/modal";

interface NewEventData {
  fecha: Date;
  startTime: string; // "HH:mm"
  endTime?: string; // "HH:mm"
  fullDay: boolean;
  state: CalendarStateEnum;
}

export default defineComponent({
  name: "NewEventModal",
  emits: ["save"],
  setup(_, { emit }) {
    const modalRef = ref<HTMLElement | null>(null);
    const formRef = ref<any>(null);
    const loading = ref(false);
    const formData = ref<NewEventData>({
      fecha: new Date(),
      startTime: "00:00",
      endTime: undefined,
      fullDay: false,
      state: CalendarStateEnum.Pending,
    });

    const stateOptions = Object.values(CalendarStateEnum);

    const rules = {
      fecha: [
        { required: true, message: "Fecha es obligatoria", trigger: "change" },
      ],
      inicio: [
        { required: true, message: "Inicio es obligatorio", trigger: "change" },
      ],
      state: [
        { required: true, message: "State es obligatorio", trigger: "change" },
      ],
    };

    //let bsModal: Modal;
    watch(modalRef, () => {}, { immediate: true });

    watch(
      () => formData.value,
      () => {},
      { deep: true },
    );

    // Show/Hide manually via bootstrap API
    function close() {
      hideModal(modalRef.value!);
    }

    function submit() {
      formRef.value.validate((valid: boolean) => {
        if (!valid) return;
        loading.value = true;

        // Parseamos los HH:mm a números
        const [h1, m1] = formData.value.startTime.split(":").map(Number);
        const [h2, m2] = (formData.value.endTime || formData.value.startTime)
          .split(":")
          .map(Number);

        const payload = {
          fecha: formData.value.fecha,
          inicio: h1 + m1 / 60, // podrías también usar minutero separado
          fin: h2 + m2 / 60,
          fullDay: formData.value.fullDay,
          state: formData.value.state,
        };

        setTimeout(() => {
          loading.value = false;
          emit("save", payload);
        }, 300);
      });
    }

    return {
      modalRef,
      formRef,
      loading,
      formData,
      rules,
      stateOptions,
      close,
      submit,
    };
  },
});
</script>

<style scoped>
.el-date-editor,
.el-input-number {
  width: 100%;
}
</style>
