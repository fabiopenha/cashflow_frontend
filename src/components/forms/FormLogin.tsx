import React from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';

const FormLogin = () => {
  return (
    <div className="mt-16 bg-white w-[90%] h-full rounded-xl px-[31px]">
        <p className="font-semibold text-3xl my-10 w-full text-center">
            Login
        </p>

        <form>
            <Input name='Nome' type='text'/>
            <Input name='Email' type='text'/>
            <Input name='Senha' type='password'/>
            <Button name="Entrar" />
        </form>
        
        <p className="text-center font-semibold mb-1">Esqueci minha senha</p>
        <p className="text-center font-semibold mb-20">Criar meu cadastro</p>
    </div>
  );
}

export default FormLogin;