import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { findFactorialRecursive } from "./code-5";

const Code5Component = (): ReactElement => {
  const [inputArr, setInputArr] = useState<number>(-1);
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr(-1);
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={1}
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
          <TextField
            type="number"
            variant="standard"
            helperText="Enter a positive number value"
            value={inputArr}
            onChange={({ target }) => {
              setInputArr(Number(target["value"]));
              setOutput("");
            }}
          />
        </Box>
      }
      processInput={() =>
        setOutput(findFactorialRecursive(inputArr).toString())
      }
      clearInput={clearInput}
    />
  );
};

export default Code5Component;
