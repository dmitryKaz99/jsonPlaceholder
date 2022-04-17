import CarServices from "../api/CarServices";

export const getPathsSSG = async () => {
  const cars = await CarServices.getPosts();

  const paths = cars.map(({ id }) => ({ params: { id: id.toString() } }));
  return paths;
};
export const getCarSSG = async (params: any) => {
  const currentId = params.id,
    car = await CarServices.getCurrentPost(currentId);

  return car;
};

export const getCarsSSR = async (queryParams: string) => {
  const res = await CarServices.getPostsWithQueryParams(queryParams);

  const { data } = res,
    totalCount = res.headers["x-total-count"] || 0;

  return { data, totalCount };
};
