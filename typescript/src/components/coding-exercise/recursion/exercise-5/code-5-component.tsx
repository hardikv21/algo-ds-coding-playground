import { Fragment, ReactElement, useState } from "react";
import { Box } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { findFactorialRecursive } from "./code-5";
import { NumberInputComponent } from "../../../number-input";

const Code5Component = (): ReactElement => {
  const [inputArr, setInputArr] = useState<number | null>();
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr(null);
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={5}
      problemStatement="Write a function that finds the factorial of any positive number."
      testCases={[
        <Fragment>
          num = 4 <br />
          Result: {findFactorialRecursive(4)}
        </Fragment>,
        <Fragment>
          num = 10 <br />
          Result: {findFactorialRecursive(10)}
        </Fragment>,
        <Fragment>
          num = -1 <br />
          Result: {findFactorialRecursive(-1)}
        </Fragment>,
      ]}
      output={output}
      inputComponent={
        <Box sx={{ marginTop: "1%" }}>
          <NumberInputComponent
            placeholder="Enter a positive number"
            value={inputArr}
            onChange={(event, value) => {
              setInputArr(value);
              setOutput("");
            }}
            style={{ width: "30%" }}
          />
        </Box>
      }
      processInput={() =>
        inputArr && setOutput(findFactorialRecursive(inputArr).toString())
      }
      clearInput={clearInput}
    />
  );
};

export default Code5Component;
