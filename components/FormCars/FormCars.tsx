import CharacteristicsF from "./CharacteristicsF";
import { inputsConfig } from "../common/inputs";
import { translateLabel } from "../../utils/translateLabel";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ChangeEvent, FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types/types";

interface IFormCars {
  refHeader: any;
}

const FormCars: FC<IFormCars> = ({ refHeader }) => {
  const { selectedCarPost, isCharacteristics, baseImg } = useTypedSelector(
    (state) => state.carsPage
  );
  const {
    postOrPutOnApi,
    uploadImg,
    setIsCharacteristics,
    setArrOptionUsingEdit,
  } = useActions();

  useEffect(() => {
    if (selectedCarPost) {
      refHeader.current.scrollIntoView({ behavior: "smooth" });

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

    return () => reset();
  }, [selectedCarPost]);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: {},
  } = useForm();

  const onSubmit = (data: IPost) => {
    if (data.image) data.image = baseImg;
    selectedCarPost
      ? postOrPutOnApi(data, selectedCarPost.id)
      : postOrPutOnApi(data);

    reset();
  };

  return (
    <div className="border p-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputsConfig.main.map((i) => {
          const { name, label, type, onlyNumber, isImg } = i;

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
                onChange={
                  isImg
                    ? (e: ChangeEvent<HTMLInputElement>) => uploadImg(e)
                    : null
                }
              />
            </Form.Group>
          );
        })}

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Технические характеристики?"
            // disabled={selectedCarPost?.technical_characteristics}
            checked={isCharacteristics}
            onChange={() => setIsCharacteristics(!isCharacteristics)}
          />
        </Form.Group>

        {isCharacteristics && (
          <CharacteristicsF
            register={register}
            setValue={setValue}
            selectedCarPost={selectedCarPost}
            isCharacteristics={isCharacteristics}
          />
        )}

        <div className="mt-5 d-flex justify-content-center">
          <Button variant="primary" type="submit">
            {selectedCarPost ? "Отредактировать" : "Создать"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormCars;
