import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MyActivity from "./pages/myActivity/MyActivity";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Login />}></Route>
        <Route exact path={"/register"} element={<Register />}></Route>
        <Route exact path={"/myActivity"} element={<MyActivity />}></Route>
        <Route exact path={"/profile"} element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
