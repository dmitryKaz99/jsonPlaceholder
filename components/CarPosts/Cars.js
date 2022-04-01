import CharacteristicsP from "./CharacteristicsP";
import OptionsP from "./OptionsP";
import { getCars, getIsLoading, getError } from "../../redux/selectors";
import {
  getCarsWithApi,
  setSelectedCarPost,
} from "../../redux/actions/carsActions";
import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { connect } from "react-redux";

const Cars = ({ cars, isLoading, err, setSelectedCarPost, getCarsWithApi }) => {
  useEffect(() => getCarsWithApi(), []);

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
                  <Card.Title>{post.name}</Card.Title>
                  <Card.Text> {post.description}</Card.Text>

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

                <Button
                  variant="warning"
                  onClick={() => setSelectedCarPost(post)}
                >
                  Редактировать
                </Button>
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
});

export default connect(mapStateToProps, { getCarsWithApi, setSelectedCarPost })(
  Cars
);
