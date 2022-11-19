import React, { useState } from 'react';
type Props = {
    name: string;
    type: string;
}


const SelectCategory = () => {
  const [select, useSelect] = useState('')

  return (
    <>
      <label htmlFor="category">
        <p className="mb-3 text-sm font-semibold">Categoria</p>
      </label>
      <div
        className="border rounded-md p-4 border-slate-300 mb-4 h-[62px] 
    flex items-center 
    "
      >
        <select
          className="font-semibold placeholder:font-semibold placeholder:text-black
      focus:outline-none text-sm w-full
      "
          id="category"
        >
          <option value="mercado">Mercado</option>
          <option value="contas">Contas</option>
          <option selected value="freelancer">
            Freelancer
          </option>
          <option value="alimentacao">Alimentação</option>
        </select>
      </div>
    </>
  );
}

export default SelectCategory;