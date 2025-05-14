interface IPromocion {
  id: number;
  nombre: string;
  codigo: string;
  producto: string;
  estado: string;
  date_venta: string;
  date_disfrute: string;
  modulo: string;
  image: string;
}

const ofertas: Array<IPromocion> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Oferta Filtro de Aceite Premium",
    codigo: "OF-001",
    producto: "Filtro de Aceite",
    estado: "disponible",
    date_venta: "2025-02-15",
    date_disfrute: "2025-03-01",
    modulo: "Piezas",
    image: "https://picsum.photos/200/200",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Descuento en Toyota Corolla 2022",
    codigo: "OF-002",
    producto: "Toyota Corolla 2022",
    estado: "no disponible",
    date_venta: "2025-01-20",
    date_disfrute: "2025-02-10",
    modulo: "Vehiculo",
    image: "https://picsum.photos/200/400",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Promoción Juego de Neumáticos",
    codigo: "OF-003",
    producto: "Juego de Neumáticos Michelin",
    estado: "disponible",
    date_venta: "2025-02-10",
    date_disfrute: "2025-02-25",
    modulo: "Equipamiento de garaje",
    image: "https://picsum.photos/200/300",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Descuento en Honda Civic 2021",
    codigo: "OF-004",
    producto: "Honda Civic 2021",
    estado: "disponible",
    date_venta: "2025-01-05",
    date_disfrute: "2025-01-25",
    modulo: "Piezas",
    image: "https://picsum.photos/200/200",
  },
];

export type { IPromocion };

export default ofertas;
