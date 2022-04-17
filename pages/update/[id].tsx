import MyNavigation from "../../components/UI/MyNavigation";
import CarsCreateForm from "../../components/Forms/create/CarsCreateForm";
import { getPathsSSG, getCarSSG } from "../../utils/getAuxiliaryMethods";
import { IPost } from "../../types/types";
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

interface IUpdate {
  car: IPost;
}

const Update: FC<IUpdate> = ({ car }) => {
  return (
    <MyNavigation
      banner={`id: ${car.id}`}
      title={`Редактирование поста, id: ${car.id}`}
    >
      <CarsCreateForm selectedCarPost={car} />
    </MyNavigation>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPathsSSG();
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const car = await getCarSSG(params);

  if (!car) return { notFound: true };
  return { props: { car } };
};

export default Update;
