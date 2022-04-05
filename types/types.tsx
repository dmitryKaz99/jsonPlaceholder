export interface IPost {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics: ICharacteristics;
  options: IOption[];
}

export interface ICharacteristics {
  brand: string;
  model: string;
  productionYear: number;
  body: string;
  mileage: number;
}

export interface IOption {
  [option_name: string]: string;
}
