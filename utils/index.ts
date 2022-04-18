import { convertBase64 } from "./convertBase64";
import { getPathsSSG, getCarSSG, getCarsSSR } from "./getAuxiliaryMethods";
import { getPagesArray } from "./getPagesArray";
import { onFilter } from "./onFilter";
import { translateLabel } from "./translateLabel";
import { IPost, ISearchPost } from "../types/types";

export const utilsConfig = {
  convertBase64: (img: File) => convertBase64(img),

  getPathsSSG: () => getPathsSSG(),
  getCarSSG: (params: any) => getCarSSG(params),
  getCarsSSR: (queryParams: string) => getCarsSSR(queryParams),

  getPagesArray: (totalCount: number, limit: string) =>
    getPagesArray(totalCount, limit),

  onFilter: (cars: IPost[], data: ISearchPost) => onFilter(cars, data),

  translateLabel: (label: string) => translateLabel(label),
};
