import { mergeSort } from "./code-11";

test("Check mergeSort return correct sorted array", () => {
  expect(mergeSort([2, 5, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 2, 2, 2, 3, 4, 5, 5,
  ]);
  expect(mergeSort([2, 1, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 1, 2, 2, 2, 3, 4, 5,
  ]);
  expect(mergeSort([2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});
