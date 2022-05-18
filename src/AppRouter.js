import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Tasks from "./views/Tasks";
import "./index.css";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default AppRouter;
