import React from "react";
import { ImExit } from "react-icons/im";
import { TiArrowRightThick } from "react-icons/ti";
import perfil from "../../../images/perfil.jpg";
import CardView from "../../cardView/CardView";
import CardStatus from "../../iconFaces/CardStatus";
import sadface from "../../../sadface.svg";
import moneyface from "../../../moneyface.svg";
import CardSlider from "../../iconFaces/CardSlider";
import logo from '../../../images/logo.svg'
import { Link } from "react-router-dom";

const Dashboard = () => {
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
        className="h-full px-5
        
      "
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-center my-8 font-semibold w-full">
              Visão geral
            </p>
            <Link to="/add"><TiArrowRightThick /></Link>
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            <Link to="/detail"><CardView title="Renda do mês" value="1.200,00" color="#21A136" /></Link>
            <Link to="/detail"><CardView title="Salário" value="1.500,00" color="#21A136" /></Link>
            <Link to="/detail"><CardView title="Despesa" value="800,00" color="#FF0000" /></Link>
            <Link to="/detail"><CardView title="Renda extra" value="500,00" color="#000AFF" /></Link>
          </div>
          
          <CardStatus
            iconFace={moneyface}
            color="#21A136"
            text={`Você está ficando rico! Continue aumentando a sua receita.`}
          />

        </div>
        
        <h1 className="mt-8 mb-5 font-semibold text-xl">
          Conteúdos que deixarão você rico
        </h1>

          <CardSlider />

        <div className="w-[130px] mx-auto mb-5">
          <Link to="/detail">
            <button className="text-center w-full md:my-8 py-2 rounded 
              bg-[#21A136] text-white font-bold"
            >
              Adicionar
            </button>
            </Link>
        </div>

      </div>
      
    </>
  );
};

export default Dashboard;
