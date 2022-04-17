import { translateLabel } from "../../../utils/translateLabel";
import { IOption } from "../../../types/types";
import { ListGroup } from "react-bootstrap";
import { FC } from "react";

interface IOptionsDetail {
  options: IOption[];
}

const OptionsDetail: FC<IOptionsDetail> = ({ options }) => {
  return (
    <div>
      <div className="mt-3">
        <b>Опции:</b>
      </div>

      <ListGroup variant="flush">
        {options.map((o, i) => {
          for (const [key, value] of Object.entries(o)) {
            const labelRU = translateLabel(key);

            return (
              <ListGroup.Item key={i}>
                {labelRU}: {value || "Описания нет"}
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </div>
  );
};

export default OptionsDetail;
