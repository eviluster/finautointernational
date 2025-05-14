import { defineStore } from "pinia";
import api from "@/services/api";

interface ICategoriaProducto {
  name: {
    es: string;
    en: string;
  };
  tipo: "vehicle" | "service" | "parte" | "equipo";
}

export const useCategoriaProductoStore = defineStore("categoriaproducto", {
  state: () => ({
    categoriaproducto: [] as ICategoriaProducto[],
  }),
  actions: {
    async fetchCategoriaProducto() {
      try {
        const { data } = await api.get("/catprod/all");
        if (data.isSuccess) {
          this.categoriaproducto = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las categoria-producto:", error);
      }
    },

    async addCategoriaProducto(categoriaproducto: ICategoriaProducto) {
      const payload = {
        ...categoriaproducto,
      };

      try {
        const { data } = await api.post("/catprod", payload);
        await this.fetchCategoriaProducto();
        return data;
      } catch (error) {
        console.error("Error al crear la categoria-producto:", error);
        throw error;
      }
    },

    async updateCategoriaProducto(
      updatedCategoriaProductoID: string,
      categoriaproducto: ICategoriaProducto,
    ) {
      const payload = {
        id: updatedCategoriaProductoID,
        ...categoriaproducto,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/catprod", payload);
        const index = this.categoriaproducto.findIndex(
          (item: any) => item.id === updatedCategoriaProductoID,
        );

        if (index !== -1) {
          this.categoriaproducto.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar la categoria-producto:", error);
        throw error;
      }
    },

    async deleteCategoriaProducto(id: string) {
      try {
        const { data } = await api.delete("/catprod", {
          data: { id },
        });
        await this.fetchCategoriaProducto();
        return data;
      } catch (error) {
        console.error("Error al eliminar la categoria-producto:", error);
        throw error;
      }
    },
  },
});
