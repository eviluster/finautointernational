import { defineStore } from "pinia";
import api from "@/services/api";

interface IServicio {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  precioBase: number;
  galery: Array<string>;
}

export const useServicioStore = defineStore("servicios", {
  state: () => ({
    servicios: [] as IServicio[],
  }),
  actions: {
    async fetchServicios() {
      try {
        const { data } = await api.get("/servicio/all");
        await console.log(data);
        if (data.isSuccess) {
          this.servicios = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las servicios:", error);
      }
    },

    async addServicio(servicio: IServicio) {
      const payload = {
        ...servicio,
      };
      console.log("Servicio a agregar", payload);
      try {
        const { data } = await api.post("/servicio", payload);
        console.log("Servicio agregado", data);
        await this.fetchServicios();
        return data;
      } catch (error) {
        console.error("Error al crear la servicio:", error);
        throw error;
      }
    },

    async updateServicio(updatedServicioID: string, servicio: IServicio) {
      const payload = {
        id: updatedServicioID,
        ...servicio,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/servicio", payload);
        const index = this.servicios.findIndex(
          (item: any) => item.id === updatedServicioID,
        );
        if (index !== -1) {
          this.servicios[index] = data.data;
        }
        await this.fetchServicios();
        return data;
      } catch (error) {
        console.error("Error al actualizar la servicio:", error);
        throw error;
      }
    },

    async deleteServicio(id: string) {
      try {
        const { data } = await api.delete("/servicio", { data: { id } });
        await this.fetchServicios();
        return data;
      } catch (error) {
        console.error("Error al eliminar la servicio:", error);
        throw error;
      }
    },
  },
});
