import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Details from "./pages/Details";
import Watch from "./pages/Watch";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProtectedRoute Component={Details} />} />
        <Route path="/watch" element={<ProtectedRoute Component={Watch} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
