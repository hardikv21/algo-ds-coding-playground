import { reverseStringRecursive } from "./code-7";

test("Check reverseString1 return a reverse string", () => {
  expect(reverseStringRecursive("Hi My name is Hardik")).toBe(
    "kidraH si eman yM iH",
  );
  expect(reverseStringRecursive("I am software developer")).toBe(
    "repoleved erawtfos ma I",
  );
});
