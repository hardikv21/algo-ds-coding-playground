import { ReactElement } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

import { CardHOCProps } from "./card-hoc.interface";

export const CardHOCComponent = ({
  exerciseNumber,
  problemStatement,
}: CardHOCProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Coding Exercise {exerciseNumber}
        </Typography>
        <Typography variant="h5" component="div">
          Problem Statement
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}></Typography>
        <Typography variant="body2">{problemStatement}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/${exerciseNumber}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
