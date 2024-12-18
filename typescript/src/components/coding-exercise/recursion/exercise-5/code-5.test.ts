import { findFactorialRecursive } from "./code-5";

test("Check findFactorialRecursive return correct factorial number of any positive number", () => {
  expect(findFactorialRecursive(4)).toBe(24);
  expect(findFactorialRecursive(10)).toBe(3628800);
  expect(findFactorialRecursive(-1)).toBe(-1);
});
