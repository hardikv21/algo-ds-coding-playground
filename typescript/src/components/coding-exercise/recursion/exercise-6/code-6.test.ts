import { fibonacciIterative } from "./code-6";

test("Check fibonacciIterative return correct fibonacci number of any positive index", () => {
  expect(fibonacciIterative(5)).toBe(5);
  expect(fibonacciIterative(10)).toBe(55);
  expect(fibonacciIterative(-1)).toBe(-1);
});
