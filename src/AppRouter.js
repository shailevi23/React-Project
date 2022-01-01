import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserDetails from "./Pages/UserDetailsPage/UserDetails";

const AppRouter = () => {
  return (
      <Router>
        <Routes >
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/:username" element={<UserDetails />}></Route>
        </Routes>
      </Router>
  );
};

export default AppRouter;