import { utilsConfig } from "../../../utils";
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
          const key = Object.keys(o),
            value = Object.values(o);
          const labelRU = utilsConfig.translateLabel(key[0]);

          return (
            <ListGroup.Item key={i}>
              {labelRU}: {value[0] || "Описания нет"}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default OptionsDetail;
