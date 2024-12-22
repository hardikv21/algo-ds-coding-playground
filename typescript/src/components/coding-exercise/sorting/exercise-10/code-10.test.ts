import { insertionSort } from "./code-10";

test("Check insertionSort return correct sorted array", () => {
  expect(insertionSort([2, 5, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 2, 2, 2, 3, 4, 5, 5,
  ]);
  expect(insertionSort([2, 1, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 1, 2, 2, 2, 3, 4, 5,
  ]);
  expect(insertionSort([2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});
