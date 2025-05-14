import { defineStore } from "pinia";
import api from "@/services/api";

export interface IConfiguracion {
  id: string;
  from: string;
  to: string;
  porcientoConfReserva: number;
  porcientoMinPrice: number;
  tiempoGarantia: number;
  importPriceCar: number;
  importPriceService: number;
  importPriceParte: number;
  importPriceEquipoGarage: number;
  kmGarantia: number;
  validezOferta: number;
}

export const useConfiguracionStore = defineStore("configuraciones", {
  state: () => ({
    configuraciones: [] as IConfiguracion[],
  }),
  actions: {
    async fetchConfiguraciones() {
      try {
        const { data } = await api.get("/configuracion/all");
        console.log(data);

        if (data.isSuccess) {
          this.configuraciones = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener configuraciones:", error);
      }
    },

    async addConfiguracion(config: Omit<IConfiguracion, "id">) {
      try {
        const { data } = await api.post("/configuracion", config);
        console.log(data);
        await this.fetchConfiguraciones();
        return data;
      } catch (error) {
        console.error("Error al crear configuración:", error);
        throw error;
      }
    },

    async updateConfiguracion(config: IConfiguracion) {
      const payload = {
        ...config,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/configuracion", payload);
        const idx = this.configuraciones.findIndex(
          (item) => item.id === config.id,
        );
        if (idx !== -1) this.configuraciones[idx] = data.data;
        await this.fetchConfiguraciones();
        return data;
      } catch (error) {
        console.error("Error al actualizar configuración:", error);
        throw error;
      }
    },

    async deleteConfiguracion(id: string) {
      try {
        const { data } = await api.delete("/configuracion", { data: { id } });
        await this.fetchConfiguraciones();
        return data;
      } catch (error) {
        console.error("Error al eliminar configuración:", error);
        throw error;
      }
    },
  },
});
