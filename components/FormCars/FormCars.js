import CharacteristicsF from "./CharacteristicsF";
import {
  getIsCharacteristics,
  getSelectedCarPost,
} from "../../redux/selectors";
import {
  setIsOpenForm,
  setIsCharacteristics,
  postCarForm,
} from "../../redux/actions/carsActions";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const inputsMain = [
  { name: "name", label: "Название", type: "text" },
  { name: "description", label: "Описание", type: "text" },
  { name: "price", label: "Цена", type: "number", onlyNumber: true },
  { name: "image", label: "Фото", type: "file" },
  { name: "contacts", label: "Контакты", type: "text" },
];

const FormCars = ({
  setIsOpenForm,
  isCharacteristics,
  setIsCharacteristics,
  postCarForm,
  selectedCarPost,
}) => {
  useEffect(() => {
    inputsMain.forEach((i) =>
      setValue(i.name, selectedCarPost ? selectedCarPost[i.name] : "")
    );

    selectedCarPost?.technical_characteristics
      ? setIsCharacteristics(true)
      : setIsCharacteristics(false);
  }, [selectedCarPost]);

  // testing Image value

  // const [postImage, setPostImage] = useState(null);
  // const foo = (e) => {
  //   setPostImage(e.target.files[0].name);
  // };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if (data.image) data.image = postImage;

    postCarForm(data);
    setIsOpenForm(false);
  };

  // add error, etc
  return (
    <div className="border p-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputsMain.map((i) => {
          const { name, label, type, onlyNumber } = i;

          return (
            <Form.Group className="mb-3" key={name}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type={type}
                {...register(name, {
                  required: "Обязательное поле",
                  valueAsNumber: onlyNumber,
                })}
              />
            </Form.Group>
          );
        })}

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Технические характеристики?"
            value={isCharacteristics}
            onChange={() => setIsCharacteristics(!isCharacteristics)}
          />
        </Form.Group>

        {isCharacteristics && (
          <CharacteristicsF register={register} setValue={setValue} />
        )}

        <div className="mt-5 d-flex justify-content-center">
          <Button className="my-3" variant="primary" type="submit">
            Отправить
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
  setIsOpenForm,
  setIsCharacteristics,
  postCarForm,
})(FormCars);
