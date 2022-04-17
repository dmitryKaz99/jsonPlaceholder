import { GENERAL_NAME, inputsConfig } from "../../common/inputs";
import { bodyOptionsAdd } from "../../common/options";
import { IPost } from "../../../types/types";
import { Form } from "react-bootstrap";
import { FC, useEffect } from "react";

interface ICharacteristicsCreate {
  register: any;
  errors: any;
  setValue: any;
  selectedCarPost: IPost;
}

const CharacteristicsCreate: FC<ICharacteristicsCreate> = ({
  register,
  errors,
  setValue,
  selectedCarPost,
}) => {
  useEffect(() => {
    if (selectedCarPost) {
      inputsConfig.characteristics.forEach((i) => {
        const wrapper = selectedCarPost[GENERAL_NAME];
        wrapper && setValue(`${GENERAL_NAME}.${i.name}`, wrapper[i.name]);
      });
    }
  }, [selectedCarPost]);

  return (
    <>
      {inputsConfig.characteristics.map((i) => {
        const {
            name,
            label,
            type,
            isPositiveNumbers,
            isMaxNumbersMileage,
            isCorrectProductionYear,
          } = i,
          nameEl = `${GENERAL_NAME}.${name}`;

        return (
          <Form.Group className="mb-3" key={nameEl}>
            <Form.Label>
              <i>{label}</i>
            </Form.Label>

            {name === "body" ? (
              <Form.Select
                type={type}
                defaultValue=""
                {...register(nameEl, { required: "Обязательное поле" })}
              >
                <option disabled value="">
                  Выбрать кузов
                </option>

                {bodyOptionsAdd.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Form.Select>
            ) : (
              <Form.Control
                type={type}
                {...register(nameEl, {
                  required: "Обязательное поле",
                  pattern: isPositiveNumbers,
                  min: isCorrectProductionYear?.min,
                  max: isMaxNumbersMileage || isCorrectProductionYear?.max,
                })}
              />
            )}

            {errors?.[GENERAL_NAME]?.[name] && (
              <p className="mt-1 text-danger">
                {errors?.[GENERAL_NAME]?.[name]?.message}
              </p>
            )}
          </Form.Group>
        );
      })}
    </>
  );
};

export default CharacteristicsCreate;
