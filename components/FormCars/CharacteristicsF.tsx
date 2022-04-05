import OptionsF from "./OptionsF";
import { inputsConfig } from "../common/inputs";
import { Form } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types/types";
import { FC, useEffect } from "react";

interface ICharacteristicsF {
  register: any;
  setValue: any;
  selectedCarPost: IPost;
  isCharacteristics: boolean;
}

const CharacteristicsF: FC<ICharacteristicsF> = ({
  register,
  setValue,
  selectedCarPost,
  isCharacteristics,
}) => {
  const { setSelectedOption } = useActions();

  const generalName: string = "technical_characteristics";

  useEffect(() => {
    if (selectedCarPost && isCharacteristics) {
      inputsConfig.characteristics.forEach((i) => {
        const wrapper = selectedCarPost[generalName];
        wrapper && setValue(`${generalName}.${i.name}`, wrapper[i.name]);
      });
    }
  }, [selectedCarPost, isCharacteristics]);

  const selectedOptionHandler = (e: any) => {
    const index = e.nativeEvent.target.selectedIndex,
      label = e.nativeEvent.target[index].text;
    const value = e.target.value;

    setSelectedOption({ value, label });
  };

  return (
    <>
      {inputsConfig.characteristics.map((i) => {
        let { name, label, type, onlyNumber } = i;
        name = `${generalName}.${name}`;

        return (
          <Form.Group className="mb-3" key={name}>
            <Form.Label>
              <i>{label}</i>
            </Form.Label>

            <Form.Control
              type={type}
              {...register(name, {
                required: true,
                valueAsNumber: onlyNumber,
              })}
            />
          </Form.Group>
        );
      })}

      <OptionsF
        register={register}
        setValue={setValue}
        selectedCarPost={selectedCarPost}
        selectedOptionHandler={selectedOptionHandler}
      />
    </>
  );
};

export default CharacteristicsF;
