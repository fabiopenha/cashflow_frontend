import React from 'react';
type Props = {
    name: string;
}


const Button = ({name}: Props) => {
  return (
    <>
        <button
            className="
                w-full font-semibold md:text-xl rounded-md
                bg-[#21A136] mt-2 md:mb-8 p-4  text-white
            "
        >
            {name}
        </button>
    </>
  )
}

export default Button;