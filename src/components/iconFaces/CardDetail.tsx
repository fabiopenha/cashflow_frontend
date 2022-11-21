import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import MenuDetail from "../menus/MenuDetail";

const CardDetail = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDotClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  useEffect(() => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }, [])
  
  return (
    <div className="w-full border-b p-5 flex flex-col gap-2">
        <div className="relative flex items-center justify-between">
            <p className="text-sm text-stone-400">Salário</p>
            <HiDotsHorizontal
              className="text-2xl cursor-pointer"
              onClick={handleDotClick}
            />
            <MenuDetail hidden={showMenu ? "hidden" : ''} />
        </div>
        <div>
            
            <div className="flex justify-between">
            <p className="flex items-center mb-2">
                <div className="w-[8px] h-[8px] bg-[#21A136] rounded-full mr-1"></div>
                Pagamento do mês
            </p>
            <div className="text-[#21A136] font-semibold">R$ 1.500,00</div>
            </div>
        </div>
        <div className="text-xs">12/10/2022</div>
    </div>
  )
}

export default CardDetail;