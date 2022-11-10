import React from "react";
import Button from "../button/Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import Select from "../inputs/Select";

const FormRegister = () => {
  return (
    <div
      className="flex flex-col md:w-[389px] rounded-xl mx-5 
    justify-center bg-white sm:px-5 sm:mb-4
    "
    >
      <p className="text-center p-10 font-semibold text-3xl">Register</p>
      <form>
        <Input name="Nome completo" type="email" />
        <Input name="Email" type="email" />
        <Input name="Telefone" type="text" />
        <Select />
        <PasswordInput name="Senha" type="password" />
        <PasswordInput name="Confirmar senha" type="password" />
        <Button name="Entrar" />
      </form>
    </div>
  );
};

export default FormRegister;
