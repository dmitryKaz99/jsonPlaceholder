import CharacteristicsF from "./CharacteristicsF";
import MyInput from "../UI/MyInput";
import {
  getIsCharacteristics,
  getSelectedCarPost,
  getBaseImg,
} from "../../redux/selectors";
import {
  setIsCharacteristics,
  setArrOptionUsingEdit,
} from "../../redux/actions/carsActions";
import { postOrPutOnApi, uploadImg } from "../../redux/creators/carsCreators";
import { inputsConfig } from "../common/inputs";
import { translateLabel } from "../../utils/translateLabel";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";

const FormCars = ({
  isCharacteristics,
  selectedCarPost,
  baseImg,
  setIsCharacteristics,
  postOrPutOnApi,
  uploadImg,
  setArrOptionUsingEdit,
}) => {
  const refForm = useRef();

  useEffect(() => {
    if (selectedCarPost) {
      refForm.current.scrollIntoView();

      inputsConfig.main.forEach((i) => {
        setValue(i.name, selectedCarPost[i.name]);
      });

      selectedCarPost.technical_characteristics
        ? setIsCharacteristics(true)
        : setIsCharacteristics(false);

      selectedCarPost.options?.forEach((o) => {
        for (const key of Object.keys(o)) {
          const labelRU = translateLabel(key);
          setArrOptionUsingEdit({ value: key, label: labelRU });
        }
      });
    }
  }, [selectedCarPost]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.image) data.image = baseImg;
    selectedCarPost
      ? postOrPutOnApi(data, selectedCarPost.id)
      : postOrPutOnApi(data);

    reset();
  };

  return (
    <div className="border p-5" ref={refForm}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputsConfig.main.map((i) => {
          const { name, label, type, onlyNumber, isImg } = i;

          return (
            <MyInput
              register={register}
              label={label}
              type={type}
              nameEl={name}
              onlyNumber={onlyNumber}
              key={name}
              isImg={isImg}
              uploadImg={uploadImg}
              baseImg={baseImg}
            />
          );
        })}

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Технические характеристики?"
            disabled={selectedCarPost?.technical_characteristics}
            checked={isCharacteristics}
            onChange={() => setIsCharacteristics(!isCharacteristics)}
          />
        </Form.Group>

        {isCharacteristics && (
          <CharacteristicsF
            register={register}
            setValue={setValue}
            selectedCarPost={selectedCarPost}
          />
        )}

        <div className="mt-5 d-flex justify-content-center">
          <Button className="my-3" variant="primary" type="submit">
            {selectedCarPost ? "Отредактировать" : "Создать"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isCharacteristics: getIsCharacteristics(state),
  selectedCarPost: getSelectedCarPost(state),
  baseImg: getBaseImg(state),
});

export default connect(mapStateToProps, {
  setIsCharacteristics,
  postOrPutOnApi,
  uploadImg,
  setArrOptionUsingEdit,
})(FormCars);
