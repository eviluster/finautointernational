<template>
  <div class="card card-flush py-4">
    <div class="card-header">
      <div class="card-title text-center w-100">
        <h2 class="w-100">Imagen principal</h2>
      </div>
    </div>
    <div class="card-body text-center pt-0">
      <div class="d-flex justify-content-center mb-3">
        <div
          class="image-input position-relative"
          @click="triggerFileInput"
          @dragover.prevent
          @dragenter.prevent
          @drop="handleImageDrop"
        >
          <div
            v-if="imageUrl"
            class="image-input-wrapper w-150px h-150px"
            :style="`background-image: url(${imageUrl})`"
          ></div>
          <div
            v-else
            class="image-input-wrapper w-150px h-150px d-flex justify-content-center align-items-center"
          >
            <i class="bi bi-plus-lg fs-2 text-muted"></i>
          </div>
          <span v-if="imageUrl" class="btn-delete" @click.stop="removeImage">
            <i class="bi bi-trash text-white"></i>
          </span>
        </div>
      </div>

      <input
        type="file"
        class="hidden-input"
        accept="image/png, image/jpg, image/jpeg"
        @change="handleImageUpload"
        ref="imageInput"
      />

      <div class="text-muted fs-7">
        Selecciona una imagen. Solo formatos: PNG, JPG y JPEG.
      </div>

      <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, watch } from "vue";
import { useField } from "vee-validate";
import type { PropType } from "vue";

export default defineComponent({
  name: "SingleImageInput",
  props: {
    modelValue: {
      type: String as PropType<string | null>,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { errorMessage, setValue } = useField<string>("image");
    const imageInput = ref<HTMLInputElement | null>(null);
    const imageUrl = ref<string | null>(null);

    // Inicializar con el valor actual
    watch(
      () => props.modelValue,
      (url) => {
        imageUrl.value = url;
        setValue(url || "");
      },
      { immediate: true },
    );

    const triggerFileInput = () => {
      nextTick(() => imageInput.value?.click());
    };

    const handleImageUpload = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        readFileAsDataURL(file);
      }
      (e.target as HTMLInputElement).value = "";
    };

    const handleImageDrop = (e: DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file) {
        readFileAsDataURL(file);
      }
    };

    const readFileAsDataURL = (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        emit("update:modelValue", result);
        setValue(result);
      };
      reader.readAsDataURL(file);
    };

    const removeImage = () => {
      emit("update:modelValue", null);
      setValue("");
    };

    return {
      imageInput,
      imageUrl,
      errorMessage,
      triggerFileInput,
      handleImageUpload,
      handleImageDrop,
      removeImage,
    };
  },
});
</script>

<style scoped>
.image-input {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  border: 2px dashed #ccc;
  cursor: pointer;
  transition: 0.3s;
}
.image-input:hover {
  border-color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}
.image-input-wrapper {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-color: #f8f9fa;
}
.hidden-input {
  display: none;
}
.btn-delete {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.btn-delete:hover {
  background: #bd2130;
}
</style>
