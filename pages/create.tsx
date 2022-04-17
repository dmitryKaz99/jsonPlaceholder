import MyNavigation from "../components/UI/MyNavigation";
import CarsCreateForm from "../components/Forms/create/CarsCreateForm";

const Create = () => {
  return (
    <MyNavigation banner="Создание" title="Страница создания">
      <CarsCreateForm />
    </MyNavigation>
  );
};

export default Create;
