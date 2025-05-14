<template>
  <div class="card card-flush py-4">
    <div class="card-header">
      <div class="card-title">
        <h2>Thumbnail</h2>
      </div>
    </div>
    <div class="card-body text-center pt-0">
      <div
        class="image-input image-input-outline mb-3"
        :class="{ 'image-input-empty': !imagePreview }"
        @dragover.prevent
        @dragenter.prevent
        @drop="handleImageDrop"
      >
        <div
          class="image-input-wrapper w-150px h-150px"
          :style="imagePreview ? `background-image: url(${imagePreview})` : ''"
        ></div>
        <!-- Botón para seleccionar archivo -->
        <label class="btn-change" @click="triggerFileInput">
          <i class="bi bi-pencil text-white"></i>
        </label>
        <!-- Input oculto para cargar imagen -->
        <input
          type="file"
          class="hidden-input"
          accept="image/png, image/jpg, image/jpeg"
          @change="handleImageUpload"
          ref="imageInput"
        />
        <!-- Botón para cancelar selección -->
        <span class="btn-cancel" @click="restorePreviousImage">
          <i class="bi bi-x text-white"></i>
        </span>
        <!-- Botón para eliminar imagen -->
        <span class="btn-delete" @click="removeImage">
          <i class="bi bi-trash text-white"></i>
        </span>
      </div>

      <div class="text-muted fs-7">
        Selecciona una imagen. Solo formatos: PNG, JPG y JPEG.
      </div>

      <!-- Muestra error de validación si existe -->
      <div v-if="error" class="text-danger mt-2">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, watch } from "vue";

export default defineComponent({
  name: "ImageInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // Vista previa y backup
    const imagePreview = ref<string>(props.modelValue);
    const previousImage = ref<string>(props.modelValue);
    const imageInput = ref<HTMLInputElement | null>(null);

    // Sincronizar prop → preview
    watch(
      () => props.modelValue,
      (newVal) => {
        imagePreview.value = newVal;
        previousImage.value = newVal;
      },
    );

    const triggerFileInput = () => {
      nextTick(() => imageInput.value?.click());
    };

    const handleImageUpload = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      previousImage.value = imagePreview.value;
      const url = URL.createObjectURL(file);
      imagePreview.value = url;
      emit("update:modelValue", url);
    };

    const handleImageDrop = (e: DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer?.files[0];
      if (!file) return;
      previousImage.value = imagePreview.value;
      const url = URL.createObjectURL(file);
      imagePreview.value = url;
      emit("update:modelValue", url);
    };

    const restorePreviousImage = () => {
      imagePreview.value = previousImage.value;
      emit("update:modelValue", previousImage.value);
    };

    const removeImage = () => {
      previousImage.value = imagePreview.value;
      imagePreview.value = "";
      emit("update:modelValue", "");
    };

    return {
      imagePreview,
      imageInput,
      triggerFileInput,
      handleImageUpload,
      handleImageDrop,
      restorePreviousImage,
      removeImage,
    };
  },
});
</script>

<style scoped>
/* 🎨 Contenedor general del input */
.image-input {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  border: 2px dashed #ccc;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.image-input:hover {
  border-color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}

/* 📷 Estilos para la imagen */
.image-input-wrapper {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  background-color: #f8f9fa;
}
.image-input-empty .image-input-wrapper {
  background-image: url("/media/svg/files/blank-image.svg") !important;
}

/* ✅ Input oculto */
.hidden-input {
  display: none;
}

/* 🔵 Botón para cambiar imagen */
.btn-change {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #007bff;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-change:hover {
  background: #0056b3;
}

/* 🟠 Botón para cancelar selección */
.btn-cancel {
  position: absolute;
  top: -10px;
  left: -10px;
  background: #ffc107;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-cancel:hover {
  background: #e0a800;
}

/* 🔴 Botón para eliminar imagen */
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
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-delete:hover {
  background: #bd2130;
}
</style>
