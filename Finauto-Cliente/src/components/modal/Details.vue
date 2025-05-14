<template>
  <Transition name="modal-fade">
    <div
      v-if="isVisible"
      class="modal"
      @click.self="closeModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div class="modal-content">
        <span class="close" @click="closeModal" aria-label="Cerrar modal"
          >&times;</span
        >
        <div class="modal-body">
          <div class="car-image-section">
            <!-- Imagen principal -->
            <img
              :src="selectedImage"
              alt="Auto principal"
              class="main-car-image"
              @error="handleImageError"
            />

            <!-- Thumbnails -->
            <div class="thumbnail-images">
              <button
                class="thumbnail-control-prev"
                type="button"
                @click="prevImages"
                :disabled="currentIndex === 0"
                aria-label="Anterior"
              >
                <img src="/icons/mynaui--chevron-left.svg" alt="Anterior" />
              </button>
              <div
                class="thumbnail"
                v-for="(thumbnail, index) in carData.thumbnails.slice(
                  currentIndex,
                  currentIndex + 3
                )"
                :key="index"
                :src="thumbnail"
                :alt="`Vista ${index + 1}`"
                @click="selectedImage = thumbnail"
              >
                <img
                  :src="thumbnail"
                  :alt="`Vista ${index + 1}`"
                  class="thumbnail"
                  :class="{ active: thumbnail === selectedImage }"
                />
              </div>
              <button
                class="thumbnail-control-next"
                type="button"
                @click="nextImages"
                :disabled="currentIndex + 3 >= carData.thumbnails.length"
                aria-label="Siguiente"
              >
                <img src="/icons/mynaui--chevron-right.svg" alt="Siguiente" />
              </button>
            </div>
          </div>

          <div class="car-details-section">
            <h2 id="modal-title">{{ carData.name }}</h2>
            <div class="car-specs">
              <p v-for="(value, key) in carData.specs" :key="key">
                <strong>{{ key }}:</strong> {{ value }}
              </p>
            </div>
            <button
              class="download-btn"
              @click="downloadPDF"
              :disabled="isLoading"
            >
              {{ isLoading ? "Descargando..." : "Descargar Ficha Técnica" }}
              <span v-if="isLoading" class="loader"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, watch } from "vue";

  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false,
    },
    carData: {
      type: Object,
      required: true,
      default: () => ({
        name: "",
        mainImage: "",
        thumbnails: [],
        specs: {},
      }),
    },
  });

  const emit = defineEmits(["close"]);

  const closeModal = () => {
    emit("close");
  };

  const isLoading = ref(false);

  // Imagen seleccionada (inicia con la imagen principal)
  const selectedImage = ref(props.carData.mainImage[0]);

  const currentIndex = ref(0);

  const prevImages = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 3;
    }
  };

  const nextImages = () => {
    if (currentIndex.value + 1 < props.carData.thumbnails.length) {
      currentIndex.value += 1;
    }
  };

  const downloadPDF = async () => {
    try {
      isLoading.value = true;
      await descargarPDF();
    } catch (error) {
      console.error("Error al descargar PDF:", error);
      alert(
        "Error al descargar la ficha técnica. Por favor, intente nuevamente."
      );
    } finally {
      isLoading.value = false;
    }
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape" && props.isVisible) {
      closeModal();
    }
  };

  onMounted(() => {
    document.addEventListener("keydown", handleEscKey);
  });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscKey);
  });

  watch(
    () => props.isVisible,
    (newValue) => {
      if (newValue) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    { immediate: true } // Activa el watcher inmediatamente
  );

  onUnmounted(() => {
    document.body.style.overflow = "auto";
  });
</script>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    padding: 0 10px;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 100%;
    max-width: 800px;
    position: relative;
    cursor: default;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    flex-wrap: wrap;
  }

  .car-image-section {
    flex: 1;
    min-width: 300px;
  }

  .main-car-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    /* border: 2px solid #ddd;
  border-radius: 8px;*/
  }

  .thumbnail-images {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: border 0.3s;
  }

  .thumbnail.active {
    border: 2px solid #007bff;
  }

  .thumbnail:hover {
    border: 1px solid #007bff;
  }

  .car-details-section {
    flex: 1;
    min-width: 300px;
    padding-left: 20px;
  }

  .car-specs {
    margin-bottom: 20px;
  }

  .download-btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .download-btn:hover {
    background-color: #45a049;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
    margin-left: 10px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .thumbnail-control-prev,
  .thumbnail-control-next {
    border: 0;
    background: none;
  }
</style>
