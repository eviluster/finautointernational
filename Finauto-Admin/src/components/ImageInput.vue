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
      <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>
  
  <script lang="ts">
 import { defineComponent, ref, nextTick, watch } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "ImageInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // Registrar el campo 'image' en el formulario
    const { value: imageField, errorMessage, setValue } = useField<string>("image");

    // Usamos un valor local para la vista previa
    const imagePreview = ref<string>(props.modelValue);
    const previousImage = ref<string>("");
    const imageInput = ref<HTMLInputElement | null>(null);

    // Actualiza la vista previa y el valor del campo si cambia la prop
    watch(
      () => props.modelValue,
      (newValue) => {
        imagePreview.value = newValue;
        setValue(newValue);
      }
    );

    const triggerFileInput = () => {
      nextTick(() => {
        imageInput.value?.click();
      });
    };

    const handleImageUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        previousImage.value = imagePreview.value;
        const url = URL.createObjectURL(file);
        imagePreview.value = url;
        emit("update:modelValue", url);
        setValue(url);
      }
    };

    const handleImageDrop = (event: DragEvent) => {
      event.preventDefault();
      const file = event.dataTransfer?.files[0];
      if (file) {
        previousImage.value = imagePreview.value;
        const url = URL.createObjectURL(file);
        imagePreview.value = url;
        emit("update:modelValue", url);
        setValue(url);
      }
    };

    const restorePreviousImage = () => {
      imagePreview.value = previousImage.value;
      emit("update:modelValue", previousImage.value);
      setValue(previousImage.value);
    };

    const removeImage = () => {
      previousImage.value = imagePreview.value;
      imagePreview.value = "";
      emit("update:modelValue", "");
      setValue("");
    };

    return {
      imagePreview,
      imageInput,
      triggerFileInput,
      handleImageUpload,
      handleImageDrop,
      restorePreviousImage,
      removeImage,
      errorMessage,
      imageField
    }
  }
})

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

