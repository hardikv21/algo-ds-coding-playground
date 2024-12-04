import { Fragment, ReactElement, useState } from "react";
import { Box, TextField } from "@mui/material";

import { ExerciseDetailHOCComponent } from "../../../exercise-detail-hoc";
import { reverseString2 } from "./code-2";

const Code2Component = (): ReactElement => {
  const [inputStr, setInputStr] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const clearInput = () => {
    setInputStr("");
    setOutput("");
  };

  return (
    <ExerciseDetailHOCComponent
      exerciseNumber={2}
      problemStatement="Create a function that reverses a string."
      testCases={[
        <Fragment>
          str = 'Hi My name is Hardik' <br />
          Result: '{reverseString2("Hi My name is Hardik")}'
        </Fragment>,
        <Fragment>
          str = 'I am software developer' <br />
          Result: '{reverseString2("I am software developer")}'
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
      processInput={() => setOutput(reverseString2(inputStr))}
      clearInput={clearInput}
    />
  );
};

export default Code2Component;
