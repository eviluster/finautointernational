<template>
  <ProductContainer />
  <AboutUs />
  <OurServices />
  <OfertSlide />
  <PartnerSection />
</template>

<script setup>
// Importamos ref de Vue para manejar el estado reactivo
import { ref } from "vue";
import AboutUs from '../components/AboutUs.vue'
import OurServices from "../components/OurServices.vue";
import OfertSlide from "../components/OfertSlide.vue";
import PartnerSection from "../components/PartnerSection.vue";
import ProductContainer from "../components/ProductContainer.vue";

</script>
