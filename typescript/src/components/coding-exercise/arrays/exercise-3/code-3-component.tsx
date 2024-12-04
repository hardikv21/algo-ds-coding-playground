import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { mergeSortedArrays } from "./code-3";

const Code3Component = (): ReactElement => {
  const [inputArr1, setInputArr1] = useState<string>("");
  const [inputArr2, setInputArr2] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr1("");
    setInputArr2("");
    setOutput("");
  };

  const convertStringToNumber = (str: string): number[] => {
    const result: number[] = [];

    str
      .split(",")
      .forEach(
        (item) =>
          (!!item || item === "0") &&
          !isNaN(Number(item)) &&
          result.push(Number(item)),
      );

    return result;
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={3}
      problemStatement="Create a function that merge 2 sorted arrays into one array."
      testCases={[
        <Fragment>
          arr1 = [0, 3, 4, 31] <br />
          arr2 = [4, 6, 30] <br />
          Result: '{mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])}'
        </Fragment>,
        <Fragment>
          arr1 = [2, 7, 9, 31] <br />
          arr2 = [0, 1, 32] <br />
          Result: '{mergeSortedArrays([2, 7, 9, 31], [0, 1, 32])}'
        </Fragment>,
      ]}
      inputComponent={
        <Fragment>
          <Box sx={{ marginTop: "1%" }}>
            <TextField
              type="text"
              variant="standard"
              helperText="Enter a number values seprated by ','..."
              value={inputArr1}
              onChange={({ target }) => {
                setInputArr1(target["value"]);
                setOutput("");
              }}
            />
          </Box>
          <Box sx={{ marginTop: "1%" }}>
            <TextField
              type="text"
              variant="standard"
              helperText="Enter a number values seprated by ','..."
              value={inputArr2}
              onChange={({ target }) => {
                setInputArr2(target["value"]);
                setOutput("");
              }}
            />
          </Box>
        </Fragment>
      }
      output={output}
      processInput={() =>
        setOutput(
          mergeSortedArrays(
            convertStringToNumber(inputArr1),
            convertStringToNumber(inputArr2),
          ).join(", "),
        )
      }
      clearInput={clearInput}
    />
  );
};

export default Code3Component;
