import React, { useState } from "react";
import logo from "../../../images/logo.png";
import FormCode from "../../forms/FormCode";
import FormLogin from "../../forms/FormLogin";

const Login = () => {
  const [loginData, setLoginData] = useState<{
    id ?: string;
    secret ?: string;
    otpauth_url ?: string;
  }>();

  return (
    <div className="w-screen h-[100vh] bg-[#21A136] flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="mb-8" />
      {loginData?.id ? <FormCode logindata={loginData}/> : <FormLogin loginData={setLoginData}/>}
    </div>
  );
};

export default Login;
