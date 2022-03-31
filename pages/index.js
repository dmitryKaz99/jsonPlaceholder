import MyContainer from "../components/UI/MyContainer";
import FormCars from "../components/FormCars/FormCars";
import Cars from "../components/CarPosts/Cars";
import { getIsFormOpen, getToggleUpdatePosts } from "../redux/selectors";
import { getCarsWithApi, setIsOpenForm } from "../redux/actions/carsActions";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { connect } from "react-redux";

const Main = ({
  getCarsWithApi,
  isFormOpen,
  setIsOpenForm,
  toggleUpdatePosts,
}) => {
  useEffect(() => {
    getCarsWithApi();
  }, [toggleUpdatePosts]);

  return (
    <MyContainer>
      <div className="my-5 d-flex justify-content-center">
        <Button
          variant={isFormOpen ? "danger" : "primary"}
          onClick={() => setIsOpenForm(!isFormOpen)}
        >
          {isFormOpen ? "Закрыть форму" : "Открыть форму"}
        </Button>
      </div>

      {isFormOpen && <FormCars />}
      <Cars />
    </MyContainer>
  );
};

const mapStateToProps = (state) => ({
  isFormOpen: getIsFormOpen(state),
  toggleUpdatePosts: getToggleUpdatePosts(state),
});

export default connect(mapStateToProps, { getCarsWithApi, setIsOpenForm })(
  Main
);
