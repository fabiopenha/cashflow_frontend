type Props = {
  hidden: string;
}

const MenuDetail = ({ hidden }: Props) => {
  return (
    <div className={`cursor-pointer w-24 absolute top-[9px] right-10 bg-gray-100
    divide-y-2 border shadow-md rounded-md ${hidden}`}
    >
        <div className="text-sm text-center w-full">
            <p className="my-3">Deletar</p>
        </div>
        <div className="text-sm text-center w-full">
            <p className="my-3">Editar</p>
        </div>
    </div>
  )
}

export default MenuDetail;