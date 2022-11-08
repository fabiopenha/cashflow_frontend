import React from "react";
import logo from "../../../images/logo.png";
import FormLogin from "../../forms/FormLogin";

const Login = () => {
  return (
    <div className="w-screen h-[100vh] bg-[#21A136] flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="mb-8" />
      <FormLogin />
    </div>
  );
};

export default Login;
