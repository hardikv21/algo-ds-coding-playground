import { selectionSort } from "./code-9";

test("Check selectionSort return correct sorted array", () => {
  expect(selectionSort([2, 5, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 2, 2, 2, 3, 4, 5, 5,
  ]);
  expect(selectionSort([2, 1, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 1, 2, 2, 2, 3, 4, 5,
  ]);
  expect(selectionSort([2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});
