interface IImportadora {
  id: number;
  nombre: string;
  descripcion: string;
}

const importadoras: Array<IImportadora> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Transcisport",
    descripcion: "transcisport",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "divep",
    descripcion: "divep",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "troclex",
    descripcion: "troclex",
  },
];

export type { IImportadora };

export default importadoras;
