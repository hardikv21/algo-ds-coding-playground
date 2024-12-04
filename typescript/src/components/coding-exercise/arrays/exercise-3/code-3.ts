export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  // If arr1 is empty, then return arr2
  if (arr1.length === 0) {
    return arr2;
  }

  // If arr2 is empty, then return arr1
  if (arr2.length === 0) {
    return arr1;
  }

  let arr1Index: number = 0;
  let arr2Index: number = 0;
  let result: number[] = [];

  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    // If result have all arr1 items, then just add arr2 items
    if (arr1Index === arr1.length) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
    // If result have all arr2 items, then just add arr1 items
    else if (arr2Index === arr2.length) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    }
    // If arr1 item is less than or equal to arr2 item, add arr1 item to result
    else if (arr1[arr1Index] <= arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    }
    // If arr2 item is less than to arr1 item, add arr2 item to result
    else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  return result;
};
