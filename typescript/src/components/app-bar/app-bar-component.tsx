import { ReactElement } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Grass } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const APPBarComponent = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          <Grass />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Typescript Coding Playground
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
