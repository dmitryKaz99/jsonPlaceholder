import { Form } from "react-bootstrap";

const MyInput = ({
  register,
  label,
  type,
  nameEl,
  onlyNumber,
  isImg,
  uploadImg,
  baseImg,
}) => {
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
        onChange={isImg ? (e) => uploadImg(e, baseImg) : null}
      />
    </Form.Group>
  );
};

export default MyInput;
