import { defineStore } from "pinia";
import api from "@/services/api";

interface ICategoriaEquipo {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useCategoriaEquipoStore = defineStore("categoriapiezaaccesorio", {
  state: () => ({
    categoriapiezaaccesorio: [] as ICategoriaEquipo[],
  }),
  actions: {
    async fetchCategoriaEquipo() {
      try {
        const { data } = await api.get("/categoria-equipo/all");
        if (data.isSuccess) {
          this.categoriapiezaaccesorio = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las categoria-equipo:", error);
      }
    },

    async addCategoriaEquipo(categoriapiezaaccesorio: ICategoriaEquipo) {
      const payload = {
        ...categoriapiezaaccesorio,
      };

      try {
        const { data } = await api.post("/categoria-equipo", payload);
        await this.fetchCategoriaEquipo();
        return data;
      } catch (error) {
        console.error("Error al crear la categoria-equipo:", error);
        throw error;
      }
    },

    async updateCategoriaEquipo(
      updatedCategoriaEquipoID: string,
      categoriapiezaaccesorio: ICategoriaEquipo,
    ) {
      const payload = {
        id: updatedCategoriaEquipoID,
        ...categoriapiezaaccesorio,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/categoria-equipo", payload);
        const index = this.categoriapiezaaccesorio.findIndex(
          (item: any) => item.id === updatedCategoriaEquipoID,
        );

        if (index !== -1) {
          this.categoriapiezaaccesorio.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar la categoria-equipo:", error);
        throw error;
      }
    },

    async deleteCategoriaEquipo(id: string) {
      try {
        const { data } = await api.delete("/categoria-equipo", {
          data: { id },
        });
        await this.fetchCategoriaEquipo();
        return data;
      } catch (error) {
        console.error("Error al eliminar la categoria-equipo:", error);
        throw error;
      }
    },
  },
});
