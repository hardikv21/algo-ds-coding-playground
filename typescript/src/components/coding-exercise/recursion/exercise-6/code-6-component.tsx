import { Fragment, ReactElement, useState } from "react";
import { Box } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { fibonacciIterative } from "./code-6";
import { NumberInputComponent } from "../../number-input";

const Code6Component = (): ReactElement => {
  const [inputArr, setInputArr] = useState<number | null>();
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr(null);
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={6}
      problemStatement="Write a function that returns Nth index - number value of the Fibonacci sequence where."
      testCases={[
        <Fragment>
          num = 5 <br />
          Result: {fibonacciIterative(5)}
        </Fragment>,
        <Fragment>
          num = 10 <br />
          Result: {fibonacciIterative(10)}
        </Fragment>,
        <Fragment>
          num = -1 <br />
          Result: {fibonacciIterative(-1)}
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
        inputArr && setOutput(fibonacciIterative(inputArr).toString())
      }
      clearInput={clearInput}
    />
  );
};

export default Code6Component;
