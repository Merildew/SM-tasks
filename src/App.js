import "./App.css";
import React from "react";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CreateCompanyPage } from "./pages/CreateCompanyPage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { EditPage } from "./pages/EditPage";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/login" element={<LogInPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route
          exact
          path="/createcompany"
          element={<CreateCompanyPage />}
        ></Route>
        <Route exact path="/editpage" element={<EditPage />}>
          <Route path=":name" element={<EditPage />} />
        </Route>
        <Route exact path="/companies" element={<CompaniesPage />}></Route>
        <Route exact path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
