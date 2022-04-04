import CharacteristicsP from "./CharacteristicsP";
import OptionsP from "./OptionsP";
import { getSelectedCarPost } from "../../redux/selectors";
import { setSelectedCarPost } from "../../redux/actions/carsActions";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { FC } from "react";

const Cars = ({ cars, selectedCarPost, setSelectedCarPost }) => {
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

const mapStateToProps = (state) => ({
  selectedCarPost: getSelectedCarPost(state),
});

export default connect(mapStateToProps, { setSelectedCarPost })(Cars);
