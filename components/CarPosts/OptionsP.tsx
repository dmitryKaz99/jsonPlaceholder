import { translateLabel } from "../../utils/translateLabel";
import { FC } from "react";

const OptionsP = ({ options }) => {
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
