<template>
  <el-dialog
    v-model="visible"
    width="650px"
    @open="onOpen"
    title="Add a New Event"
  >
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="120px">
      <el-form-item label="Event Name" prop="eventName">
        <el-input v-model="formData.eventName" />
      </el-form-item>

      <el-form-item label="Description">
        <el-input v-model="formData.eventDescription" />
      </el-form-item>

      <el-form-item label="Location">
        <el-input v-model="formData.eventLocation" />
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="formData.allDay">All Day</el-checkbox>
      </el-form-item>

      <el-form-item label="Start Date" prop="eventStartDate">
        <el-date-picker
          v-model="formData.eventStartDate"
          type="date"
          placeholder="Select date"
        />
      </el-form-item>

      <el-form-item label="End Date" prop="eventEndDate">
        <el-date-picker
          v-model="formData.eventEndDate"
          type="date"
          placeholder="Select date"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="close">Cancel</el-button>
      <el-button type="primary" :loading="loading" @click="submit">
        Submit
      </el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
type EventPayload = {
  title: string;
  start: Date;
  end?: Date;
  allDay: boolean;
  description?: string;
  location?: string;
};
export default defineComponent({
  name: "NewEventModal",
  props: {
    visible: { type: Boolean, required: true },
    initialDate: { type: [String, Date] as any, required: true },
  },
  emits: ["update:visible", "save"],
  setup(props, { emit }) {
    const loading = ref(false);
    const formRef = ref();
    const formData = ref({
      eventName: "",
      eventDescription: "",
      eventLocation: "",
      allDay: true,
      eventStartDate: new Date(),
      eventEndDate: new Date(),
    });
    const rules = {
      eventName: [
        { required: true, message: "Please input event name", trigger: "blur" },
      ],
      eventStartDate: [
        {
          required: true,
          message: "Please select start date",
          trigger: "change",
        },
      ],
      eventEndDate: [
        {
          required: true,
          message: "Please select end date",
          trigger: "change",
        },
      ],
    };

    function onOpen() {
      const date =
        typeof props.initialDate === "string"
          ? new Date(props.initialDate)
          : props.initialDate;
      formData.value = {
        eventName: "",
        eventDescription: "",
        eventLocation: "",
        allDay: true,
        eventStartDate: date,
        eventEndDate: date,
      };
    }

    function close() {
      emit("update:visible", false);
    }

    function submit() {
      formRef.value.validate((valid: boolean) => {
        if (!valid) return;
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          const payload: EventPayload = {
            title: formData.value.eventName,
            start: formData.value.eventStartDate,
            end: formData.value.eventEndDate,
            allDay: formData.value.allDay,
            description: formData.value.eventDescription,
            location: formData.value.eventLocation,
          };
          emit("save", payload);
          emit("update:visible", false);
        }, 500);
      });
    }

    return {
      formRef,
      loading,
      formData,
      rules,
      onOpen,
      close,
      submit,
    };
  },
});
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
