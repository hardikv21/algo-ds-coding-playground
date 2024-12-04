import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CardHOCComponent } from "../card-hoc";

export const HomePageComponent = (): ReactElement => (
  <Box sx={{ flexGrow: 1, margin: "1%" }}>
    <Grid container spacing={2}>
      {[
        {
          problemStatement:
            "Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.",
        },
        {
          problemStatement: "Create a function that reverses a string",
        },
      ].map((item, index) => (
        <Grid key={index + 1} display="flex" justifyContent="center" size={4}>
          <CardHOCComponent
            exerciseNumber={index + 1}
            problemStatement={item["problemStatement"]}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);
