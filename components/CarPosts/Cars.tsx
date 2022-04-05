import CharacteristicsP from "./CharacteristicsP";
import OptionsP from "./OptionsP";
import { Button, Card } from "react-bootstrap";
import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types/types";

interface ICars {
  cars: IPost[];
}

const Cars: FC<ICars> = ({ cars }) => {
  const { selectedCarPost } = useTypedSelector((state) => state.carsPage);
  const { setSelectedCarPost } = useActions();

  if (!cars.length)
    return (
      <span>
        <i>Постов</i> еще нет...
      </span>
    );

  return (
    <>
      {cars.map((post) => {
        return (
          <div key={post.id} className="p-3">
            <Card style={{ width: "25rem" }}>
              <Card.Img style={{ height: "275px" }} src={post.image} />

              <Card.Body>
                <div className="text-center mb-3">
                  <Card.Title>{post.name}</Card.Title>
                  <Card.Text> {post.description}</Card.Text>
                </div>

                <ul>
                  <li>Цена: {post.price}</li>
                  <li>Контакты: {post.contacts}</li>
                </ul>

                {post.technical_characteristics && (
                  <CharacteristicsP
                    characteristics={post.technical_characteristics}
                  />
                )}
                {post.options && <OptionsP options={post.options} />}
              </Card.Body>

              <div className="mb-4 d-flex justify-content-center">
                <Button
                  disabled={selectedCarPost === post}
                  variant={selectedCarPost === post ? "danger" : "warning"}
                  onClick={() => setSelectedCarPost(post)}
                >
                  Редактировать
                </Button>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Cars;
