import { defineStore } from "pinia";
import api from "@/services/api";

interface IProducto {
  id?: string;
  status: string;
  servicio?: string;
  pieza?: string;
  equipoGarage?: string;
  vehicle?: string;
  price?: number;
  offertPrice?: number;
  photo: Array<string>;
  vigencia?: Date;
}

export const useProductoStore = defineStore("productos", {
  state: () => ({
    productos: [] as IProducto[],
  }),
  actions: {
    async fetchProductos() {
      try {
        const { data } = await api.get("/producto/all");
        console.log(data);
        if (data.isSuccess) {
          this.productos = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las productos:", error);
      }
    },

    async addProducto(producto: IProducto) {
      const payload = {
        ...producto,
      };
      console.log("Producto a agregar", payload);
      try {
        const { data } = await api.post("/producto", payload);
        if (data.isSuccess === false) {
          console.log("Error al agregar producto", data);
        }
        await this.fetchProductos();
        return data;
      } catch (error) {
        console.error("Error al crear la producto:", error);
        throw error;
      }
    },

    async updateProducto(producto: IProducto) {
      const payload = {
        ...producto,
      };
      console.log(payload);
      try {
        const { data } = await api.patch("/producto", payload);
        const index = this.productos.findIndex(
          (item: any) => item.id === producto.id,
        );
        if (index !== -1) {
          this.productos[index] = data.data;
        }
        await this.fetchProductos();
        return data;
      } catch (error) {
        console.error("Error al actualizar la producto:", error);
        throw error;
      }
    },

    async deleteProducto(id: string) {
      try {
        const { data } = await api.delete("/producto", { data: { id } });
        await this.fetchProductos();
        return data;
      } catch (error) {
        console.error("Error al eliminar la producto:", error);
        throw error;
      }
    },
  },
});
