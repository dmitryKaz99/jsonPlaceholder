import { optionsConfig } from "../common/options";
import { Form, Button } from "react-bootstrap";
import { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types/types";

interface IOptionsF {
  register: any;
  setValue: any;
  selectedCarPost: IPost;
  selectedOptionHandler: (e: any) => void;
}

const OptionsF: FC<IOptionsF> = ({
  register,
  setValue,
  selectedCarPost,
  selectedOptionHandler,
}) => {
  const { selectedOption, arrOption, isEdit } = useTypedSelector(
    (state) => state.carsPage
  );
  const { setArrOption } = useActions();

  useEffect(() => {
    if (isEdit) {
      arrOption.forEach((o, i: number) => {
        const wrapper = selectedCarPost.options[i];
        wrapper && setValue(`options.${i}.${o.value}`, wrapper[o.value]);
      });
    }
  }, [isEdit]);

  console.log(selectedOption);

  return (
    <>
      <div className="d-flex align-items-center">
        <Form.Select
          aria-label="Default select example"
          className="me-3"
          onChange={selectedOptionHandler}
          defaultValue={"DEFAULT"}
        >
          <option disabled value={"DEFAULT"}>
            Выбрать опцию
          </option>

          {optionsConfig.map((o) => {
            return (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            );
          })}
        </Form.Select>

        <Button
          variant="warning"
          className="my-3"
          disabled={!selectedOption}
          onClick={setArrOption}
        >
          Добавить
        </Button>
      </div>

      <div>
        {arrOption.map((o, i) => {
          return (
            <Form.Group key={i} className="mb-3">
              <Form.Label>
                <i>{o.label}</i>
              </Form.Label>

              <Form.Control
                {...register(`options.${i}.${o.value}`)}
                placeholder="Описание"
              />
            </Form.Group>
          );
        })}
      </div>
    </>
  );
};

export default OptionsF;
