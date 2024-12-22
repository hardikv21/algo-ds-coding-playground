export const insertionSort = (arr: number[]): number[] => {
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      let correctIndex = i;

      for (let j = i - 1; j > -1; j--) {
        if (arr[j] > arr[i]) {
          correctIndex = j;
        } else {
          break;
        }
      }

      if (correctIndex !== i) {
        const temp = arr[i];
        arr.splice(i, 1);
        arr.splice(correctIndex, 0, temp);
      }
    }
  }

  return arr;
};
