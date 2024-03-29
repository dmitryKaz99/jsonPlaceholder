import MyNavigation from "../../components/UI/MyNavigation";
import CarDetail from "../../components/Posts/detail/CarDetail";
import { utilsConfig } from "../../utils";
import { IPost } from "../../types/types";
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

interface IView {
  car: IPost;
}

const View: FC<IView> = ({ car }) => {
  return (
    <MyNavigation
      banner={`id: ${car.id}`}
      title={`Просмотр поста, id: ${car.id}`}
    >
      <CarDetail selectedCarPost={car} />
    </MyNavigation>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await utilsConfig.getPathsSSG();
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const car = await utilsConfig.getCarSSG(params);

  if (!car) return { notFound: true };
  return { props: { car } };
};

export default View;
