import React from 'react';
type Props = {
    name: string;
}


const Button = ({name}: Props) => {
  return (
    <>
        <button
            className="
                w-full font-semibold
                bg-[#21A136] mb-8 p-4  text-white
            "
        >
            {name}
        </button>
    </>
  )
}

export default Button;