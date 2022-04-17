export const getPagesArray = (totalCount: number, limit: string) => {
  const pagesCount: number = Math.ceil(totalCount / +limit);

  let result = [];
  for (let i = 1; i <= pagesCount; i++) result.push(i);
  return result;
};
