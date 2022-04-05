import { translateLabel } from "../../utils/translateLabel";
import { FC } from "react";
import { IOption } from "../../types/types";

interface IOptionsP {
  options: IOption[];
}

const OptionsP: FC<IOptionsP> = ({ options }) => {
  return (
    <div>
      <hr />
      <p>Опции:</p>

      <ul>
        {options.map((o, i) => {
          for (const [key, value] of Object.entries(o)) {
            const labelRU = translateLabel(key);

            return (
              <li key={i}>
                {labelRU}: {value || "Описания нет"}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default OptionsP;
