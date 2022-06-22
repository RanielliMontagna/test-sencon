interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

type IGeo = {
  lat: string;
  lng: string;
};

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IUsuario {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IUsuarioTratado {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  empresa: string;
}

export type KeysColunasType = 'nome' | 'email' | 'telefone' | 'endereco' | 'cidade' | 'empresa';

export type ColunasTabelaType = {
  key: KeysColunasType;
  label: string;
}[];
