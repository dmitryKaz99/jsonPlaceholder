const CharacteristicsP = ({ characteristics }) => {
  const { brand, model, productionYear, body, mileage } = characteristics;

  return (
    <div>
      <hr />
      <p>Технические характерисики:</p>

      <ul>
        <li>Брэнд: {brand}</li>
        <li>Модель: {model}</li>
        <li>Год выпуска: {productionYear} </li>
        <li>Кузов: {body}</li>
        <li>Пробег: {mileage}</li>
      </ul>
    </div>
  );
};

export default CharacteristicsP;
