import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MyActivity from "./pages/myActivity/MyActivity";
import Profile from "./pages/profile/Profile";
import Feedback from "./pages/feedback/Feedback";
import MyInfo from "./pages/myInfo/MyInfo";
import Contact from "./pages/contact/Contact";
import Address from "./pages/address/Address";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Login />}></Route>
        <Route exact path={"/register"} element={<Register />}></Route>
        <Route exact path={"/myActivity"} element={<MyActivity />}></Route>
        <Route exact path={"/profile"} element={<Profile />}></Route>
        <Route exact path={"/feedback"} element={<Feedback />}></Route>
        <Route exact path={"/myInfo"} element={<MyInfo />}></Route>
        <Route exact path={"/contact"} element={<Contact />}></Route>
        <Route exact path={"/address"} element={<Address />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
