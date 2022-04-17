import CharacteristicsDetail from "./CharacteristicsDetail";
import OptionsDetail from "./OptionsDetail";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { IPost } from "../../../types/types";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useRouter } from "next/router";
import { FC } from "react";

interface ICarDetail {
  selectedCarPost: IPost;
}

const CarDetail: FC<ICarDetail> = ({ selectedCarPost }) => {
  const {
    image,
    name,
    description,
    price,
    contacts,
    technical_characteristics,
    options,
  } = selectedCarPost;

  const { isPrevPathSearch } = useTypedSelector((state) => state.carsPage),
    { setIsPrevPathSearch } = useActions();

  const router = useRouter();

  const goToCorrectPath = () => {
    if (isPrevPathSearch) {
      router.push("/");
      setIsPrevPathSearch(false);
    } else {
      router.push("/manager");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "30rem" }} className="shadow-sm">
        <Card.Img style={{ height: "300px" }} src={image} />

        <Card.Body>
          <div className="text-center py-3">
            <Card.Text>
              <b>Название:</b> {name}
            </Card.Text>
            <Card.Text>
              <b>Описание:</b> {description}
            </Card.Text>
          </div>

          <div className="mt-3">
            <b>Основное:</b>
          </div>

          <ListGroup variant="flush">
            <ListGroup.Item>Цена: {price}</ListGroup.Item>
            <ListGroup.Item>Контакты: {contacts}</ListGroup.Item>
          </ListGroup>

          {technical_characteristics && (
            <CharacteristicsDetail
              characteristics={technical_characteristics}
            />
          )}
          {options && <OptionsDetail options={options} />}

          <div className="d-flex justify-content-center my-3">
            <Button variant="primary" onClick={goToCorrectPath}>
              Вернуться
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarDetail;
