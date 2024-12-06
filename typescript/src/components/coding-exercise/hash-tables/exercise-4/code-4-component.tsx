import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { findRepeatedNumber } from "./code-4";
import { convertStringToNumber } from "../../utils";

const Code4Component = (): ReactElement => {
  const [inputArr, setInputArr] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputArr("");
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={1}
      problemStatement="Given an array, create a function that return first repeated number or undefined if there is no repeated number."
      testCases={[
        <Fragment>
          arr = [2, 5, 1, 2, 3, 5, 1, 2, 4] <br />
          Result:{" "}
          {findRepeatedNumber([2, 5, 1, 2, 3, 5, 1, 2, 4])?.toString() ||
            "undefined"}
        </Fragment>,
        <Fragment>
          arr = [2, 1, 1, 2, 3, 5, 1, 2, 4] <br />
          Result:{" "}
          {findRepeatedNumber([2, 1, 1, 2, 3, 5, 1, 2, 4])?.toString() ||
            "undefined"}
        </Fragment>,
        <Fragment>
          arr = [2, 3, 4, 5] <br />
          Result: {findRepeatedNumber([2, 3, 4, 5])?.toString() || "undefined"}
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
        setOutput(
          findRepeatedNumber(convertStringToNumber(inputArr))?.toString() ||
            "undefined",
        )
      }
      clearInput={clearInput}
    />
  );
};

export default Code4Component;
