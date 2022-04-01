import { optionsConfig } from "../common/options";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";

const OptionsF = ({
  register,
  setValue,
  selectedCarPost,
  selectedHandler,
  setArrOption,
  arrOption,
  isEdit,
}) => {
  useEffect(() => {
    if (isEdit) {
      arrOption.forEach((o, i) => {
        const wrapper = selectedCarPost.options[i];
        setValue(`options.${i}.${o.value}`, wrapper[o.value]);
      });
    }
  }, [isEdit]);

  return (
    <>
      <div className="d-flex align-items-center">
        <Form.Select
          aria-label="Default select example"
          className="me-3"
          onChange={selectedHandler}
          defaultValue={"DEFAULT"}
        >
          <option disabled value={"DEFAULT"}>
            Выбрать
          </option>

          {optionsConfig.map((o) => {
            return (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            );
          })}
        </Form.Select>

        <Button variant="warning" className="my-3" onClick={setArrOption}>
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
                {...register((name = `options.${i}.${o.value}`))}
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
