import OptionsF from "./OptionsF";
import MyInput from "../UI/MyInput";
import { getArrOption, getIsEdit } from "../../redux/selectors";
import {
  setSelectedOption,
  setArrOption,
  setArrOptionUsingEdit,
} from "../../redux/actions/carsActions";
import { inputsConfig } from "../common/inputs";
import { translateLabel } from "../../utils/translateLabel";
import { useEffect } from "react";
import { connect } from "react-redux";

const CharacteristicsF = ({
  register,
  setValue,
  selectedCarPost,
  setSelectedOption,
  setArrOption,
  setArrOptionUsingEdit,
  arrOption,
  isEdit,
}) => {
  const generalName = "technical_characteristics";

  useEffect(() => {
    if (selectedCarPost) {
      inputsConfig.characteristics.forEach((i) => {
        const wrapper = selectedCarPost[generalName];
        setValue(`${generalName}.${i.name}`, wrapper ? wrapper[i.name] : "");
      });

      selectedCarPost.options?.forEach((o) => {
        for (const key of Object.keys(o)) {
          const labelRU = translateLabel(key);
          setArrOptionUsingEdit({ value: key, label: labelRU });
        }
      });
    }
  }, [selectedCarPost]);

  // debug default value
  const selectedHandler = (e) => {
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
        selectedHandler={selectedHandler}
        setArrOption={setArrOption}
        arrOption={arrOption}
        isEdit={isEdit}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  arrOption: getArrOption(state),
  isEdit: getIsEdit(state),
});

export default connect(mapStateToProps, {
  setSelectedOption,
  setArrOption,
  setArrOptionUsingEdit,
})(CharacteristicsF);
