import MyNavigation from "../components/UI/MyNavigation";
import CarsBriefly from "../components/Posts/briefly/CarsBriefly";
import MyLimit from "../components/UI/MyLimit";
import MyPagination from "../components/UI/MyPagination";
import { IPost } from "../types/types";
import { utilsConfig } from "../utils";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { GetServerSideProps } from "next";

interface IManager {
  cars: IPost[];
  totalCount: number;
}

const Manager: FC<IManager> = ({ cars, totalCount }) => {
  const { limit, currentPage, isUpdate } = useTypedSelector(
      (state) => state.carsPage
    ),
    { setLimit, setCurrentPage, setUpdatePageManager } = useActions();

  const router = useRouter();

  useEffect(() => {
    router.push(`/manager?limit=${limit}&page=${currentPage}`);
  }, [limit, currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [limit]);

  useEffect(() => {
    if (isUpdate) {
      cars.length === 1
        ? setCurrentPage(currentPage - 1)
        : router.replace(router.asPath);

      setUpdatePageManager(false);
    }
  }, [isUpdate]);

  return (
    <MyNavigation banner="Управление" title="Страница управления">
      <MyLimit limit={limit} setLimit={setLimit} />

      <div className="d-flex justify-content-center flex-wrap mt-5">
        <CarsBriefly cars={cars} isManager={true} />
      </div>

      <MyPagination
        totalCount={totalCount}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </MyNavigation>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const limit = query.limit || "5",
      page = query.page || 1,
      queryParams = `?_limit=${limit}&_page=${page}`;

    const { data, totalCount } = await utilsConfig.getCarsSSR(queryParams);

    if (!data) return { notFound: true };
    return {
      props: { cars: data, totalCount },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Manager;
