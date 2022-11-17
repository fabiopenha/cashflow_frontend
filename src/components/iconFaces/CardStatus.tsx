import React from "react";
type Props = {
  iconFace: string;
  color: string;
  text: string;
};

const CardStatus = ({ iconFace, color, text }: Props) => {
  return (
    <div
      className={`w-full h-[131px] bg-[${color}] mt-5 rounded-md p-3
    flex items-center md:justify-center gap-3`}
    >
      <img src={iconFace} alt="sad" />
      <p className="text-xs md:text-base font-bold text-white">{text}</p>
    </div>
  );
};

export default CardStatus;
