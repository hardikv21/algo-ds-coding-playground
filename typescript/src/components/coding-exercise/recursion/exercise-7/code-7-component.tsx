import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { reverseStringRecursive } from "./code-7";

const Code7Component = (): ReactElement => {
  const [inputStr, setInputStr] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputStr("");
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={7}
      problemStatement="Create a recursive function that reverses a string."
      testCases={[
        <Fragment>
          str = 'Hi My name is Hardik' <br />
          Result: '{reverseStringRecursive("Hi My name is Hardik")}'
        </Fragment>,
        <Fragment>
          str = 'I am software developer' <br />
          Result: '{reverseStringRecursive("I am software developer")}'
        </Fragment>,
      ]}
      inputComponent={
        <Box sx={{ marginTop: "1%" }}>
          <TextField
            type="text"
            variant="standard"
            placeholder="Enter a valid string..."
            value={inputStr}
            onChange={({ target }) => {
              setInputStr(target["value"]);
              setOutput("");
            }}
          />
        </Box>
      }
      output={output}
      processInput={() => setOutput(reverseStringRecursive(inputStr))}
      clearInput={clearInput}
    />
  );
};

export default Code7Component;
