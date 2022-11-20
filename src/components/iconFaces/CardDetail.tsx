import { HiDotsHorizontal } from "react-icons/hi";
import MenuDetail from "../menus/MenuDetail";

const CardDetail = () => {
  return (
    <div className="w-full border-b p-5 flex flex-col gap-2">
        <div className="relative flex items-center justify-between">
            <p className="text-sm text-stone-400">Salário</p>
            <HiDotsHorizontal className="text-2xl"/>
            <MenuDetail />
        </div>
        <div>
            
            <div className="flex justify-between">
            <p className="flex items-center">
                <div className="w-[8px] h-[8px] bg-[#21A136] rounded-full mr-1"></div>
                Pagamento do mês
            </p>
            <div className="text-[#21A136] font-semibold">R$ 1.500,00</div>
            </div>
        </div>
        <div className="text-sm"> 12/10/2022</div>
    </div>
  )
}

export default CardDetail;