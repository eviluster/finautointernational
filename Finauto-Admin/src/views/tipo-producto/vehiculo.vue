<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#kt_modal_add_vehiculo"
    >
      <KTIcon icon-name="plus" icon-class="fs-2" />
      Añadir Vehiculo
    </button>
  </div>
  <AddVehiculoModal></AddVehiculoModal>
</template>

<script setup>
import AddVehiculoModal from "@/components/modals/forms/AddVehiculoModal.vue";
</script>

<style lang="scss" scoped></style>
