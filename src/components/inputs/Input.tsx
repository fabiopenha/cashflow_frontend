import React, { ChangeEvent } from 'react';
type Props = {
    name: string;
    type: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}


const Input = ({name, type, onChange}: Props) => {
  return (
    <>
        <input 
            className="rounded-md
                w-full placeholder:font-semibold placeholder:text-black
                border border-slate-300 mb-3 p-4 focus:outline-none text-sm
            "
            type={type} 
            name={name}
            placeholder={name}
            onChange={onChange}
        />
    </>
  )
}

export default Input;