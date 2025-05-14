import { defineStore } from "pinia";
import api from "@/services/api";

interface IModelo {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useModeloStore = defineStore("modelos", {
  state: () => ({
    modelos: [] as IModelo[],
  }),
  actions: {
    async fetchModelos() {
      try {
        const { data } = await api.get("/modelos/all");
        if (data.isSuccess) {
          this.modelos = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las modelos:", error);
      }
    },

    async addModelo(modelo: IModelo) {
      const payload = {
        ...modelo,
      };

      try {
        const { data } = await api.post("/modelos", payload);
        await this.fetchModelos();
        return data;
      } catch (error) {
        console.error("Error al crear la modelo:", error);
        throw error;
      }
    },

    async updateModelo(modelo: IModelo) {
      const payload = {
        ...modelo,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/modelos", payload);
        const index = this.modelos.findIndex(
          (item: any) => item.id === modelo.id,
        );
        if (index !== -1) {
          this.modelos[index] = data.data;
        }
        await this.fetchModelos();
        return data;
      } catch (error) {
        console.error("Error al actualizar la modelo:", error);
        throw error;
      }
    },

    async deleteModelo(id: string) {
      try {
        const { data } = await api.delete("/modelos", { data: { id } });
        await this.fetchModelos();
        return data;
      } catch (error) {
        console.error("Error al eliminar la modelo:", error);
        throw error;
      }
    },
  },
});
