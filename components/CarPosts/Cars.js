import CharacteristicsP from "./CharacteristicsP";
import OptionsP from "./OptionsP";
import { getCars } from "../../redux/selectors";
import { setSelectedCarPost } from "../../redux/actions/carsActions";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";

const Cars = ({ cars, setSelectedCarPost }) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap mt-5">
        {cars.map((post) => {
          return (
            <div key={post.id} className="p-3">
              <Card style={{ width: "20rem" }}>
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

const mapStateToProps = (state) => ({ cars: getCars(state) });

export default connect(mapStateToProps, { setSelectedCarPost })(Cars);
