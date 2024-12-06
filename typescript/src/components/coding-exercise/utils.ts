// This function will create string (number) array to number array
export const convertStringToNumber = (str: string): number[] => {
  const result: number[] = [];

  str
    .split(",")
    .forEach(
      (item) =>
        (!!item || item === "0") &&
        !isNaN(Number(item)) &&
        result.push(Number(item)),
    );

  return result;
};
