import { useState } from "react";
import { ImExit } from "react-icons/im";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import perfil from "../../../images/perfil.jpg";
import { Link } from "react-router-dom";
import { getCurrentMonth, formatCurrentMonth } from '../../utils/dateFilter';
import CardDetail from "../../iconFaces/CardDetail";
import { Header } from "../../header";

const Detail = () => {
  const [filtered, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMont] = useState(getCurrentMonth());

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    setCurrentMont(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    setCurrentMont(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }


  return (
    <>
      <Header />
      
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
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center
             rounded-full text-white "
            >
              <TiArrowLeftThick onClick={handlePrevMonth} />
            </div>
            {formatCurrentMonth(currentMonth)}
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center 
             rounded-full text-white "
            >
              <TiArrowRightThick onClick={handleNextMonth} />
            </div>
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
