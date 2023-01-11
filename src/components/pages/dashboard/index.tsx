import { TiArrowRightThick } from "react-icons/ti";
import CardView from "../../cardView/CardView";
import CardStatus from "../../iconFaces/CardStatus";
import moneyface from "../../../moneyface.svg";
import CardSlider from "../../iconFaces/CardSlider";
import { Link } from "react-router-dom";
import { Header } from "../../header";

const Dashboard = () => {
  
  return (
    <>
      <Header />
      
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

        <div className="w-[130px] mx-auto my-5">
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
