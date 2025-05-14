import { defineStore } from "pinia";
import api from "@/services/api";

interface ICategoriaPiezaAccesorio {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useCategoriaPiezaAccesorioStore = defineStore(
  "categoriapiezaaccesorio",
  {
    state: () => ({
      categoriapiezaaccesorio: [] as ICategoriaPiezaAccesorio[],
    }),
    actions: {
      async fetchCategoriaPiezaAccesorio() {
        try {
          const { data } = await api.get("/categoria-pieza-accesorio/all");
          if (data.isSuccess) {
            this.categoriapiezaaccesorio = [...data.data];
          }
        } catch (error) {
          console.error(
            "Error al obtener las categoria-pieza-accesorio:",
            error,
          );
        }
      },

      async addCategoriaPiezaAccesorio(
        categoriapiezaaccesorio: ICategoriaPiezaAccesorio,
      ) {
        const payload = {
          ...categoriapiezaaccesorio,
        };

        try {
          const { data } = await api.post(
            "/categoria-pieza-accesorio",
            payload,
          );
          await this.fetchCategoriaPiezaAccesorio();
          return data;
        } catch (error) {
          console.error("Error al crear la categoria-pieza-accesorio:", error);
          throw error;
        }
      },

      async updateCategoriaPiezaAccesorio(
        updatedCategoriaPiezaAccesorioID: string,
        categoriapiezaaccesorio: ICategoriaPiezaAccesorio,
      ) {
        const payload = {
          id: updatedCategoriaPiezaAccesorioID,
          ...categoriapiezaaccesorio,
        };
        console.log(payload);

        try {
          const { data } = await api.patch(
            "/categoria-pieza-accesorio",
            payload,
          );
          const index = this.categoriapiezaaccesorio.findIndex(
            (item: any) => item.id === updatedCategoriaPiezaAccesorioID,
          );

          if (index !== -1) {
            this.categoriapiezaaccesorio.splice(index, 1, data.data);
          }
          return data;
        } catch (error) {
          console.error(
            "Error al actualizar la categoria-pieza-accesorio:",
            error,
          );
          throw error;
        }
      },

      async deleteCategoriaPiezaAccesorio(id: string) {
        try {
          const { data } = await api.delete("/categoria-pieza-accesorio", {
            data: { id },
          });
          await this.fetchCategoriaPiezaAccesorio();
          return data;
        } catch (error) {
          console.error(
            "Error al eliminar la categoria-pieza-accesorio:",
            error,
          );
          throw error;
        }
      },
    },
  },
);
