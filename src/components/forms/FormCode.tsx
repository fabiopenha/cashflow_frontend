import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth/login';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';

const FormCode = () => {

  const [code, setCode] = useState<string | undefined>('');
  

  const navigate =useNavigate()

  const submit = (e: SyntheticEvent)=> {
    e.preventDefault();

    const userLogin = {
      code: code,
    }

    //api

    navigate('/dashboard');

  }
  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Valide o seu acesso</p>
      <form onSubmit={submit}>
        <Input name='code' type='text' onChange={e => setCode(e.target.value)}/>
        <Button name='Entrar'/>
      </form>
    </div>
  );
}

export default FormCode;