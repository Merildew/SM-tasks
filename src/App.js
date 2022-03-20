import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
