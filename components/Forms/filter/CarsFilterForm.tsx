import { IInput, inputsConfig } from "../../common/inputs";
import { bodyOptionsAdd } from "../../common/options";
import { onFilter } from "../../../utils/onFilter";
import { IPost, ISearchPost } from "../../../types/types";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NextRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface ICarsFilterForm {
  cars: IPost[];
  router: NextRouter;
}

const CarsFilterForm: FC<ICarsFilterForm> = ({ cars, router }) => {
  const [carsForFilter, setCarsForFilter] = useState<IPost[]>([]);

  useEffect(() => {
    router.asPath === "/" && setCarsForFilter(cars);
  }, [router]);

  let priceEl: IInput | null = null;
  inputsConfig.main.forEach((i) => {
    if (i.name === "price") priceEl = i;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: ISearchPost) => {
    const res = onFilter(carsForFilter, data);
    res === ""
      ? router.push(`/?search=id=`)
      : router.push(`/?search=id=${res}&page=1`);
  };

  return (
    <div className="border rounded p-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputsConfig.characteristics.map((i) => {
          const { name, label, type, isCorrectProductionYear } = i;

          if (name === "mileage")
            return (
              <DoubleInput
                register={register}
                input={i}
                errors={errors}
                key={name}
              />
            );

          return (
            <Form.Group className="mb-3" key={name}>
              <Form.Label>
                <i>{label}</i>
              </Form.Label>

              {name == "body" ? (
                <Form.Select {...register(name)}>
                  <option value="">Без выбора</option>

                  {bodyOptionsAdd.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={type}
                  {...register(name, {
                    min: isCorrectProductionYear?.min,
                    max: isCorrectProductionYear?.max,
                  })}
                />
              )}

              {errors?.[name] && (
                <p className="mt-1 text-danger">{errors?.[name]?.message}</p>
              )}
            </Form.Group>
          );
        })}
        <DoubleInput register={register} input={priceEl} errors={errors} />

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Найти
          </Button>
        </div>
      </Form>
    </div>
  );
};

interface IDoubleInput {
  register: any;
  errors: any;
  input: IInput;
}

const DoubleInput: FC<IDoubleInput> = ({ register, errors, input }) => {
  const {
    name,
    type,
    isPositiveNumbers,
    isMaxNumbersPrice,
    isMaxNumbersMileage,
  } = input;

  return (
    <div className="d-flex" key={name}>
      <div style={{ width: "50%" }} className="me-3">
        <Form.Label>
          <i>{name === "mileage" ? "Пробег" : "Цена"} от</i>
        </Form.Label>

        <Form.Group className="mb-3">
          <Form.Control
            type={type}
            {...register(`${name}.start`, {
              pattern: isPositiveNumbers,
            })}
          />

          {errors?.[name]?.["start"] && (
            <p className="mt-1 text-danger">
              {errors?.[name]?.["start"]?.message}
            </p>
          )}
        </Form.Group>
      </div>

      <div style={{ width: "50%" }}>
        <Form.Label>
          <i>до</i>
        </Form.Label>

        <Form.Group className="mb-3">
          <Form.Control
            type={type}
            {...register(`${name}.end`, {
              pattern: isPositiveNumbers,
              max: isMaxNumbersPrice || isMaxNumbersMileage,
            })}
          />

          {errors?.[name]?.["end"] && (
            <p className="mt-1 text-danger">
              {errors?.[name]?.["end"]?.message}
            </p>
          )}
        </Form.Group>
      </div>
    </div>
  );
};

export default CarsFilterForm;
