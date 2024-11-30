import React, { lazy, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePageComponent } from "./components/home-page";

const Code1Component = lazy(
  () => import("./components/coding-exercise/exercise-1/code-1-component"),
);
const NoPageComponent = lazy(
  () => import("./components/no-page/no-page-component"),
);

export const routes = (): ReactElement => (
  <Routes>
    <Route>
      <Route path="/" element={<HomePageComponent />} />
      <Route path="/1" element={<Code1Component />} />
      <Route path="*" element={<NoPageComponent />} />
    </Route>
  </Routes>
);
