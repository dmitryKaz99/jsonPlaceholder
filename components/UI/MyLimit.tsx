import { Form } from "react-bootstrap";
import { FC, ChangeEvent } from "react";

interface IMyLimit {
  limit: string;
  setLimit: (limit: string) => void;
}

const MyLimit: FC<IMyLimit> = ({ limit, setLimit }) => {
  return (
    <div className="d-flex align-items-center flex-column pb-3">
      <div>
        <Form.Label>
          <i>Выбрать количество постов:</i>
        </Form.Label>

        <Form.Select
          size="sm"
          style={{ width: "17rem" }}
          defaultValue={limit}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setLimit(e.target.value)
          }
        >
          {[5, 10, 15].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default MyLimit;
