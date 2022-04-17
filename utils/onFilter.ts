import { IPost, ISearchPost } from "../types/types";

interface IObjText {
  [obj: string]: string | number;
}
interface IObjRangeNumber {
  [obj: string]: { start: string | number; end: string | number };
}

export const onFilter = (cars: IPost[], data: ISearchPost) => {
  const { brand, model, productionYear, body, mileage, price } = data;

  const arrOne = filterArrByText(cars, { brand }),
    arrTwo = filterArrByText(arrOne, { model }),
    arrThree = filterArrByText(arrTwo, { productionYear }),
    arrFour = filterArrByText(arrThree, { body }),
    arrFive = filterArrByRangeNumber(arrFour, { mileage }),
    newCars = filterArrByRangeNumber(arrFive, { price });

  let arr = [];
  newCars.forEach((post) => arr.push(post.id));
  return arr.join(",");
};

const filterArrByText = (arr: IPost[], obj: IObjText) => {
  for (const key in obj) {
    if (obj[key] === "") return arr;

    return arr.filter((post: IPost) =>
      post.technical_characteristics?.[key]
        .toString()
        .toLocaleLowerCase()
        .includes(obj[key].toString().toLocaleLowerCase())
    );
  }
};
const filterArrByRangeNumber = (arr: IPost[], obj: IObjRangeNumber) => {
  for (const key in obj) {
    return arr.filter((post: IPost) => {
      const value =
        key === "mileage" ? post.technical_characteristics?.[key] : post[key];

      const start = obj[key].start,
        end = obj[key].end;

      if (start === "" && end === "") return arr;
      const correctStart = start === "" ? -Infinity : start,
        correctEnd = end === "" ? Infinity : end;

      return correctStart <= value && value <= correctEnd;
    });
  }
};
