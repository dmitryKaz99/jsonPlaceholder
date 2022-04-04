import FormCars from "../components/FormCars/FormCars";
import Cars from "../components/CarPosts/Cars";
import { MyPreloader } from "../components/UI/MyPreloader";
import { getCars, getIsLoading, getError } from "../redux/selectors";
import { getCarsWithApi } from "../redux/thunks/carsThunks";
import { Container } from "react-bootstrap";
import { FC, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";

const Main = ({ cars, isLoading, err, getCarsWithApi }) => {
  const refHeader = useRef();
  useEffect(() => getCarsWithApi(), []);

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

const mapStateToProps = (state: RootState) => ({
  cars: getCars(state),
  isLoading: getIsLoading(state),
  err: getError(state),
});

export default connect(mapStateToProps, { getCarsWithApi })(Main);
