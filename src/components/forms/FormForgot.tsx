import React, { SyntheticEvent, useState } from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';
import { api } from '../utils/api/api';

const FormForgot = () => {

  const [email, setEmail] = useState<string | undefined>('');
  const [text, setText] = useState<string | undefined>('');

  const handleSubmit = async(e: SyntheticEvent) => {
    e.preventDefault();

    await api.post('/v1/auth/forgotpassword', {email})
      .then(response => setText(response.data.message))
      .catch(error => setText('E-mail não identificado.'))

  }
  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Esqueci Minha Senha</p>
      <form onSubmit={handleSubmit}>
        <Input name='Email' type='email' onChange={e => setEmail(e.target.value)}/>
        <Button name='Enviar'/>

        <p className='text-center mb-8 font-semibold'>
          {text}
        </p>
      </form>
    </div>
  );
}

export default FormForgot;