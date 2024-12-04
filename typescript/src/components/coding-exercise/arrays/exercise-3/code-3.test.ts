import { mergeSortedArrays } from "./code-3";

test("Check mergeSortedArrays returns a correct merge array", () => {
  expect(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toStrictEqual([
    0, 3, 4, 4, 6, 30, 31,
  ]);
  expect(mergeSortedArrays([2, 7, 9, 31], [0, 1, 32])).toStrictEqual([
    0, 1, 2, 7, 9, 31, 32,
  ]);
  expect(mergeSortedArrays([], [0, 1, 32])).toStrictEqual([0, 1, 32]);
  expect(mergeSortedArrays([2, 7, 9, 31], [])).toStrictEqual([2, 7, 9, 31]);
  expect(mergeSortedArrays([], [])).toStrictEqual([]);
});
