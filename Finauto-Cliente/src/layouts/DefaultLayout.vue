<template>
  <div class="principal-container">
    <Header />
    <Slider />
    <!--<router-link to="/">HomePage</router-link>-->
    <router-view></router-view> <!-- Renderiza las vistas según la ruta -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue';
//import HomePage from '../views/HomePage.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Slider,
    Footer
  },
};
</script>