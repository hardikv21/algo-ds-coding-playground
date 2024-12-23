const mergeArray = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];

  let arr1Index = 0;
  let arr2Index = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1Index < arr1.length && arr2Index < arr2.length) {
      if (arr1[arr1Index] < arr2[arr2Index]) {
        result.push(arr1[arr1Index]);
        arr1Index++;
      } else {
        result.push(arr2[arr2Index]);
        arr2Index++;
      }
    } else if (arr1Index < arr1.length) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  return result;
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length > 1) {
    const middleIndex = Math.round(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex, arr.length);

    return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
  }

  return arr;
};
