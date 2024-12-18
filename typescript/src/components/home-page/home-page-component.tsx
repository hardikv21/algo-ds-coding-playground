import React, { ReactElement } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CardHOCComponent } from "../card-hoc";
import { problemStatements } from "./constants";

export const HomePageComponent = (): ReactElement => (
  <Box sx={{ flexGrow: 1, margin: "1%" }}>
    <Grid container spacing={2}>
      {problemStatements.map((item, index) => (
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
