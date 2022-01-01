import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserDetails from "./Pages/UserDetailsPage/UserDetails";

const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:username" element={<UserDetails />}></Route>
        </Routes>
  );
};

export default AppRouter;