import CharacteristicsF from "./CharacteristicsF";
import MyInput from "../UI/MyInput";
import {
  getIsCharacteristics,
  getSelectedCarPost,
} from "../../redux/selectors";
import {
  setIsCharacteristics,
  postOrPutOnApi,
} from "../../redux/actions/carsActions";
import { inputsConfig } from "../common/inputs";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";

const FormCars = ({
  isCharacteristics,
  selectedCarPost,
  setIsCharacteristics,
  postOrPutOnApi,
}) => {
  const refForm = useRef();

  useEffect(() => {
    if (selectedCarPost) {
      refForm.current.scrollIntoView();

      inputsConfig.main.forEach((i) =>
        setValue(i.name, selectedCarPost[i.name])
      );

      selectedCarPost.technical_characteristics
        ? setIsCharacteristics(true)
        : setIsCharacteristics(false);
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
    selectedCarPost
      ? postOrPutOnApi(data, selectedCarPost.id)
      : postOrPutOnApi(data);

    reset();
  };

  return (
    <div className="border p-5" ref={refForm}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputsConfig.main.map((i) => {
          const { name, label, type, onlyNumber } = i;

          // download image
          return (
            <MyInput
              register={register}
              errors={errors}
              label={label}
              type={type}
              nameEl={name}
              onlyNumber={onlyNumber}
              key={name}
            />
          );
        })}

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Технические характеристики?"
            value={isCharacteristics}
            disabled={selectedCarPost?.technical_characteristics && true}
            onChange={() => setIsCharacteristics(!isCharacteristics)}
          />
        </Form.Group>

        {/* add err */}
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
});

export default connect(mapStateToProps, {
  setIsCharacteristics,
  postOrPutOnApi,
})(FormCars);
