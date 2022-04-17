import { inputsConfig } from "../../common/inputs";
import { ICharacteristics } from "../../../types/types";
import { ListGroup } from "react-bootstrap";
import { FC } from "react";

interface ICharacteristicsDetail {
  characteristics: ICharacteristics;
}

const CharacteristicsDetail: FC<ICharacteristicsDetail> = ({
  characteristics,
}) => {
  return (
    <div>
      <div className="mt-3">
        <b>Технические характеристики:</b>
      </div>

      <ListGroup variant="flush">
        {inputsConfig.characteristics.map((i) => (
          <ListGroup.Item key={i.name}>
            {i.label} : {characteristics[i.name]}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CharacteristicsDetail;
