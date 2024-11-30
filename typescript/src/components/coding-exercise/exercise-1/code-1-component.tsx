import { Fragment, ReactElement } from "react";

import { ExerciseDetailHOCComponent } from "../../exercise-detail-hoc";
import { isArraysContainCommonItem1 } from "./code-1";

export const Code1Component = (): ReactElement => (
  <ExerciseDetailHOCComponent
    exerciseNumber={1}
    problemStatement="Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items."
    testCases={[
      <Fragment>
        arr1 = ['a', 'b', 'c', 'x'] <br />
        arr2 = ['z', 'y', 'i'] <br />
        Result:{" "}
        {isArraysContainCommonItem1(
          ["a", "b", "c", "x"],
          ["z", "y", "i"],
        ).toString()}
      </Fragment>,
      <Fragment>
        arr1 = ['a', 'b', 'c', 'x'] <br />
        arr2 = ['z', 'y', 'x'] <br />
        Result:{" "}
        {isArraysContainCommonItem1(
          ["a", "b", "c", "x"],
          ["z", "y", "x"],
        ).toString()}
      </Fragment>,
    ]}
  />
);
