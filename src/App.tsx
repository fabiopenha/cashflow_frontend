import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Forgot from "./components/pages/forgot";
import Dashboard from "./components/pages/dashboard";
import Add from "./components/pages/add";
import Detail from "./components/pages/detail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="detail" element={<Detail />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
