import React from "react";
import Login from "./components/pages/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
