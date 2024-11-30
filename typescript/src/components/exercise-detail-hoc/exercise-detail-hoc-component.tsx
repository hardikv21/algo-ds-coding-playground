import { ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

import { ExerciseDetailHOCProps } from "./exercise-detail-hoc.interface";

export const ExerciseDetailHOCComponent = ({
  exerciseNumber,
  problemStatement,
  testCases,
}: ExerciseDetailHOCProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <Box sx={{ margin: "2%", width: "96%" }}>
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2%" }}
        variant="h4"
      >
        Coding Exercise {exerciseNumber}
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "1%" }}>
        <b>Problem Statement:</b> {problemStatement}
      </Typography>
      {testCases.map((item, index) => (
        <Typography variant="body1" sx={{ marginBottom: "2%" }}>
          <Box sx={{ fontWeight: "bold" }}>
            <u>Test case {index + 1}:</u>
          </Box>
          {item}
        </Typography>
      ))}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="text" onClick={() => navigate("/")}>
          Home
        </Button>
      </Box>
    </Box>
  );
};
