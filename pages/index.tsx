import FormCars from "../components/FormCars/FormCars";
import Cars from "../components/CarPosts/Cars";
import { MyPreloader } from "../components/UI/MyPreloader";
import { Container } from "react-bootstrap";
import { FC, useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useActions } from "../hooks/useActions";

const Main: FC = () => {
  const { cars, isLoading, err } = useTypedSelector((state) => state.carsPage);
  const { getCarsWithApi } = useActions();

  const refHeader = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const foo = () => getCarsWithApi();
    foo();
  }, []);

  return (
    <Container className="my-5">
      <h1 className="mb-5 text-center" ref={refHeader}>
        Страница формы
      </h1>
      <FormCars refHeader={refHeader} />

      <div className="d-flex justify-content-center flex-wrap mt-5">
        {isLoading ? (
          <MyPreloader />
        ) : err ? (
          <p className="text-danger">{err}</p>
        ) : (
          <Cars cars={cars} />
        )}
      </div>
    </Container>
  );
};

export default Main;
