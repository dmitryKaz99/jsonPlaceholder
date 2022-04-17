import MyNavigation from "../components/UI/MyNavigation";
import CarsBriefly from "../components/Posts/briefly/CarsBriefly";
import FilterCars from "../components/Forms/filter/CarsFilterForm";
import MyPagination from "../components/UI/MyPagination";
import { getCarsSSR } from "../utils/getAuxiliaryMethods";
import { IPost } from "../types/types";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

interface ISearch {
  cars: IPost[];
  totalCount: number;
  staticLimit: string;
}

const Search: FC<ISearch> = ({ cars, totalCount, staticLimit }) => {
  const [currentPage, setCurrentPage] = useState<number>(1),
    [defaultPath, setDefaultPath] = useState<string>("");

  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  useEffect(() => setDefaultPath(router.asPath), [totalCount]);
  useEffect(() => setCurrentPage(1), [defaultPath]);

  useEffect(() => {
    if (defaultPath && defaultPath !== "/" && defaultPath !== "/?search=id=") {
      const querySymbol: number = defaultPath.indexOf("&"),
        correctPath: string = defaultPath.substring(0, querySymbol);

      router.push(correctPath + `&page=${currentPage}`);
    }
  }, [currentPage]);

  return (
    <MyNavigation banner="Поиск" title="Страница поиска">
      <div>
        <FilterCars cars={cars} router={router} />

        <div className="d-flex justify-content-center flex-wrap mt-5">
          <CarsBriefly cars={cars} isSearch={true} />
        </div>

        {totalCount > 5 && (
          <MyPagination
            totalCount={totalCount}
            limit={staticLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </MyNavigation>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const staticLimit = "5",
      page = query.page,
      search = query.search as string;

    const queryParams = search
      ? `?${search.split(",").join("&id=")}&_limit=${staticLimit}&_page=${page}`
      : "";

    const { data, totalCount } = await getCarsSSR(queryParams);

    return { props: { cars: data, totalCount, staticLimit } };
  } catch (e) {
    return { notFound: true };
  }
};

export default Search;
