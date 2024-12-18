import { lazy, ReactElement } from "react";

const Component1 = lazy(
  () => import("../coding-exercise/arrays/exercise-1/code-1-component"),
);
const Component2 = lazy(
  () => import("../coding-exercise/arrays/exercise-2/code-2-component"),
);
const Component3 = lazy(
  () => import("../coding-exercise/arrays/exercise-3/code-3-component"),
);
const Component4 = lazy(
  () => import("../coding-exercise/hash-tables/exercise-4/code-4-component"),
);
const Component5 = lazy(
  () => import("../coding-exercise/recursion/exercise-5/code-5-component"),
);
const Component6 = lazy(
  () => import("../coding-exercise/recursion/exercise-6/code-6-component"),
);

export const ComponentsRoute: ReactElement[] = [
  <Component1 />,
  <Component2 />,
  <Component3 />,
  <Component4 />,
  <Component5 />,
  <Component6 />,
];
