import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authCode } from '../../services/auth/code';
import Button from '../button/Button';
import Input from '../inputs/Input';
import qrcode from 'qrcode';

const FormCode = (props: {logindata: {
  id ?: string;
  secret ?: string;
  otpauth_url ?: string;
}}) => {

  const [code, setCode] = useState<string | undefined>('');
  const [img, setImg] = useState<ReactElement | null>(null);
  

  const navigate =useNavigate()

  useEffect(() => {
    if(props.logindata.otpauth_url){
      qrcode.toDataURL(props.logindata.otpauth_url, (err, data) => {
        setImg(<img src={data} style={{width: '50%', height: '50%'}} alt='qrcode' />);
      })
    }
  }, [props.logindata.otpauth_url]);

  const submit = (e: SyntheticEvent)=> {
    e.preventDefault();

    const codeLogin = {
      id: props.logindata.id,
      secret: props.logindata.secret,
      code: code,
    }

    authCode(codeLogin).then((response) => {
      console.log(response);
      if(response.status === 200) {
        navigate('/dashboard');
      }
    });

  }
  return (
    <div className="flex flex-col md:w-[389px] rounded-xl mx-5 justify-center 
    bg-white px-5 mb-4 items-center
    ">
      <p className='text-center p-10 font-semibold text-3xl'>Código de acesso</p>
      <form onSubmit={submit}>
        <Input name='Código de 6 dígitos' type='text' onChange={e => setCode(e.target.value)}/>
        <Button name='Enviar'/>
      </form>
      {img}
    </div>
  );
}

export default FormCode;