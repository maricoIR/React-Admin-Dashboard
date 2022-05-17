import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import "./index.css";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
