import { useState } from "react";
import { ImExit } from "react-icons/im";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import perfil from "../../../images/perfil.jpg";
import { Link } from "react-router-dom";
import { getCurrentMonth } from '../../utils/dateFilter';
import CardDetail from "../../iconFaces/CardDetail";

const Detail = () => {
  const [filtered, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMont] = useState(getCurrentMonth());
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
        className="h-full bg-white px-5
        
      "
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
          <Link to="/dashboard"><TiArrowLeftThick /></Link>
            <p className="text-center my-8 font-semibold w-full">
              Balanço detalhado
            </p>
          </div>

          <div className="w-full border p-5 mb-3 font-semibold flex items-center justify-between">
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center rounded-full text-white "><TiArrowLeftThick /></div>
            Out 2022
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center rounded-full text-white "><TiArrowRightThick /></div>
          </div>

          <div className="w-full h-72 mt-3 border overflow-y-auto">
            <CardDetail />
            <CardDetail />
            <CardDetail />
            <CardDetail />
            <CardDetail />
          </div>

        </div>
        
      </div>
      
    </>
  );
};

export default Detail;
