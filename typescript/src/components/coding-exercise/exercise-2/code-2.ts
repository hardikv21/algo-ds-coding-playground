export const reverseString1 = (str: string): string => {
  let rev_str: string = "";

  // Start loop from an end of str and store
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }

  return rev_str;
};

export const reverseString2 = (str: string): string => {
  return str.split("").reverse().join("");
};
