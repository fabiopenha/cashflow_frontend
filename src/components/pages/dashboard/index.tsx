import { TiArrowRightThick } from "react-icons/ti";
import CardView from "../../cardView/CardView";
import CardStatus from "../../iconFaces/CardStatus";
import moneyface from "../../../moneyface.svg";
import sadface from "../../../sadface.svg";
import CardSlider from "../../iconFaces/CardSlider";
import { Link } from "react-router-dom";
import { Header } from "../../header";
import { useContext, useEffect } from "react";
import { ApiDataContext } from "../../../context/getUserContext";
import { getactivitiesdata } from "../../../services/activities/GetActibityDataByUser";
import { useState } from "react";

const Dashboard = () => {
  const id = useContext(ApiDataContext);

  const [sumReceita, setSumReceita] = useState<number | undefined>(0);
  const [sumDespesa, setSumDespesa] = useState<number | undefined>(0);
  const [sumSalario, setSumSalario] = useState<number | undefined>(0);
  const [sumRendaExtra, setRendaExtra] = useState<number | undefined>(0);
  const [isLoading, setIsLoading] = useState('');
  

  useEffect(() => {
    getactivitiesdata(id).then((res) => {
      setSumReceita(res.sumReceita[0]["totalReceita"]);
      setSumDespesa(res.sumDespesa[0]["totalDespesa"]);
      setSumSalario(res.sumSalário[0]["totalSalario"]);
      setRendaExtra(res.sumRendaExtra[0]["totalRendaExtra"]);
      setIsLoading('true');
    })
    setIsLoading('');
  }, [id]);

  let receita = 0;

  if(sumReceita && sumDespesa) receita = sumReceita - sumDespesa;
  
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
            <Link to="/detail"><CardView title="Receita do mês" value={String(receita)} color="#21A136" /></Link>
            <Link to="/detail"><CardView title="Salário" value={String(sumSalario)} color="#21A136" /></Link>
            <Link to="/detail"><CardView title="Despesa" value={String(sumDespesa)} color="#FF0000" /></Link>
            <Link to="/detail"><CardView title="Renda extra" value={String(sumRendaExtra)} color="#000AFF" /></Link>
          </div>
          
          {
            receita > sumDespesa! ?
          
            <CardStatus
              iconFace={moneyface}
              color="#21A136"
              text={`Você está ficando rico! Continue aumentando a sua receita.`}
              display={isLoading}
            /> 
          :
            <CardStatus
                iconFace={sadface}
                color="#FF0000"
                text={`Você está ficando pobre! É hora de gastar menos e ganhar mais dinheiro.`} 
                display={isLoading}
            />
          }

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
