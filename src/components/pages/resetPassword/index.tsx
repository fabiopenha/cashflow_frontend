import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import FormResetPassword from "../../forms/FormResetPassword";

const ResetPassword = () => {

  return (
    <div className="w-screen h-[100vh] bg-[#21A136] flex flex-col items-center justify-center">
      <Link to={"/login"}><img src={logo} alt="logo" className="mb-8" /></Link>
      <FormResetPassword />
    </div>
  );
};

export default ResetPassword;
