import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Overview from "./pages/Overview";
import Primevideo from "./pages/Primevideo";
import Error from "./pages/Error";
// import ProtectedRoute from "./components/ProtectedRoute";
import Details from "./pages/Details";
import Watch from "./pages/Watch";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Primevideo />} />
        <Route path="/details" element={<Details />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
