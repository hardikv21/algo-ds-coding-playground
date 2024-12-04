export const isArraysContainCommonItem1 = (
  arr1: string[],
  arr2: string[],
): boolean => {
  // If any array is empty return false
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  // Find the biggest array list
  const bigArrayName: string = arr1.length > arr2.length ? "arr1" : "arr2";

  // Convert the smallest array into the object
  const arrObj: { [key: string]: boolean } = {};

  (bigArrayName === "arr1" ? arr2 : arr1).forEach((item) => {
    arrObj[item] = true;
  });

  // Loop through the biggest array and check the item exists in the newly created object
  for (let i = 0; i < (bigArrayName === "arr1" ? arr1 : arr2).length; i++) {
    if (arrObj[(bigArrayName === "arr1" ? arr1 : arr2)[i]]) {
      return true;
    }
  }

  return false;
};

export const isArraysContainCommonItem2 = (
  arr1: string[],
  arr2: string[],
): boolean => arr1.some((item) => arr2.includes(item));
