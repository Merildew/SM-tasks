import "./App.css";
import React from "react";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/login" element={<LogInPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
