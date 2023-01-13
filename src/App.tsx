import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Forgot from "./components/pages/forgot";
import Dashboard from "./components/pages/dashboard";
import Add from "./components/pages/add";
import Detail from "./components/pages/detail";
import { Protected } from "./components/protected";
import ResetPassword from "./components/pages/resetPassword";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="reset/:token" element={<ResetPassword />} />
        
        <Route element={<Protected />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="detail" element={<Detail />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
