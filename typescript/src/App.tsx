import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePageComponent } from "./components/home-page";
import { NoPageComponent } from "./components/no-page";
import { APPBarComponent } from "./components/app-bar";
import { Code1Component } from "./components/coding-exercise/exercise-1";

export const App = (): ReactElement => (
  <BrowserRouter>
    <APPBarComponent />
    <Routes>
      <Route>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/1" element={<Code1Component />} />
        <Route path="*" element={<NoPageComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
