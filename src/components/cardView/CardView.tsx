type Props = {
    title: string;
    value: string;
    color: string;
}

const CardView = ({ title, value, color } : Props) => {
  return (
    <div className="w-full h-14 border rounded-md flex pl-3 flex-col justify-center">
      <div
        className={`w-full h-[58%] border-l-4 pl-3 ${color}]
        flex flex-col justify-center`}>
        <div className="text-sm">{title}</div>
        <div className="text-xs font-semibold">R$ {value}</div>
      </div>
    </div>
  );
}

export default CardView;