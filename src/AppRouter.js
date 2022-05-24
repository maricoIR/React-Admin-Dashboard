import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Messages from "./views/Messages";
import "./index.css";
import Building from "./views/Building";
import Calendar from "./views/Calendar";
import Tasks from "./views/Tasks";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/building" element={<Building />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default AppRouter;
