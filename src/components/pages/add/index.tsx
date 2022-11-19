import React from "react";
import { ImExit } from "react-icons/im";
import { TiArrowLeftThick } from "react-icons/ti";
import perfil from "../../../images/perfil.jpg";
import { Link } from "react-router-dom";
import FormAdd from "../../forms/FormAdd";

const Add = () => {
  return (
    <>
      <div
        className="w-full h-[140px] bg-[#21A136] flex items-center 
        justify-between px-5 lg:px-[20px]
      "
      >
        <div className="flex items-center">
          <img
            src={perfil}
            alt="perfil"
            className="rounded-full w-[58px] h-[58px]"
          />
          <p className="w-5 m-3 font-semibold text-white text-xs">
            Olá, Samantha!
          </p>
        </div>

        <ImExit className="text-2xl text-white" />
      </div>
      
      <div
        className="h-[100%] bg-white px-5
        
      "
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <Link to="/add"><TiArrowLeftThick /></Link>
            <p className="text-center md:text-lg my-8 font-semibold w-full">
              Criar atividade
            </p>
          </div>

          <FormAdd />

        </div>

      </div>
      
    </>
  );
};

export default Add;
