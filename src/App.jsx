import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import CreateAssessment from "./components/CreateAssessment";
import UploadAnswers from "./components/UploadAnswers";
import Results from "./components/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-assessment" element={<CreateAssessment />} />
      <Route path="/upload-answers" element={<UploadAnswers />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
