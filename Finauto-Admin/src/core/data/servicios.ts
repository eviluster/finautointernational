interface IServicio {
    id: number;
    nombre: string;
    descripcion: string;
    image:string;
  }

const servicios : Array<IServicio>=[
    {
        id:  Math.floor(Math.random() * 99999) + 1,
        nombre: "Servicio 1",
        descripcion: "Este es el servicio 1",
        image: "https://picsum.photos/200/300"
    },
    {
        id:  Math.floor(Math.random() * 99999) + 1,
        nombre: "Servicio 2",
        descripcion: "Este es el servicio 2",
        image: "https://picsum.photos/200/300"
    },
  ] 

  export type { IServicio };
  
  export default servicios;