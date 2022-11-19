import React from "react";
import Login from "./components/pages/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/pages/register";
import Forgot from "./components/pages/forgot";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="detail" element={<div>Balanço detalhado</div>} />
        <Route path="add" element={<div>New page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
