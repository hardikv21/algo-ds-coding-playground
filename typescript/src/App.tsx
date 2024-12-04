import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { APPBarComponent } from "./components/app-bar";
import { routes } from "./routes";

export const App = (): ReactElement => (
  <BrowserRouter>
    <APPBarComponent />
    {routes}
  </BrowserRouter>
);
