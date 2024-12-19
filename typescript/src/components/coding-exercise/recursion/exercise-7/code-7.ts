export const reverseStringRecursive = (str: string): string => {
  if (str.length <= 1) {
    return str;
  }

  return (
    str[str.length - 1] + reverseStringRecursive(str.slice(0, str.length - 1))
  );
};
