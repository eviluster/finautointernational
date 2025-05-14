import { defineStore } from "pinia";
import api from "@/services/api";

interface ISuplemento {
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

export const useSuplementoStore = defineStore("suplementos", {
  state: () => ({
    suplementos: [] as ISuplemento[],
  }),
  actions: {
    async fetchSuplementos() {
      try {
        const { data } = await api.get("/suplementos/all");
        if (data.isSuccess) {
          this.suplementos = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las suplementos:", error);
      }
    },

    async addSuplemento(suplemento: ISuplemento) {
      const payload = {
        ...suplemento,
      };

      try {
        const { data } = await api.post("/suplementos", payload);
        await this.fetchSuplementos();
        return data;
      } catch (error) {
        console.error("Error al crear la suplemento:", error);
        throw error;
      }
    },

    async updateSuplemento(suplemento: ISuplemento) {
      const payload = {
        ...suplemento,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/suplementos", payload);
        const index = this.suplementos.findIndex(
          (item: any) => item.id === suplemento.id,
        );
        if (index !== -1) {
          this.suplementos[index] = data.data;
        }
        await this.fetchSuplementos();
        return data;
      } catch (error) {
        console.error("Error al actualizar la suplemento:", error);
        throw error;
      }
    },

    async deleteSuplemento(id: string) {
      try {
        const { data } = await api.delete("/suplementos", { data: { id } });
        await this.fetchSuplementos();
        return data;
      } catch (error) {
        console.error("Error al eliminar la suplemento:", error);
        throw error;
      }
    },
  },
});
