import { defineStore } from "pinia";
import api from "@/services/api";

interface ITraccion {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useTraccionStore = defineStore("traccion", {
  state: () => ({
    traccion: [] as ITraccion[],
  }),
  actions: {
    async fetchTraccion() {
      try {
        const { data } = await api.get("/traccion/all");
        if (data.isSuccess) {
          this.traccion = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las traccion:", error);
      }
    },

    async addTraccion(traccion: ITraccion) {
      const payload = {
        ...traccion,
      };

      try {
        const { data } = await api.post("/traccion", payload);
        await this.fetchTraccion();
        return data;
      } catch (error) {
        console.error("Error al crear la traccion:", error);
        throw error;
      }
    },

    async updateTraccion(updatedTraccionID: string, traccion: ITraccion) {
      const payload = {
        id: updatedTraccionID,
        ...traccion,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/traccion", payload);

        const index = this.traccion.findIndex(
          (item: any) => item.id === updatedTraccionID,
        );

        if (index !== -1) {
          this.traccion.splice(index, 1, data.data);
        }

        // Retornamos la respuesta del servidor
        return data;
      } catch (error) {
        console.error("Error al actualizar la traccion:", error);
        throw error;
      }
    },

    async deleteTraccion(id: string) {
      try {
        const { data } = await api.delete("/traccion", { data: { id } });
        await this.fetchTraccion();
        return data;
      } catch (error) {
        console.error("Error al eliminar la traccion:", error);
        throw error;
      }
    },
  },
});
