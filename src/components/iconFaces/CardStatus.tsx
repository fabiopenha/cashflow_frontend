import React from "react";
type Props = {
  iconFace: string;
  color: string;
  text: string;
  display:string;
};

const CardStatus = ({ iconFace, color, text, display }: Props) => {
  return (
    <div
      style={{backgroundColor: color }}
      className={`w-full h-[131px] bg-[${color}] mt-10 rounded-md p-3
    flex items-center md:justify-center gap-3 ${display? '' : 'hidden'}`}
    >
      <img src={iconFace} alt="icon" />
      <p className="text-xs md:text-base font-bold text-white">{text}</p>
    </div>
  );
};

export default CardStatus;
