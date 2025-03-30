interface IUsuario {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;

  date: string;
}

const usuarios: Array<IUsuario> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Emma Smith",
    email: "e.smith@kpmg.com.au",
    phone: "0412 345 678",
    role: "moderator",
    date: "14 Dec 2020, 8:43 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Melody Macy",
    email: "melody@altbox.com",
    phone: "0412 345 678",
    role: "editor",
    date: "01 Dec 2020, 10:12 am",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Max Smith",
    email: "max@kt.com",
    phone: "0412 345 678",
    role: "admin",
    date: "12 Nov 2020, 2:01 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Sean Bean",
    email: "sean@dellito.com",
    phone: "0412 345 678",
    role: "editor",
    date: "21 Oct 2020, 5:54 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Brian Cox",
    email: "brian@exchange.com",
    phone: "0412 345 678",
    role: "user",
    date: "19 Oct 2020, 7:32 am",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    name: "Mikaela Collins",
    email: "mikaela@pexcom.com",
    phone: "0412 345 678",
    role: "admin",
    date: "23 Sep 2020, 12:37 am",
  },
];

export type { IUsuario };

export default usuarios;
