interface IProducts {
  id: number;
  nombredelproducto: string;
  descripion: string;
  módulo: string;
  precio: number;
}

const productos: Array<IProducts> = [
  {
    id: 1,
    nombredelproducto: "Toyota Corolla 2022",
    descripion:
      "Sedán compacto con excelente eficiencia de combustible y tecnología avanzada.",
    módulo: "vehiculo",
    precio: 233,
  },
  {
    id: 2,
    nombredelproducto: "Filtro de Aceite Bosch",
    descripion:
      "Filtro de aceite de alto rendimiento que prolonga la vida del motor.",
    módulo: "piezas",
    precio: 233,
  },
  {
    id: 3,
    nombredelproducto: "Compresor de Aire Portátil",
    descripion:
      "Ideal para inflar neumáticos y realizar tareas de mantenimiento en el garaje.",
    módulo: "equipamiento de garaje",
    precio: 233,
  },
  {
    id: 4,
    nombredelproducto: "Pastillas de Freno Brembo",
    descripion:
      "Pastillas de freno de alto rendimiento para una frenada segura y eficaz.",
    módulo: "piezas",
    precio: 233,
  },
  {
    id: 5,
    nombredelproducto: "Elevador Hidráulico de 2 Columnas",
    descripion:
      "Equipo profesional para elevar vehículos y facilitar reparaciones.",
    módulo: "equipamiento de garaje",
    precio: 233,
  },
  {
    id: 6,
    nombredelproducto: "Mazda CX-5 2024",
    descripion:
      "SUV compacto con tecnología avanzada y diseño elegante para toda la familia.",
    módulo: "vehiculo",
    precio: 233,
  },
  {
    id: 7,
    nombredelproducto: "Amortiguadores Monroe",
    descripion:
      "Amortiguadores de alta calidad para una conducción cómoda y segura.",
    módulo: "piezas",
    precio: 233,
  },
  {
    id: 8,
    nombredelproducto: "Rampa Hidráulica para Garaje",
    descripion:
      "Facilita la elevación de vehículos para mantenimiento y reparación.",
    módulo: "equipamiento de garaje",
    precio: 233,
  },
  {
    id: 9,
    nombredelproducto: "Juego de Neumáticos Michelin",
    descripion:
      "Neumáticos duraderos que ofrecen un excelente agarre y seguridad.",
    módulo: "piezas",
    precio: 233,
  },
  {
    id: 10,
    nombredelproducto: "Caja de Herramientas Stanley",
    descripion:
      "Conjunto completo de herramientas para trabajos de mantenimiento y reparación.",
    módulo: "equipamiento de garaje",
    precio: 233,
  },
];

export type { IProducts };
export default productos;
