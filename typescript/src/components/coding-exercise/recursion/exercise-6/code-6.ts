export const fibonacciIterative = (index: number): number =>
  index < 2
    ? index
    : fibonacciIterative(index - 1) + fibonacciIterative(index - 2);
