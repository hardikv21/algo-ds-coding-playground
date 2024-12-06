export const findRepeatedNumber = (arr: number[]): number | undefined => {
  if (arr.length === 0 || arr.length === 1) {
    return undefined;
  }

  // Create an empty object to track numbers
  const arrObj: { [key: number]: boolean } = {};

  for (let i = 0; i < arr.length; i++) {
    // Check number as a key is not present in the arrObj
    if (arrObj[arr[i]] === undefined) {
      arrObj[arr[i]] = true;
    }
    // If number as a key is present in the arrObj, then it is a first repeated number
    else {
      return arr[i];
    }
  }

  return undefined;
};
