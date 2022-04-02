import CharacteristicsP from "./CharacteristicsP";
import OptionsP from "./OptionsP";
import {
  getCars,
  getIsLoading,
  getError,
  getSelectedCarPost,
} from "../../redux/selectors";
import { setSelectedCarPost } from "../../redux/actions/carsActions";
import { getCarsWithApi } from "../../redux/creators/carsCreators";
import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { connect } from "react-redux";

const Cars = ({
  cars,
  isLoading,
  err,
  selectedCarPost,
  setSelectedCarPost,
  getCarsWithApi,
}) => {
  useEffect(() => getCarsWithApi(), []);

  // if (!cars.length) {
  //   return (
  //     <div className="text-center my-5">
  //       <i>Карточек</i> еще нет...
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {isLoading && <p>LOADING...</p>}
        {err && <p>{err}</p>}

        {cars.map((post) => {
          return (
            <div key={post.id} className="p-3">
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={post.image} />

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
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
  isLoading: getIsLoading(state),
  err: getError(state),
  selectedCarPost: getSelectedCarPost(state),
});

export default connect(mapStateToProps, { getCarsWithApi, setSelectedCarPost })(
  Cars
);
