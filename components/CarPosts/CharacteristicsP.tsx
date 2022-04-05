import { ICharacteristics } from "../../types/types";
import { FC } from "react";
interface ICharacteristicsP {
  characteristics: ICharacteristics;
}

const CharacteristicsP: FC<ICharacteristicsP> = ({ characteristics }) => {
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
