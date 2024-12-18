export const findFactorialRecursive = (num: number): number =>
  num <= 2 ? num : num * findFactorialRecursive(num - 1);
