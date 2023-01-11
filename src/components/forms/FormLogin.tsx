import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';
import { api } from '../utils/api/api';

const FormLogin = (props: {loginData: Function}) => {

  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [text, setText] = useState();
  const [loginData, setLoginData] = useState<{
    id ?: string;
    secret ?: string;
    otpauth_url ?: string;
  }>();

  const submit = async(e: SyntheticEvent)=> {
    e.preventDefault();

    const { data } = await api.post('/v1/auth/login', {
      email: email,
      password: password
    });
    props.loginData(data);
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