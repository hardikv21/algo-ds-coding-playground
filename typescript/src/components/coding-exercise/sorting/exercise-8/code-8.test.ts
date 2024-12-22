import { bubbleSort } from "./code-8";

test("Check bubbleSort return correct sorted array", () => {
  expect(bubbleSort([2, 5, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 2, 2, 2, 3, 4, 5, 5,
  ]);
  expect(bubbleSort([2, 1, 1, 2, 3, 5, 1, 2, 4])).toStrictEqual([
    1, 1, 1, 2, 2, 2, 3, 4, 5,
  ]);
  expect(bubbleSort([2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});
