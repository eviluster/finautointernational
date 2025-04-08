import { defineStore } from "pinia";
import api from "@/services/api";

interface ITipoSuspencion {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useTipoSuspencionStore = defineStore("tiposuspension", {
  state: () => ({
    tiposuspencion: [] as ITipoSuspencion[],
  }),
  actions: {
    async fetchTipoSuspencion() {
      try {
        const { data } = await api.get("/tipo-suspension/all");
        await console.log(data);

        if (data.isSuccess) {
          this.tiposuspencion = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener el tipo de suspension:", error);
      }
    },

    async addTipoSuspencion(tiposuspencion: ITipoSuspencion) {
      const payload = {
        ...tiposuspencion,
      };

      try {
        const { data } = await api.post("/tipo-suspension", payload);
        await this.fetchTipoSuspencion();
        return data;
      } catch (error) {
        console.error("Error al crear el tipo de suspension:", error);
        throw error;
      }
    },

    async updateTipoSuspencion(
      updatedTipoSuspencionID: string,
      tiposuspencion: ITipoSuspencion,
    ) {
      const payload = {
        id: updatedTipoSuspencionID,
        ...tiposuspencion,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/tipo-suspension", payload);
        const index = this.tiposuspencion.findIndex(
          (item: any) => item.id === updatedTipoSuspencionID,
        );

        if (index !== -1) {
          this.tiposuspencion.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar el tipo de suspension:", error);
        throw error;
      }
    },

    async deleteTipoSuspencion(id: string) {
      try {
        const { data } = await api.delete("/tipo-suspension", { data: { id } });
        await this.fetchTipoSuspencion();
        return data;
      } catch (error) {
        console.error("Error al eliminar el tipo de suspension:", error);
        throw error;
      }
    },
  },
});
