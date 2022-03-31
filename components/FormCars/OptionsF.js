import { Form, Button } from "react-bootstrap";

const standardOptions = [
  { value: "other", label: "Любая другая опция" },
  { value: "conditioner", label: "Кондиционер" },
  { value: "airbags", label: "Подушки безопасности" },
  { value: "multimedia", label: "Мультимедия" },
  { value: "cruize_control", label: "Круиз контроль" },
];

// debug default value
const OptionsF = ({ register, selectedHandler, setArrOption, arrOption }) => {
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

          {standardOptions.map((o) => {
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
              <Form.Label>{o.label}</Form.Label>
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
