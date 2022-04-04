import OptionsF from "./OptionsF";
import {
  getSelectedOption,
  getArrOption,
  getIsEdit,
} from "../../redux/selectors";
import {
  setSelectedOption,
  setArrOption,
} from "../../redux/actions/carsActions";
import { inputsConfig } from "../common/inputs";
import { Form } from "react-bootstrap";
import { FC, useEffect } from "react";
import { connect } from "react-redux";

const CharacteristicsF = ({
  register,
  setValue,
  selectedCarPost,
  isCharacteristics,
  selectedOption,
  setSelectedOption,
  setArrOption,
  arrOption,
  isEdit,
}) => {
  const generalName = "technical_characteristics";

  useEffect(() => {
    if (selectedCarPost && isCharacteristics) {
      inputsConfig.characteristics.forEach((i) => {
        const wrapper = selectedCarPost[generalName];
        wrapper && setValue(`${generalName}.${i.name}`, wrapper[i.name]);
      });
    }
  }, [selectedCarPost, isCharacteristics]);

  const selectedOptionHandler = (e) => {
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
        selectedOption={selectedOption}
        selectedOptionHandler={selectedOptionHandler}
        setArrOption={setArrOption}
        arrOption={arrOption}
        isEdit={isEdit}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedOption: getSelectedOption(state),
  arrOption: getArrOption(state),
  isEdit: getIsEdit(state),
});

export default connect(mapStateToProps, {
  setSelectedOption,
  setArrOption,
})(CharacteristicsF);