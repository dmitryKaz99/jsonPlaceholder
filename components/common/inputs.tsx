interface IInputsConfig {
  main: IInput[];
  characteristics: IInput[];
}
interface IInput {
  name: string;
  label: string;
  type: string;
  onlyNumber?: boolean;
  isImg?: boolean;
}

export const inputsConfig: IInputsConfig = {
  main: [
    { name: "name", label: "Название", type: "text" },
    { name: "description", label: "Описание", type: "text" },
    { name: "price", label: "Цена", type: "number", onlyNumber: true },
    { name: "image", label: "Фото", type: "file", isImg: true },
    { name: "contacts", label: "Контакты", type: "text" },
  ],
  characteristics: [
    { name: "brand", label: "Марка", type: "text" },
    { name: "model", label: "Модель", type: "text" },
    {
      name: "productionYear",
      label: "Год выпуска",
      type: "number",
      onlyNumber: true,
    },
    { name: "body", label: "Кузов", type: "text" },
    { name: "mileage", label: "Пробег", type: "number", onlyNumber: true },
  ],
};
