<template>
  <div class="car-list">
    <!-- Tus cards de autos -->
    <div class="car-card" @click="showCarDetails">
      <!-- Contenido de la card -->
    </div>

    <!-- Modal de detalles -->
    <CarDetails 
      :is-visible="isModalVisible"
      :car-data="selectedCarData"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarDetails from './modal/Details.vue'

const isModalVisible = ref(false)
const selectedCarData = ref({
  name: 'Nombre del Auto',
  mainImage: 'images/kia-carnival-2022-300x169.png',
  thumbnails: [
    'images/kia-carnival-2022-300x169.png',
    'images/kia-carnival-2022-300x169.png',
    'images/kia-carnival-2022-300x169.png'
  ],
  specs: {
    'Motor': '2.0L Turbo',
    'Potencia': '250 HP',
    'Transmisión': 'Automática 8 velocidades',
  }
})

const showCarDetails = () => {
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}
</script> 