import React, { ChangeEvent, useState } from 'react';
type Props = {
    name: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}


const Select = ({name, onChange}: Props) => {
  const [select, useSelect] = useState('')

  return (
    <div className="border rounded-md p-4 border-slate-300 mb-4 h-[62px] 
    flex items-center 
    ">
      <select className="font-semibold placeholder:font-semibold placeholder:text-black
      focus:outline-none text-sm w-full
      "
      defaultValue={"select"}
      onChange={onChange}
      name={name}
      >
        <option value="select" disabled>----------------------------------------</option>
        <option value="Salário"></option>
        <option value="Renda extra">Renda extra</option>
        <option value="Mercado">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
    </div>
  );
}

export default Select;