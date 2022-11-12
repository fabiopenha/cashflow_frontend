import React from "react";
import logo from "../../../images/logo.png";
import FormForgot from "../../forms/FormForgot";

const Forgot = () => {
  return (
    <div className="w-screen h-[100vh] bg-[#21A136] flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="mb-8" />
      <FormForgot />
    </div>
  );
};

export default Forgot;
