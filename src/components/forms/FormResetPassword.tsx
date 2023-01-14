import React, { SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button/Button';
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';
import { api } from '../utils/api/api';

const FormResetPassword = () => {

  const [password, setPassword] = useState<string | undefined>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string | undefined>('');
  const [text, setText] = useState();
  const { token } = useParams();

  const submit = async(e: SyntheticEvent)=> {
    e.preventDefault();

    const { data } = await api.post(`/v1/auth/resetpassword/${token}`, {
      password: password,
      passwordConfirm: passwordConfirm
    });

    setText(data.message);
  }

  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Alterar senha</p>
      <form onSubmit={submit}>
        <PasswordInput name='Senha' type='password' onChange={e => setPassword(e.target.value)}/>
        <Input name="passwordConfirm" type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
        <Button name='Alterar senha'/>

        {text && <p className='text-center pb-8 pt-8 lg:pt-0 font-semibold'>{text}</p>}
      </form>
    </div>
  );
}

export default FormResetPassword;