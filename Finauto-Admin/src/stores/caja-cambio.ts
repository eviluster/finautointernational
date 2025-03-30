import { defineStore } from "pinia";
import api from "@/services/api";

interface ICajaCambio {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useCajaCambioStore = defineStore("cajacambio", {
  state: () => ({
    cajacambio: [] as ICajaCambio[],
  }),
  actions: {
    async fetchCajaCambio() {
      try {
        const { data } = await api.get("/caja-cambio/all");
        if (data.isSuccess) {
          this.cajacambio = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las cajacambio:", error);
      }
    },

    async addCajaCambio(cajacambio: ICajaCambio) {
      const payload = {
        ...cajacambio,
      };

      try {
        const { data } = await api.post("/caja-cambio", payload);
        await this.fetchCajaCambio();
        return data;
      } catch (error) {
        console.error("Error al crear la cajacambio:", error);
        throw error;
      }
    },

    async updateCajaCambio(
      updatedCajaCambioID: string,
      cajacambio: ICajaCambio,
    ) {
      const payload = {
        id: updatedCajaCambioID,
        ...cajacambio,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/caja-cambio", payload);

        const index = this.cajacambio.findIndex(
          (item: any) => item.id === updatedCajaCambioID,
        );

        if (index !== -1) {
          this.cajacambio.splice(index, 1, data.data);
        }

        // Retornamos la respuesta del servidor
        return data;
      } catch (error) {
        console.error("Error al actualizar la cajacambio:", error);
        throw error;
      }
    },

    async deleteCajaCambio(id: string) {
      try {
        const { data } = await api.delete("/caja-cambio", { data: { id } });
        await this.fetchCajaCambio();
        return data;
      } catch (error) {
        console.error("Error al eliminar la cajacambio:", error);
        throw error;
      }
    },
  },
});
