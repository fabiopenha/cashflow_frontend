import React from 'react';
import logo from '../../images/logo.png';
import icon1 from '../../images/Savingmoney.png';
import FormLogin from '../forms/FormLogin';

const Login = () => {
  return (
    <div className="w-[100%] h-full bg-[#21A136]">
        <div className="flex flex-col items-center">
            <div className="mt-10">
              <img src={logo} alt='logo' />
            </div>
            <div className="w-[345px]">
              <p className='mt-[51px] font-semibold text-3xl text-white'>
                Organizar a sua vida financeira nunca foi tão fácil.
              </p>
            </div>
            <div className="mt-10">
              <img src={icon1} alt='logo' />
            </div>

            <div className="w-[345px]">
              <p className='mt-10 font-semibold text-3xl text-white'>
                Conheça o app que vai te ajudar a ter mais dinheiro no fim do mês.
              </p>
            </div>

            <FormLogin />

            <p className="text-white py-6">Created by Fábio Penha</p>
        </div>
    </div>
  )
}

export default Login;