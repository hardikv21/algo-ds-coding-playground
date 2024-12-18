import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePageComponent } from "../home-page";
import { ComponentsRoute } from "./constants";

const NoPageComponent = lazy(() => import("../no-page/no-page-component"));

export const routes = (
  <Routes>
    <Route>
      <Route path="/" element={<HomePageComponent />} />
      {ComponentsRoute.map((item, index) => (
        <Route key={index} path={`/${index + 1}`} element={item} />
      ))}
      <Route path="*" element={<NoPageComponent />} />
    </Route>
  </Routes>
);
