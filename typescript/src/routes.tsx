import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePageComponent } from "./components/home-page";

const Code1Component = lazy(
  () =>
    import("./components/coding-exercise/arrays/exercise-1/code-1-component"),
);
const Code2Component = lazy(
  () =>
    import("./components/coding-exercise/arrays/exercise-2/code-2-component"),
);
const Code3Component = lazy(
  () =>
    import("./components/coding-exercise/arrays/exercise-3/code-3-component"),
);
const NoPageComponent = lazy(
  () => import("./components/no-page/no-page-component"),
);

export const routes = (
  <Routes>
    <Route>
      <Route path="/" element={<HomePageComponent />} />
      {[<Code1Component />, <Code2Component />, <Code3Component />].map(
        (item, index) => (
          <Route key={index} path={`/${index + 1}`} element={item} />
        ),
      )}
      <Route path="*" element={<NoPageComponent />} />
    </Route>
  </Routes>
);
