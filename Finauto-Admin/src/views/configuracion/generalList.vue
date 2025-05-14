<!-- ListConfiguracion.vue -->
<template>
  <div class="container my-4">
    <h2>Configuraciones</h2>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>% Conf Reserva</th>
          <th>% Min Price</th>
          <th>Tiempo Garantía</th>
          <th>Km Garantía</th>
          <th>Validez Oferta</th>
          <th>Import Price Car</th>
          <th>Import Price Service</th>
          <th>Import Price Parte</th>
          <th>Import Price Equipo Garage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in configuracions" :key="item.id">
          <td>{{ item.from }}</td>
          <td>{{ item.to }}</td>
          <td>{{ item.porcientoConfReserva }}</td>
          <td>{{ item.porcientoMinPrice }}</td>
          <td>{{ item.tiempoGarantia }}</td>
          <td>{{ item.kmGarantia }}</td>
          <td>{{ item.validezOferta }}</td>
          <td>{{ item.importPriceCar }}</td>
          <td>{{ item.importPriceService }}</td>
          <td>{{ item.importPriceParte }}</td>
          <td>{{ item.importPriceEquipoGarage }}</td>
          <div>
            <router-link
              to="/configuraciones/add"
              class="btn btn-success mb-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_edit_configuracion"
              @click="editConfiguracion(item)"
            >
              Editar Configuración
            </router-link>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  <EditConfiguracionModal
    :configuracion="selectedConfiguracion"
  ></EditConfiguracionModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import EditConfiguracionModal from "@/components/modals/forms/EditConfiguracionModal.vue";
import { useConfiguracionStore } from "@/stores/configuracion";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "CustomersListing",
  components: {
    EditConfiguracionModal,
  },
  setup() {
    const configuracionStore = useConfiguracionStore();
    // Datos reactivos
    const configuracions = computed(() => configuracionStore.configuraciones);
    const selectedConfiguracion = ref<any>(null);

    onMounted(async () => {
      await configuracionStore.fetchConfiguraciones();
    });

    const deleteConfiguracion = async (id: string) => {
      const result = await Swal.fire({
        icon: "warning",
        text: "¿Quieres eliminar esta configuracion?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) {
        return;
      } else {
        await configuracionStore.deleteConfiguracion(id);
        Swal.fire({
          text: "Configuracion eliminada correctamente",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      }
      await configuracionStore.fetchConfiguraciones(); // Recargar las configuracions
    };

    // Asigna la configuracion seleccionada para edición
    const editConfiguracion = (configuracion: any) => {
      selectedConfiguracion.value = configuracion;
    };

    return {
      configuracions,
      selectedConfiguracion,
      deleteConfiguracion,
      editConfiguracion,
    };
  },
});
</script>
