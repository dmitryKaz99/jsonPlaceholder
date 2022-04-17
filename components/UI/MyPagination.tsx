import { getPagesArray } from "../../utils/getPagesArray";
import { Button } from "react-bootstrap";
import { FC } from "react";

interface IMyPagination {
  totalCount: number;
  limit: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const MyPagination: FC<IMyPagination> = ({
  totalCount,
  limit,
  currentPage,
  setCurrentPage,
}) => {
  const pages = getPagesArray(totalCount, limit);

  return (
    <div className="d-flex flex-wrap justify-content-center my-4">
      {pages.map((p) => (
        <Button
          key={p}
          className={currentPage === p ? "btn-danger m-1" : "m-1"}
          onClick={() => setCurrentPage(p)}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default MyPagination;
