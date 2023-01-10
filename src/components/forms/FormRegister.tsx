import React, { SyntheticEvent, useState } from "react";
import Button from "../button/Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import { register } from "../../services/auth/register";
import { useNavigate } from "react-router-dom";

interface IUser {
  name?: string;
  email?: string;
  phone?: string;
  occupation?: string;
  password?: string;
  passwordConfirm?: string;
}

const FormRegister = () => {
  const [name, setName] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [occupation, setOccupation] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string | undefined>('');
  const [text, setText] = useState<IUser | null>();

  const navigate = useNavigate();

  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
    const user: IUser = {
      name: name,
      email: email,
      phone: phone,
      occupation: occupation,
      password: password,
      passwordConfirm: passwordConfirm
    }

    register(user).then(function (response) {
      return response.data.message;
    })
    .catch(function (error) {
      return setText(error.response.data.errors);
    });

    navigate('/login');


  }
  return (
    <div
      className="flex flex-col md:w-[389px] rounded-xl mx-5
    justify-center bg-white px-5 sm:mb-4 
    "
    >
      <p className="text-center p-10 font-semibold text-3xl">Register</p>
      
      <form onSubmit={submit}>
        <Input name="name" type="text" onChange={e => setName(e.target.value)} />
        {text?.name}
        <Input name="email" type="email" onChange={e => setEmail(e.target.value)}/>
        {text?.email}
        <Input name="phone" type="text" onChange={e => setPhone(e.target.value)}/>
        {text?.phone}
        <Input name="occupation" type="text" onChange={e => setOccupation(e.target.value)}/>
        {text?.occupation}
        <PasswordInput name="senha" type="password" onChange={e => setPassword(e.target.value)}/>
        {text?.password}
        <Input name="passwordConfirm" type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
        {text?.passwordConfirm}
        <Button name="Entrar" />
      </form>
    </div>
  );
};

export default FormRegister;
