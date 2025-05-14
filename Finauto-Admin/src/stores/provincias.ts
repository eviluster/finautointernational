import { defineStore } from "pinia";
import api from "@/services/api";

interface IProvincia {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useProvinciaStore = defineStore("provincias", {
  state: () => ({
    provincias: [] as IProvincia[],
  }),
  actions: {
    async fetchProvincias() {
      try {
        const { data } = await api.get("/province/all");
        if (data.isSuccess) {
          this.provincias = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las provincias:", error);
      }
    },

    async addProvincia(provincia: IProvincia) {
      const payload = {
        ...provincia,
      };

      try {
        const { data } = await api.post("/province", payload);
        await this.fetchProvincias();
        return data;
      } catch (error) {
        console.error("Error al crear la provincia:", error);
        throw error;
      }
    },

    async updateProvincia(updatedProvinciaID: string, provincia: IProvincia) {
      const payload = {
        id: updatedProvinciaID,
        ...provincia,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/province", payload);

        const index = this.provincias.findIndex(
          (item: any) => item.id === updatedProvinciaID,
        );

        if (index !== -1) {
          this.provincias.splice(index, 1, data.data);
        }

        // Retornamos la respuesta del servidor
        return data;
      } catch (error) {
        console.error("Error al actualizar la provincia:", error);
        throw error;
      }
    },

    async deleteProvincia(id: string) {
      try {
        const { data } = await api.delete("/province", { data: { id } });
        await this.fetchProvincias();
        return data;
      } catch (error) {
        console.error("Error al eliminar la provincia:", error);
        throw error;
      }
    },
  },
});
