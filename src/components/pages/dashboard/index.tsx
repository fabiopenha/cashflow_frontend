import React from "react";
import { ImExit } from "react-icons/im";
import { TiArrowRightThick } from "react-icons/ti";
import perfil from "../../../images/perfil.jpg";
import CardView from "../../cardView/CardView";
import CardStatus from "../../iconFaces/CardStatus";
import sadface from "../../../sadface.svg";
import moneyface from "../../../moneyface.svg";

const Dashboard = () => {
  return (
    <>
      <div
        className="w-full h-[140px] bg-[#21A136] flex items-center 
        justify-between px-5
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

        <ImExit className="text-xl text-white" />
      </div>
      <div className="relative w-full h-[100vh] bg-[#F1F1F1]">
        <div
          className="absolute top-[178px] left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 w-[90%] md:w-[95%] rounded-md h-[398px] bg-white px-5
          flex justify-content
        "
        >
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-center my-8 font-semibold w-full">
                Visão geral
              </p>
              <TiArrowRightThick />
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
              <CardView title="Renda do mês" value="1.200,00" color="#21A136" />
              <CardView title="Salário" value="1.500,00" color="#21A136" />
              <CardView title="Despesa" value="800,00" color="#FF0000" />
              <CardView title="Renda extra" value="500,00" color="#000AFF" />
            </div>
            <CardStatus
              iconFace={moneyface}
              color="#21A136"
              text={`Você está ficando rico! Continue aumentando a sua receita.`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
