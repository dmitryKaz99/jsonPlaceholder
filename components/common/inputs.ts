import {
  IWithRegExpValidate,
  IWithDefaultValidate,
  validateConfig,
} from "./validate";

const {
  isPositiveNumbers,
  isMaxNumbersPrice,
  isMaxNumbersMileage,
  isLimitSymbols,
  isCorrectProductionYear,
  isCorrectTelephoneNumber,
} = validateConfig;

interface IInputsConfig {
  main: IInput[];
  characteristics: IInput[];
}

export interface IInput {
  name: string;
  label: string;
  type: string;
  isPositiveNumbers?: IWithRegExpValidate;
  isMaxNumbersPrice?: IWithDefaultValidate;
  isMaxNumbersMileage?: IWithDefaultValidate;
  isLimitSymbols?: IWithDefaultValidate;
  isCorrectProductionYear?: {
    min: IWithDefaultValidate;
    max: IWithDefaultValidate;
  };
  isCorrectTelephoneNumber?: IWithRegExpValidate;
}

export const inputsConfig: IInputsConfig = {
  main: [
    { name: "name", label: "Название", type: "text" },
    {
      name: "description",
      label: "Описание",
      type: "text",
      isLimitSymbols,
    },
    {
      name: "price",
      label: "Цена",
      type: "number",
      isPositiveNumbers,
      isMaxNumbersPrice,
    },
    { name: "image", label: "Фото", type: "file" },
    {
      name: "contacts",
      label: "Контакты",
      type: "number",
      isCorrectTelephoneNumber,
    },
  ],

  characteristics: [
    { name: "brand", label: "Марка", type: "text" },
    { name: "model", label: "Модель", type: "text" },
    {
      name: "productionYear",
      label: "Год выпуска",
      type: "number",
      isCorrectProductionYear,
    },
    { name: "body", label: "Кузов", type: "select" },
    {
      name: "mileage",
      label: "Пробег",
      type: "number",
      isPositiveNumbers,
      isMaxNumbersMileage,
    },
  ],
};

export const GENERAL_NAME: string = "technical_characteristics";
