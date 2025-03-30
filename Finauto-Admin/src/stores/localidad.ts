import { defineStore } from "pinia";
import api from "@/services/api";

interface ILocalidad {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useLocalidadStore = defineStore("localidad", {
  state: () => ({
    localidads: [] as ILocalidad[],
  }),
  actions: {
    async fetchLocalidads() {
      try {
        const { data } = await api.get("/locality/all");
        if (data.isSuccess) {
          this.localidads = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las localidad:", error);
      }
    },

    async addLocalidad(localidad: ILocalidad) {
      const payload = {
        ...localidad,
      };

      try {
        const { data } = await api.post("/locality", payload);
        await this.fetchLocalidads();
        return data;
      } catch (error) {
        console.error("Error al crear la localidad:", error);
        throw error;
      }
    },

    async updateLocalidad(updatedLocalidadID: string, localidad: ILocalidad) {
      const payload = {
        id: updatedLocalidadID,
        ...localidad,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/locality", payload);

        const index = this.localidads.findIndex(
          (item: any) => item.id === updatedLocalidadID,
        );

        if (index !== -1) {
          this.localidads.splice(index, 1, data.data);
        }

        // Retornamos la respuesta del servidor
        return data;
      } catch (error) {
        console.error("Error al actualizar la localidad:", error);
        throw error;
      }
    },

    async deleteLocalidad(id: string) {
      try {
        const { data } = await api.delete("/locality", { data: { id } });
        await this.fetchLocalidads();
        return data;
      } catch (error) {
        console.error("Error al eliminar la localidad:", error);
        throw error;
      }
    },
  },
});
