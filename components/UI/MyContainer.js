import { Container } from "react-bootstrap";

const MyContainer = ({ children }) => {
  return (
    <>
      <h1 className="mt-5 text-center">Страница формы</h1>
      <Container className="mb-5">{children}</Container>
    </>
  );
};

export default MyContainer;
