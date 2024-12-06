import { findRepeatedNumber } from "./code-4";

test("Check findRepeatedNumber return correct repeated number when it is found", () => {
  expect(findRepeatedNumber([2, 5, 1, 2, 3, 5, 1, 2, 4])).toBe(2);
  expect(findRepeatedNumber([2, 1, 1, 2, 3, 5, 1, 2, 4])).toBe(1);
});

test("Check findRepeatedNumber return undefined when array do not have any repeated number", () => {
  expect(findRepeatedNumber([2, 3, 4, 5])).toBe(undefined);
});
