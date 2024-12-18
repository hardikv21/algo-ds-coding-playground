import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CardHOCComponent } from "../card-hoc";

export const HomePageComponent = (): ReactElement => (
  <Box sx={{ flexGrow: 1, margin: "1%" }}>
    <Grid container spacing={2}>
      {[
        "Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.",
        "Create a function that reverses a string",
        "Create a function that merge 2 sorted arrays into one array.",
        "Given an array, create a function that return first repeated number or undefined if there is no repeated number.",
        "Write a function that finds the factorial of any positive number.",
      ].map((item, index) => (
        <Grid key={index + 1} display="flex" justifyContent="center" size={4}>
          <CardHOCComponent
            exerciseNumber={index + 1}
            problemStatement={item}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);
