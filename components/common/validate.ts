interface IValidateConfig {
  isPositiveNumbers: IWithRegExpValidate;
  isMaxNumbersPrice: IWithDefaultValidate;
  isMaxNumbersMileage: IWithDefaultValidate;
  isLimitSymbols: IWithDefaultValidate;
  isCorrectProductionYear: {
    min: IWithDefaultValidate;
    max: IWithDefaultValidate;
  };
  isCorrectTelephoneNumber: IWithRegExpValidate;
}

export interface IWithRegExpValidate {
  value: RegExp;
  message: string;
}
export interface IWithDefaultValidate {
  value: number;
  message: string;
}

const currentYear: number = new Date().getFullYear();

export const validateConfig: IValidateConfig = {
  isPositiveNumbers: {
    value: /^[0-9]/,
    message: "Только положительные числа",
  },

  isMaxNumbersPrice: {
    value: 2000000,
    message: "Цена не должна быть больше 2 000 000 руб.",
  },
  isMaxNumbersMileage: {
    value: 50000000,
    message: "Пробег не должен быть больше 50 000 000 км.",
  },

  isLimitSymbols: {
    value: 30,
    message: "Описание не должно иметь больше 30 символов",
  },

  isCorrectProductionYear: {
    min: {
      value: 1888,
      message: "Год выпуска автомобиля не может быть нижe 1888 года",
    },
    max: {
      value: currentYear,
      message: `Год выпуска автомобиля не может быть выше ${currentYear} года`,
    },
  },

  isCorrectTelephoneNumber: {
    value:
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
    message: "Некорректный номер телефона",
  },
};
