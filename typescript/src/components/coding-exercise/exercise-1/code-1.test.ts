import {
  isArraysContainCommonItem1,
  isArraysContainCommonItem2,
} from "./code-1";

test("Check isArraysContainCommonItem return false when there is no common item in 2 arrays", () => {
  expect(
    isArraysContainCommonItem1(["a", "b", "c", "x"], ["z", "y", "i"]),
  ).toBe(false);
  expect(
    isArraysContainCommonItem2(["a", "b", "c", "x"], ["z", "y", "i"]),
  ).toBe(false);
});

test("Check isArraysContainCommonItem return true when there is a common item in 2 arrays", () => {
  expect(
    isArraysContainCommonItem1(["a", "b", "c", "x"], ["z", "y", "x"]),
  ).toBe(true);
  expect(
    isArraysContainCommonItem2(["a", "b", "c", "x"], ["z", "y", "x"]),
  ).toBe(true);
});

test("Check isArraysContainCommonItem return false when any one array is empty", () => {
  expect(isArraysContainCommonItem1(["a", "b", "c", "x"], [])).toBe(false);
  expect(isArraysContainCommonItem2(["a", "b", "c", "x"], [])).toBe(false);
});

test("Check isArraysContainCommonItem return false when both the arrays are empty", () => {
  expect(isArraysContainCommonItem1([], [])).toBe(false);
  expect(isArraysContainCommonItem2([], [])).toBe(false);
});
