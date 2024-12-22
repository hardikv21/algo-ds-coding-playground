import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { selectionSort } from "./code-9";
import { convertStringToNumber } from "../../utils";

const Code9Component = (): ReactElement => {
  const [inputArr, setInputArr] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr("");
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={9}
      problemStatement="Sort an array with the Selection sort."
      testCases={[
        <Fragment>
          arr = [2, 5, 1, 2, 3, 5, 1, 2, 4] <br />
          Result: {selectionSort([2, 5, 1, 2, 3, 5, 1, 2, 4]).toString()}
        </Fragment>,
        <Fragment>
          arr = [2, 1, 1, 2, 3, 5, 1, 2, 4] <br />
          Result: {selectionSort([2, 1, 1, 2, 3, 5, 1, 2, 4]).toString()}
        </Fragment>,
        <Fragment>
          arr = [2, 3, 4, 5] <br />
          Result: {selectionSort([2, 3, 4, 5]).toString()}
        </Fragment>,
      ]}
      output={output}
      inputComponent={
        <Box sx={{ marginTop: "1%" }}>
          <TextField
            type="text"
            variant="standard"
            helperText="Enter a number values seprated by ','..."
            value={inputArr}
            onChange={({ target }) => {
              setInputArr(target["value"]);
              setOutput("");
            }}
          />
        </Box>
      }
      processInput={() =>
        setOutput(selectionSort(convertStringToNumber(inputArr)).toString())
      }
      clearInput={clearInput}
    />
  );
};

export default Code9Component;
