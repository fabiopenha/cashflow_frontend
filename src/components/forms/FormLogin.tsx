import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';

const FormLogin = () => {
  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Login</p>
      <form>
        <Input name='Email' type='email'/>
        <PasswordInput name='Senha' type='password' />
        <Button name='Entrar'/>

        <p className='text-center mb-2 font-semibold'><Link to='/'>Esqueci minha senha.</Link></p>
        <p className='text-center mb-10 font-semibold'><Link to='/register'>Criar meu cadastro.</Link></p>
      </form>
    </div>
  );
}

export default FormLogin;