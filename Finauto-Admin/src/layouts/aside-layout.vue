<script setup>
import asideProducts from "@/views/comercializacion/productos/aside-products.vue";
</script>
<template>
  <div class="row my-6">
    <div class="col-md-4 my-5 d-flex justify-content-center">
      <asideProducts></asideProducts>
    </div>
    <div class="col-md-8">
      <router-view></router-view>
    </div>
  </div>
</template>
