import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth/login';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';

const FormLogin = () => {

  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [text, setText] = useState();

  const navigate =useNavigate()

  const submit = (e: SyntheticEvent)=> {
    e.preventDefault();

    const userLogin = {
      email: email,
      password: password
    }

    login(userLogin)
      .then(function (response) {
        return response.data.message;
      })
      .catch(function (error) {
        return setText(error.response.data.errors);
    });

    navigate('/dashboard');


  }

  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Login</p>
      <form onSubmit={submit}>
        <Input name='Email' type='email' onChange={e => setEmail(e.target.value)}/>
        <PasswordInput name='Senha' type='password' onChange={e => setPassword(e.target.value)}/>
        <Button name='Entrar'/>

        <p className='text-center mb-2 font-semibold'><Link to='/'>Esqueci minha senha.</Link></p>
        <p className='text-center mb-10 font-semibold'><Link to='/register'>Criar meu cadastro.</Link></p>
      </form>
    </div>
  );
}

export default FormLogin;