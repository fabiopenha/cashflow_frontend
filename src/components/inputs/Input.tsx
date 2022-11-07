import React from 'react';
type Props = {
    name: string;
    type: string;
}


const Input = ({name, type}: Props) => {
  return (
    <>
        <input 
            className="
                w-full placeholder:font-semibold placeholder:text-black
                border border-slate-300 mb-3 p-4 focus:outline-none
            "
            type={type} 
            placeholder={name}
        />
    </>
  )
}

export default Input;