export const fibonacciRecursive = (index: number): number =>
  index < 2
    ? index
    : fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
