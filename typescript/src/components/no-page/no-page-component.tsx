import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

const NoPageComponent = (): ReactElement => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
    <Typography variant="h4">No Page Found!</Typography>
  </Box>
);

export default NoPageComponent;
