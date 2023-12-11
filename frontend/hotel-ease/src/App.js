import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Employee from "./Component/Employee/CrudEmployee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home/:id" element={<LandingPage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Employees" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
