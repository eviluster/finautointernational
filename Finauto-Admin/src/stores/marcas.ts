import { defineStore } from "pinia";
import api from "@/services/api";

interface IMarca {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useMarcaStore = defineStore("marcas", {
  state: () => ({
    marcas: [] as IMarca[],
  }),
  actions: {
    async fetchMarcas() {
      try {
        const { data } = await api.get("/marcas/all");
        if (data.isSuccess) {
          this.marcas = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las marcas:", error);
      }
    },

    async addMarca(marca: IMarca) {
      const payload = {
        ...marca,
      };

      try {
        const { data } = await api.post("/marcas", payload);
        await this.fetchMarcas();
        return data;
      } catch (error) {
        console.error("Error al crear la marca:", error);
        throw error;
      }
    },

    async updateMarca(updatedMarcaID: string, marca: IMarca) {
      const payload = {
        id: updatedMarcaID,
        ...marca,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/marcas", payload);
        const index = this.marcas.findIndex(
          (item: any) => item.id === updatedMarcaID,
        );

        if (index !== -1) {
          this.marcas.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar la marca:", error);
        throw error;
      }
    },

    async deleteMarca(id: string) {
      try {
        const { data } = await api.delete("/marcas", { data: { id } });
        await this.fetchMarcas();
        return data;
      } catch (error) {
        console.error("Error al eliminar la marca:", error);
        throw error;
      }
    },
  },
});
