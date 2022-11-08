import React from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';

const FormLogin = () => {
  return (
    <div className="flex flex-col rounded-xl mx-5 justify-center bg-white
    px-5
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Login</p>
      <form>
        <Input name='Email' type='email'/>
        <PasswordInput name='Senha' type='password' />
        <Button name='Entrar'/>

        <p className='text-center mb-2 font-semibold'>Esqueci minha senha.</p>
        <p className='text-center mb-10 font-semibold'>Criar meu cadastro.</p>
      </form>
    </div>
  );
}

export default FormLogin;