import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { isArraysContainCommonItem2 } from "./code-1";

const Code1Component = (): ReactElement => {
  const [inputArr1, setInputArr1] = useState<string[]>([]);
  const [inputArr2, setInputArr2] = useState<string[]>([]);
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr1([]);
    setInputArr2([]);
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={1}
      problemStatement="Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items."
      testCases={[
        <Fragment>
          arr1 = ['a', 'b', 'c', 'x'] <br />
          arr2 = ['z', 'y', 'i'] <br />
          Result:{" "}
          {isArraysContainCommonItem2(
            ["a", "b", "c", "x"],
            ["z", "y", "i"],
          ).toString()}
        </Fragment>,
        <Fragment>
          arr1 = ['a', 'b', 'c', 'x'] <br />
          arr2 = ['z', 'y', 'x'] <br />
          Result:{" "}
          {isArraysContainCommonItem2(
            ["a", "b", "c", "x"],
            ["z", "y", "x"],
          ).toString()}
        </Fragment>,
      ]}
      output={output}
      inputComponent={
        <Fragment>
          <Box sx={{ marginTop: "1%" }}>
            <TextField
              type="text"
              variant="standard"
              helperText="Enter a string values seprated by ','..."
              value={inputArr1}
              onChange={({ target }) => {
                setInputArr1(target["value"].split(","));
                setOutput("");
              }}
            />
          </Box>
          <Box sx={{ marginTop: "1%" }}>
            <TextField
              type="text"
              variant="standard"
              helperText="Enter a string values seprated by ','..."
              value={inputArr2}
              onChange={({ target }) => {
                setInputArr2(target["value"].split(","));
                setOutput("");
              }}
            />
          </Box>
        </Fragment>
      }
      processInput={() =>
        setOutput(isArraysContainCommonItem2(inputArr1, inputArr2).toString())
      }
      clearInput={clearInput}
    />
  );
};

export default Code1Component;
