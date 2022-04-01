import { Form } from "react-bootstrap";

const MyInput = ({ register, errors, label, type, nameEl, onlyNumber }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        <i>{label}</i>
      </Form.Label>
      <Form.Control
        type={type}
        {...register((name = nameEl), {
          required: "Обязательное поле",
          valueAsNumber: onlyNumber,
        })}
      />
      {errors?.[nameEl] && (
        <p className="mt-1 text-primary">{errors?.[nameEl]?.message}</p>
      )}
    </Form.Group>
  );
};

export default MyInput;
