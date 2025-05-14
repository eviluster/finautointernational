interface IImportadora {
  id: number;
  nombre: string;
  descripcion: string;
}

const importadoras: Array<IImportadora> = [];

export type { IImportadora };

export default importadoras;
