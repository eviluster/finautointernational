<template>
  <!--begin baner new-->
  <!-- Flecha izquierda -->
  <button class="carousel-control-prev" @click="prevSlide">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <div
    id="kt_carousel_2_carousel"
    class="carousel carousel-custom slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <!--begin::Heading-->
    <div class="d-flex align-items-center justify-content-between flex-wrap">
      <!--begin::Label-->
      <span class="fs-4 fw-bold pe-2"></span>
      <!--end::Label-->
    </div>
    <!--end::Heading-->

    <!--begin::Carousel-->
    <div class="carousel-inner pt-8">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-item"
        :class="{ active: index === currentSlide }"
      >
        <div class="filtro"></div>
        <img :src="slide.image" class="d-block w-100" alt="Slide image" />
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ slide.caption }}</h1>
          <p>{{ slide.subCaption }}</p>
        </div>
      </div>
    </div>
    <!--end::Carousel-->
  </div>
  <!-- Flecha derecha -->
  <button class="carousel-control-next" @click="nextSlide">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <!--end baner new-->
</template>

<!--<script setup>
// Importamos ref de Vue para manejar el estado reactivo
//import { ref } from 'vue'

</script>-->
<script lang="ts">
  import { defineComponent, ref } from "vue";
  interface Slide {
    id: number;
    image: string;
    caption: string;
    subCaption: string;
  }
  export default defineComponent({
    name: "Slider",
    components: {},
    setup() {
      const slides = ref<Slide[]>([
        {
          id: 1,
          image: "https://picsum.photos/800/400?random=1",
          caption: "Primer slide",
          subCaption:
            "Some representative placeholder content for the first slide.",
        },
        {
          id: 2,
          image: "https://picsum.photos/800/400?random=2",
          caption: "Segundo slide",
          subCaption:
            "Some representative placeholder content for the first slide.",
        },
        {
          id: 3,
          image: "https://picsum.photos/800/400?random=3",
          caption: "Tercero slide",
          subCaption:
            "Some representative placeholder content for the first slide.",
        },
        {
          id: 4,
          image: "https://picsum.photos/800/400?random=4",
          caption: "Cuarto slide",
          subCaption:
            "Some representative placeholder content for the first slide.",
        },
      ]);

      const currentSlide = ref(0);

      const prevSlide = () => {
        currentSlide.value =
          (currentSlide.value - 1 + slides.value.length) % slides.value.length;
      };

      const nextSlide = () => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
      };

      return {
        slides,
        currentSlide,
        prevSlide,
        nextSlide,
      };
    },
  });
</script>

<style scoped>
  .carousel-control-next,
  .carousel-control-prev {
    top: 30% !important;
    margin-left: 0;
    justify-content: space-around;
    height: 50px;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 3rem !important;
  }
</style>
