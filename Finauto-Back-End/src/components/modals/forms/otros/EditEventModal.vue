<template>
  <div
    class="modal fade"
    id="kt_modal_edit_event"
    ref="modalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <el-form
          id="kt_modal_edit_event_form"
          @submit.prevent="submit"
          :model="formData"
          :rules="rules"
          ref="formRef"
          class="form fv-plugins-bootstrap5 fv-plugins-framework"
        >
          <div class="modal-header">
            <h2 class="fw-bold">Edit Event</h2>
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

            <!-- Full Day -->
            <div class="fv-row mb-9">
              <label class="form-check form-check-custom form-check-solid">
                <el-checkbox v-model="formData.fullDay" />
                <span class="form-check-label fw-semibold">All Day</span>
              </label>
            </div>

            <!-- Hora de Inicio -->
            <div v-if="!formData.fullDay" class="fv-row mb-9">
              <label class="fs-6 fw-semibold mb-2 required"
                >Hora de Inicio</label
              >
              <el-form-item prop="startTime">
                <el-time-picker
                  v-model="formData.startTime"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="Selecciona hora"
                  :picker-options="{ step: '00:05' }"
                />
              </el-form-item>
            </div>

            <!-- Hora de Fin -->
            <div v-if="!formData.fullDay" class="fv-row mb-9">
              <label class="fs-6 fw-semibold mb-2">Hora de Fin</label>
              <el-form-item prop="endTime">
                <el-time-picker
                  v-model="formData.endTime"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="Selecciona hora"
                  :picker-options="{ step: '00:05' }"
                />
              </el-form-item>
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
              <span v-if="!loading">Save Changes</span>
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
import { Modal } from "bootstrap";
import { hideModal } from "@/core/helpers/modal";
import { CalendarStateEnum } from "@/core/enums/CalendarStateEnum";

interface EditEventData {
  id: string;
  fecha: Date;
  inicio: number;
  fin?: number;
  startTime: string;
  endTime?: string;
  fullDay: boolean;
  state: CalendarStateEnum;
}

export default defineComponent({
  name: "EditEventModal",
  props: {
    visible: { type: Boolean, required: true },
    event: { type: Object as () => any, required: true },
  },
  emits: ["update:visible", "update-event"],
  setup(props, { emit }) {
    const modalRef = ref<HTMLElement | null>(null);
    const formRef = ref<any>(null);
    const loading = ref(false);
    const formData = ref<EditEventData>({
      id: "",
      fecha: new Date(),
      inicio: 0,
      fin: undefined,
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
      startTime: [
        { required: true, message: "Inicio es obligatorio", trigger: "change" },
      ],
      state: [
        { required: true, message: "State es obligatorio", trigger: "change" },
      ],
    };

    let bsModal: Modal;
    watch(
      () => props.visible,
      (val) => {
        if (val) {
          bsModal = new Modal(modalRef.value!);
          bsModal.show();
        } else {
          bsModal.hide();
        }
      },
    );

    watch(
      () => props.event,
      (evt) => {
        // Convert numeric to HH:mm strings
        const [h1, m1] = [
          Math.floor(evt.inicio),
          Math.round((evt.inicio - Math.floor(evt.inicio)) * 60),
        ];
        const startTime = `${String(h1).padStart(2, "0")}:${String(m1).padStart(2, "0")}`;
        let endTime: string | undefined;
        if (evt.fin != null) {
          const [h2, m2] = [
            Math.floor(evt.fin),
            Math.round((evt.fin - Math.floor(evt.fin)) * 60),
          ];
          endTime = `${String(h2).padStart(2, "0")}:${String(m2).padStart(2, "0")}`;
        }
        formData.value = {
          id: evt.id,
          fecha: evt.fecha,
          inicio: evt.inicio,
          fin: evt.fin,
          startTime,
          endTime,
          fullDay: evt.fullDay,
          state: evt.state,
        };
      },
      { immediate: true },
    );

    function close() {
      emit("update:visible", false);
      hideModal(modalRef.value!);
    }

    function submit() {
      formRef.value.validate((valid: boolean) => {
        if (!valid) return;
        loading.value = true;

        // Convert startTime and endTime back to numeric
        const [sh, sm] = formData.value.startTime.split(":").map(Number);
        const inicio = sh + sm / 60;
        let fin: number | undefined;
        if (formData.value.endTime) {
          const [eh, em] = formData.value.endTime.split(":").map(Number);
          fin = eh + em / 60;
        }

        setTimeout(() => {
          loading.value = false;
          emit("update-event", {
            id: formData.value.id,
            fecha: formData.value.fecha,
            inicio,
            fin,
            fullDay: formData.value.fullDay,
            state: formData.value.state,
          });
          emit("update:visible", false);
          hideModal(modalRef.value!);
        }, 500);
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
.el-input-number,
.el-time-picker {
  width: 100%;
}
</style>
