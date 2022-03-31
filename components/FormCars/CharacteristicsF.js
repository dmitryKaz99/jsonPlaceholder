import OptionsF from "./OptionsF";
import { getArrOption, getSelectedCarPost } from "../../redux/selectors";
import {
  setSelectedOption,
  setArrOption,
} from "../../redux/actions/carsActions";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { connect } from "react-redux";

const generalName = "technical_characteristics";
const inputsCharacteristics = [
  { nameEl: "brand", label: "Марка", type: "text" },
  { nameEl: "model", label: "Модель", type: "text" },
  {
    nameEl: "productionYear",
    label: "Год выпуска",
    type: "number",
    onlyNumber: true,
  },
  { nameEl: "body", label: "Кузов", type: "text" },
];

const CharacteristicsF = ({
  register,
  setValue,
  setSelectedOption,
  arrOption,
  setArrOption,
  selectedCarPost,
}) => {
  // finish with it
  useEffect(() => {
    inputsCharacteristics.forEach((i) => {
      const parentEl = selectedCarPost && selectedCarPost[generalName];

      setValue(
        `${generalName}.${i.nameEl}`,
        selectedCarPost ? parentEl[i.nameEl] : ""
      );
    });
  }, [selectedCarPost]);

  const selectedHandler = (e) => {
    const index = e.nativeEvent.target.selectedIndex,
      label = e.nativeEvent.target[index].text;
    const value = e.target.value;

    setSelectedOption({ value, label });
  };

  return (
    <>
      {inputsCharacteristics.map((i) => {
        const { nameEl, label, type, onlyNumber } = i;

        return (
          <Form.Group className="mb-3" key={nameEl}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={type}
              {...register((name = `${generalName}.${nameEl}`), {
                required: "Обязательное поле",
                valueAsNumber: onlyNumber,
              })}
            />
          </Form.Group>
        );
      })}

      <OptionsF
        register={register}
        selectedHandler={selectedHandler}
        setArrOption={setArrOption}
        arrOption={arrOption}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  arrOption: getArrOption(state),
  selectedCarPost: getSelectedCarPost(state),
});

export default connect(mapStateToProps, {
  setSelectedOption,
  setArrOption,
})(CharacteristicsF);
