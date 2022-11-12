import React from 'react';
import Button from '../button/Button';
import Input from '../inputs/Input';

const FormForgot = () => {
  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Esqueci Minha Senha</p>
      <form>
        <Input name='Email' type='email'/>
        <Button name='Enviar'/>

        <p className='text-center mb-8 font-semibold'>
          Acabamos de enviar um e-mail para você.
        </p>
      </form>
    </div>
  );
}

export default FormForgot;