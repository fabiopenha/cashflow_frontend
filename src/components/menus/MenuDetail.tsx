type Props = {
  hidden: string;
  _id?: string;
  handleClick: () => void
}

const MenuDetail = ({ hidden, _id, handleClick }: Props) => {

  
  return (
    <div className={`cursor-pointer w-24 absolute top-[9px] right-10 bg-gray-100
    divide-y-2 border shadow-md rounded-md ${hidden} transition-all`}
    >
        <div className="text-sm text-center w-full">
            <p className="my-3 hover:font-semibold" onClick={handleClick}>Deletar</p>
        </div>
        <div className="text-sm text-center w-full">
            <p className="my-3 hover:font-semibold">Editar</p>
        </div>
    </div>
  )
}

export default MenuDetail;