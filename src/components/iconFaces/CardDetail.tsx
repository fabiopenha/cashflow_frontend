import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import MenuDetail from "../menus/MenuDetail";
import { currentDay, formatDate } from "../utils/dateFilter";

type Props = {
  _id: string;
  date: string;
  category: string;
  description: string;
  cash:string;
  status: string;
  handleClick: (activityId: string) => void;
};

const CardDetail = ({ description, date, category, cash, status, _id, handleClick } : Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDotClick = () => {
    !showMenu ? setShowMenu(true) : setShowMenu(false);
  }

  return (
    <div className="w-full border-b p-5 flex flex-col gap-2 transition ease-in-out delay-150">
        <div className="relative flex items-center justify-between">
            <p className="text-sm text-stone-400">{category}</p>
            <HiDotsHorizontal
              className="text-2xl cursor-pointer"
              onClick={handleDotClick}
            />
            <MenuDetail hidden={!showMenu ? "hidden" : ''} handleClick={() => handleClick(_id)}/>
        </div>
        <div>
            
            <div className="flex justify-between">
            <p className="flex items-center mb-2">
                <div 
                  className={`w-[8px] h-[8px] rounded-full mr-1`}
                  style={{backgroundColor: status ==='Receita' ?'#21A136' : '#FF0000'}}
                ></div>
                {description}
            </p>
            <div className="text-[#21A136] font-semibold">R$ {cash}</div>
            </div>
        </div>
        <div className="text-xs">{formatDate(currentDay(date))}</div>
    </div>
  )
}

export default CardDetail;