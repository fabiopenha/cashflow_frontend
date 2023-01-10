import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { api } from "../../utils/api/api";
import Button from "../button/Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";

interface IUser {
  nome?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}
const FormRegister = () => {
  const [user, setUser] = useState<IUser | null>();

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    setUser({...user, [e.target.name]: e.target.value});
  }

  const submit = (event: SyntheticEvent) => {
    event.preventDefault();

    console.log(process.env.REACT_APP_URI);
  }


  return (
    <div
      className="flex flex-col md:w-[389px] rounded-xl mx-5
    justify-center bg-white px-5 sm:mb-4 
    "
    >
      <p className="text-center p-10 font-semibold text-3xl">Register</p>
      <form onSubmit={submit}>
        <Input name="name" type="text" onChange={handleChange} />
        <Input name="Email" type="email" onChange={handleChange}/>
        <Input name="phone" type="text" onChange={handleChange}/>
        <Input name="occupation" type="text" onChange={handleChange}/>
        <PasswordInput name="senha" type="password" onChange={handleChange}/>
        <Input name="passwordConfirm" type="password" onChange={handleChange}/>
        <Button name="Entrar" />
      </form>
    </div>
  );
};

export default FormRegister;
