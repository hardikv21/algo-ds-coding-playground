import { reverseString1, reverseString2 } from "./code-2";

test("Check reverseString1 return a reverse string", () => {
  expect(reverseString1("Hi My name is Hardik")).toBe("kidraH si eman yM iH");
  expect(reverseString1("I am software developer")).toBe(
    "repoleved erawtfos ma I",
  );
});

test("Check reverseString2 return a reverse string", () => {
  expect(reverseString2("Hi My name is Hardik")).toBe("kidraH si eman yM iH");
  expect(reverseString2("I am software developer")).toBe(
    "repoleved erawtfos ma I",
  );
});
