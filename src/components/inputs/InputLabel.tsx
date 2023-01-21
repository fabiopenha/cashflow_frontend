import React, { ChangeEvent } from 'react';
type Props = {
    name: string;
    type: string;
    title?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}


const InputLabel = ({name, type, title, onChange}: Props) => {
  return (
    <>
        <label htmlFor={name}><p className="mb-3 text-sm font-semibold">{title}</p></label>
        <input 
            className="rounded-md font-semibold
                w-full placeholder:font-semibold placeholder:text-black
                border border-slate-300 mb-3 p-4 focus:outline-none text-sm
            "
            type={type} 
            id={name}
            placeholder={name}
            onChange={onChange}
        />
    </>
  )
}

export default InputLabel;