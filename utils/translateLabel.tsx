export const translateLabel = (label: string) => {
  switch (label) {
    case "conditioner":
      return "Кондиционер";
    case "airbags":
      return "Подушки безопасности";
    case "multimedia":
      return "Мультимедия";
    case "cruize_control":
      return "Круиз контроль";
    case "other":
      return "Любая другая опция";

    default:
      return label;
  }
};
