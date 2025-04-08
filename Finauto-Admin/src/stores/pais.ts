import { defineStore } from "pinia";
import api from "@/services/api";

interface IPais {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const usePaisStore = defineStore("pais", {
  state: () => ({
    paiss: [] as IPais[],
  }),
  actions: {
    async fetchPais() {
      try {
        const { data } = await api.get("/country/all");
        if (data.isSuccess) {
          this.paiss = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener los paises:", error);
      }
    },

    async addPais(pais: IPais) {
      const payload = {
        ...pais,
      };

      try {
        const { data } = await api.post("/country", payload);
        await this.fetchPais();
        return data;
      } catch (error) {
        console.error("Error al crear el pais:", error);
        throw error;
      }
    },

    async updatePais(updatedPaisID: string, pais: IPais) {
      const payload = {
        id: updatedPaisID,
        ...pais,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/country", payload);
        const index = this.paiss.findIndex(
          (item: any) => item.id === updatedPaisID,
        );
        if (index !== -1) {
          this.paiss[index] = data.data;
        }
        await this.fetchPais();
        return data;
      } catch (error) {
        console.error("Error al actualizar el pais:", error);
        throw error;
      }
    },

    async deletePais(id: string) {
      try {
        const { data } = await api.delete("/country", { data: { id } });
        await this.fetchPais();
        return data;
      } catch (error) {
        console.error("Error al eliminar el pais:", error);
        throw error;
      }
    },
  },
});
