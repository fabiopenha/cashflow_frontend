import React from "react";
import logo from "../../../images/logo.png";
import FormRegister from "../../forms/FormRegister";

const Register = () => {
  return (
    <div className="w-full h-full bg-[#21A136] flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="mb-8 mt-10" />
      <FormRegister />
    </div>
  );
};

export default Register;
