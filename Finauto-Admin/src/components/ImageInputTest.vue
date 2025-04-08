<!-- <template>
  <div class="card card-flush py-4">
    <div class="card-header">
      <div class="card-title">
        <h2>Imagen</h2>
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

        <label class="btn-change" @click="triggerFileInput">
          <i class="bi bi-pencil text-white"></i>
        </label>

        <input
          type="file"
          class="hidden-input"
          accept="image/png, image/jpg, image/jpeg"
          @change="handleImageUpload"
          ref="imageInput"
        />

        <span class="btn-delete" @click="removeImage">
          <i class="bi bi-trash text-white"></i>
        </span>
      </div>

      <div class="text-muted fs-7">
        Selecciona una imagen. Solo formatos: PNG, JPG y JPEG.
      </div>

      <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, watch } from "vue";

export default defineComponent({
  name: "ImageInput",
  props: {
    modelValue: File,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const imagePreview = ref<string>("");
    const imageInput = ref<HTMLInputElement | null>(null);

    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue) {
          imagePreview.value = URL.createObjectURL(newValue);
        } else {
          imagePreview.value = "";
        }
      },
    );

    const triggerFileInput = () => {
      nextTick(() => {
        imageInput.value?.click();
      });
    };

    const handleImageUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      console.log(file);

      if (file) {
        imagePreview.value = URL.createObjectURL(file);
        console.log(imagePreview.value);

        emit("update:modelValue", file);
      }
    };

    const handleImageDrop = (event: DragEvent) => {
      event.preventDefault();
      const file = event.dataTransfer?.files[0];
      if (file) {
        imagePreview.value = URL.createObjectURL(file);
        emit("update:modelValue", file);
      }
    };

    const removeImage = () => {
      imagePreview.value = "";
      emit("update:modelValue", null);
    };

    return {
      imagePreview,
      imageInput,
      triggerFileInput,
      handleImageUpload,
      handleImageDrop,
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
</style> -->

<template>
  <div class="card card-flush py-4">
    <div class="card-header">
      <div class="card-title"><h2>Imágenes</h2></div>
    </div>
    <div class="card-body text-center pt-0">
      <div class="d-flex flex-wrap gap-3 mb-3">
        <div
          v-for="(url, idx) in imageUrls"
          :key="idx"
          class="image-input position-relative"
        >
          <div
            class="image-input-wrapper w-150px h-150px"
            :style="`background-image: url(${url})`"
          ></div>
          <span class="btn-delete" @click="removeImage(idx)">
            <i class="bi bi-trash text-white"></i>
          </span>
        </div>

        <!-- Botón para añadir más imágenes -->
        <div
          v-if="!isLimitReached"
          class="image-input position-relative"
          @click="triggerFileInput"
          @dragover.prevent
          @dragenter.prevent
          @drop="handleImageDrop"
        >
          <div
            class="image-input-wrapper w-150px h-150px d-flex justify-content-center align-items-center"
          >
            <i class="bi bi-plus-lg fs-2 text-muted"></i>
          </div>
        </div>
      </div>

      <input
        type="file"
        class="hidden-input"
        accept="image/png, image/jpg, image/jpeg"
        multiple
        @change="handleImageUpload"
        ref="imageInput"
      />

      <div class="text-muted fs-7">
        Selecciona imágenes. Solo formatos: PNG, JPG y JPEG.
      </div>

      <div v-if="isLimitReached" class="text-warning mt-2">
        Has alcanzado el número máximo de imágenes permitidas ({{ maxImages }}).
      </div>

      <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, watch, computed } from "vue";
import type { PropType } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "ImageInput",
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { errorMessage, setValue } = useField<string[]>("image");
    const imageInput = ref<HTMLInputElement | null>(null);
    const imageUrls = ref<string[]>([]);
    const maxImages = 5;

    // Actualiza las imágenes cuando cambia el modelValue
    watch(
      () => props.modelValue,
      (urls) => {
        imageUrls.value = urls;
        setValue(urls);
      },
      { immediate: true },
    );

    const isLimitReached = computed(() => imageUrls.value.length >= maxImages);

    const triggerFileInput = () => {
      nextTick(() => imageInput.value?.click());
    };

    const handleImageUpload = (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length) {
        const fileArray = Array.from(files);
        readFilesAsDataURLs(fileArray);
      }
      (e.target as HTMLInputElement).value = "";
    };

    const handleImageDrop = (e: DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer?.files;
      if (files && files.length) {
        readFilesAsDataURLs(Array.from(files));
      }
    };

    const readFilesAsDataURLs = async (files: File[]) => {
      const remainingSlots = maxImages - props.modelValue.length;
      const limitedFiles = files.slice(0, remainingSlots);

      const newUrls = await Promise.all(
        limitedFiles.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }),
      );

      const combined = [...props.modelValue, ...newUrls];
      emit("update:modelValue", combined);
      setValue(combined);
    };

    const removeImage = (index: number) => {
      const updated = props.modelValue.filter((_, i) => i !== index);
      emit("update:modelValue", updated);
      setValue(updated);
    };

    return {
      imageUrls,
      imageInput,
      triggerFileInput,
      handleImageUpload,
      handleImageDrop,
      removeImage,
      errorMessage,
      maxImages,
      isLimitReached,
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
