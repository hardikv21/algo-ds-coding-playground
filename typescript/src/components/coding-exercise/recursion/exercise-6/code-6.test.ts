import { fibonacciRecursive } from "./code-6";

test("Check fibonacciRecursive return correct fibonacci number of any positive index", () => {
  expect(fibonacciRecursive(5)).toBe(5);
  expect(fibonacciRecursive(10)).toBe(55);
  expect(fibonacciRecursive(-1)).toBe(-1);
});
