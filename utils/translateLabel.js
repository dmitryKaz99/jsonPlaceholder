export const translateLabel = (label) => {
  switch (label) {
    case "other":
      return "Любая другая опция";
    case "conditioner":
      return "Кондиционер";
    case "airbags":
      return "Подушки безопасности";
    case "multimedia":
      return "Мультимедия";
    case "cruize_control":
      return "Круиз контроль";

    default:
      return label;
  }
};
