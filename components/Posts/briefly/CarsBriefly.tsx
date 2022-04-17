import MyModal from "../../UI/MyModal";
import { MyPreloader } from "../../UI/MyPreloader";
import { inputsConfig } from "../../common/inputs";
import { IPost } from "../../../types/types";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { useActions } from "../../../hooks/useActions";
import { Button, Card, ListGroup } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface ICarsBriefly {
  cars: IPost[];
  isManager?: boolean;
  isSearch?: boolean;
}

const CarsBriefly: FC<ICarsBriefly> = ({ cars, isManager, isSearch }) => {
  const { isLoading, isModal, idForDelete } = useTypedSelector(
      (state) => state.carsPage
    ),
    {
      setIsLoading,
      deletePostOnApi,
      setIsModal,
      setIdForDelete,
      setIsPrevPathSearch,
    } = useActions();

  const router = useRouter();

  const startLoading = () => setIsLoading(true),
    stopLoading = () => setIsLoading(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const exitModal = () => setIsModal(false),
    goToViewFromSearch = (id: number) => {
      setIsPrevPathSearch(true);
      router.push(`/view/${id}`);
    };

  if (isLoading) return <MyPreloader />;
  if (!cars.length)
    return (
      <span>
        <i>Посты</i> не были обнаружены...
      </span>
    );

  return (
    <>
      {cars.map((post) => (
        <Card style={{ width: "25rem" }} className="m-2" key={post.id}>
          <Card.Header className="text-center">
            <i>id: {post.id}</i>
          </Card.Header>

          <div className="p-3 pb-0">
            <Card.Img
              style={{ height: "250px" }}
              className="shadow-lg"
              src={post.image}
            />
          </div>

          <Card.Body className="p-4">
            <div className="text-center py-3">
              <Card.Text>
                <b>Название:</b> {post.name}
              </Card.Text>
              <Card.Text>
                <b>Описание:</b> {post.description}
              </Card.Text>
            </div>

            {isManager && (
              <div className="d-flex justify-content-center mt-3 flex-wrap">
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={() => {
                    router.push(`/view/${post.id}`);
                  }}
                >
                  Смотреть
                </Button>

                <Button
                  className="m-1"
                  variant="warning"
                  onClick={() => router.push("/update/" + post.id)}
                >
                  Редактировать
                </Button>

                <Button
                  className="m-1"
                  variant="danger"
                  onClick={() => setIdForDelete(post.id)}
                >
                  Удалить
                </Button>
              </div>
            )}

            {isSearch && (
              <>
                <div className="mt-3">
                  <b>Характеристики:</b>
                </div>

                <ListGroup variant="flush">
                  {inputsConfig.characteristics.map((i) => {
                    const { label, name } = i;

                    return (
                      <ListGroup.Item key={i.name}>
                        {label}:{" "}
                        {post.technical_characteristics?.[name] ||
                          "Отсутствует"}
                      </ListGroup.Item>
                    );
                  })}
                  <ListGroup.Item>Цена: {post.price}</ListGroup.Item>
                </ListGroup>

                <div className="d-flex justify-content-center mt-3">
                  <Button
                    className="m-1"
                    variant="primary"
                    onClick={() => goToViewFromSearch(post.id)}
                  >
                    Смотреть
                  </Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}

      {isModal && (
        <MyModal
          onAction={exitModal}
          title="Подтвердите действие"
          body="Вы уверены, что хотите удалить данный пост?"
          textBtn="Нет"
        >
          <Button variant="danger" onClick={() => deletePostOnApi(idForDelete)}>
            Да
          </Button>
        </MyModal>
      )}
    </>
  );
};

export default CarsBriefly;
