import CharacteristicsCreate from "./CharacteristicsCreate";
import OptionsCreate from "./OptionsCreate";
import MyModal from "../../UI/MyModal";
import { GENERAL_NAME, inputsConfig } from "../../common/inputs";
import { utilsConfig } from "../../../utils";
import { IPost } from "../../../types/types";
import { Form, Button } from "react-bootstrap";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { useActions } from "../../../hooks/useActions";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FC, useEffect, ChangeEvent } from "react";

interface ICarsCreateForm {
  selectedCarPost?: IPost;
}

const CarsCreateForm: FC<ICarsCreateForm> = ({ selectedCarPost }) => {
  const { isCharacteristics, baseImg, isModal, idCreatedPost } =
    useTypedSelector((state) => state.carsPage);
  const {
    postOrPutPostOnApi,
    setIsCharacteristics,
    uploadImg,
    setIsModal,
    setArrOptionUsingEdit,
    setResetForm,
  } = useActions();

  const router = useRouter();

  useEffect(() => {
    return () => {
      setResetForm();
    };
  }, []);

  useEffect(() => {
    if (selectedCarPost) {
      inputsConfig.main.forEach((i) => {
        if (i.name === "image") return;

        setValue(i.name, selectedCarPost[i.name]);
      });

      selectedCarPost.technical_characteristics
        ? setIsCharacteristics(true)
        : setIsCharacteristics(false);

      selectedCarPost.options?.forEach((o) => {
        const key = Object.keys(o),
          labelRU = utilsConfig.translateLabel(key[0]);

        setArrOptionUsingEdit({ value: key[0], label: labelRU });
      });
    }
  }, [selectedCarPost]);

  useEffect(() => {
    if (!isCharacteristics) {
      unregister(GENERAL_NAME);
    }
  }, [isCharacteristics]);

  const {
    register,
    unregister,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: IPost) => {
    if (data.image) data.image = baseImg;
    selectedCarPost
      ? postOrPutPostOnApi(data, selectedCarPost.id)
      : postOrPutPostOnApi(data);

    reset();
  };

  const exitModal = () => {
      selectedCarPost && router.push("/manager");
      setIsModal(false);
    },
    goToViewFormCreate = () => {
      router.push(`/view/${idCreatedPost}`);
      setIsModal(false);
    };

  return (
    <>
      <div className="border rounded p-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputsConfig.main.map((i) => {
            const {
              name,
              label,
              type,
              isLimitSymbols,
              isPositiveNumbers,
              isMaxNumbersPrice,
              isCorrectTelephoneNumber,
            } = i;

            return (
              <Form.Group className="mb-3" key={name}>
                <Form.Label>
                  <i>{label}</i>
                </Form.Label>

                {name === "image" ? (
                  <Form.Control
                    type={type}
                    {...register(name, { required: "Обязательное поле" })}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      uploadImg(e)
                    }
                  />
                ) : (
                  <Form.Control
                    as={name === "description" ? "textarea" : "input"}
                    type={type}
                    {...register(name, {
                      required: "Обязательное поле",
                      maxLength: isLimitSymbols,
                      pattern: isPositiveNumbers || isCorrectTelephoneNumber,
                      max: isMaxNumbersPrice,
                    })}
                    placeholder={
                      isCorrectTelephoneNumber ? "Введите номер телефона" : null
                    }
                  />
                )}

                {errors?.[name] && (
                  <p className="text-danger">{errors?.[name].message}</p>
                )}
              </Form.Group>
            );
          })}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label={`${
                isCharacteristics ? "Убрать" : "Добавить"
              } технические характеристики?`}
              checked={isCharacteristics}
              onChange={() => setIsCharacteristics(!isCharacteristics)}
            />
          </Form.Group>

          {isCharacteristics && (
            <CharacteristicsCreate
              register={register}
              errors={errors}
              setValue={setValue}
              selectedCarPost={selectedCarPost}
            />
          )}

          <OptionsCreate
            register={register}
            setValue={setValue}
            selectedCarPost={selectedCarPost}
          />

          <div className="mt-2 d-flex justify-content-center ">
            <Button variant="primary" type="submit">
              {selectedCarPost ? "Отредактировать" : "Создать"}
            </Button>

            {selectedCarPost && (
              <Button
                variant="danger"
                className="ms-3"
                onClick={() => router.push("/manager")}
              >
                Выйти
              </Button>
            )}
          </div>
        </Form>
      </div>

      {isModal && (
        <MyModal
          onAction={exitModal}
          title="Действие подтверждено"
          body={`Поздравляем, Ваш пост успешно ${
            selectedCarPost ? "отредактирован!" : "создан!"
          }`}
          textBtn={`${selectedCarPost ? "Выйти" : "Закрыть"}`}
        >
          {!selectedCarPost && (
            <Button variant="primary" onClick={goToViewFormCreate}>
              Смотреть
            </Button>
          )}
        </MyModal>
      )}
    </>
  );
};

export default CarsCreateForm;
