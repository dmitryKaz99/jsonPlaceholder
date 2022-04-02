import OptionsF from "./OptionsF";
import MyInput from "../UI/MyInput";
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
import { useEffect } from "react";
import { connect } from "react-redux";

const CharacteristicsF = ({
  register,
  setValue,
  selectedCarPost,
  selectedOption,
  setSelectedOption,
  setArrOption,
  arrOption,
  isEdit,
}) => {
  const generalName = "technical_characteristics";

  useEffect(() => {
    if (selectedCarPost) {
      inputsConfig.characteristics.forEach((i) => {
        const wrapper = selectedCarPost[generalName];
        setValue(`${generalName}.${i.name}`, wrapper?.[i.name]);
      });
    }
  }, [selectedCarPost]);

  const selectedOptionHandler = (e) => {
    const index = e.nativeEvent.target.selectedIndex,
      label = e.nativeEvent.target[index].text;
    const value = e.target.value;

    setSelectedOption({ value, label });
  };

  return (
    <>
      {inputsConfig.characteristics.map((i) => {
        const { name, label, type, onlyNumber } = i;

        return (
          <MyInput
            register={register}
            label={label}
            type={type}
            nameEl={`${generalName}.${name}`}
            onlyNumber={onlyNumber}
            key={name}
          />
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
