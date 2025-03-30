import { defineStore } from "pinia";
import api from "@/services/api";

interface ITipoFreno {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useTipoFrenoStore = defineStore("tipofreno", {
  state: () => ({
    tipofreno: [] as ITipoFreno[],
  }),
  actions: {
    async fetchTipoFreno() {
      try {
        const { data } = await api.get("/tipo-freno/all");
        await console.log(data);

        if (data.isSuccess) {
          this.tipofreno = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener el tipo de freno:", error);
      }
    },

    async addTipoFreno(tipofreno: ITipoFreno) {
      const payload = {
        ...tipofreno,
      };

      try {
        const { data } = await api.post("/tipo-freno", payload);
        await this.fetchTipoFreno();
        return data;
      } catch (error) {
        console.error("Error al crear el tipo de freno:", error);
        throw error;
      }
    },

    async updateTipoFreno(updatedTipoFrenoID: string, tipofreno: ITipoFreno) {
      const payload = {
        id: updatedTipoFrenoID,
        ...tipofreno,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/tipo-freno", payload);
        const index = this.tipofreno.findIndex(
          (item: any) => item.id === updatedTipoFrenoID,
        );

        if (index !== -1) {
          this.tipofreno.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar el tipo de freno:", error);
        throw error;
      }
    },

    async deleteTipoFreno(id: string) {
      try {
        const { data } = await api.delete("/tipo-freno", { data: { id } });
        await this.fetchTipoFreno();
        return data;
      } catch (error) {
        console.error("Error al eliminar el tipo de freno:", error);
        throw error;
      }
    },
  },
});
