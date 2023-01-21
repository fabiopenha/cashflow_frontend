import React, { ChangeEvent } from 'react';
type Props = {
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
}


const SelectCategory = ({ onChange, value }: Props) => {

  return (
    <>
      <label htmlFor="category">
        <p className="mb-3 text-sm font-semibold">Escolha uma categoria</p>
      </label>
      <div
        className="border rounded-md p-4 border-slate-300 mb-4 h-[62px] 
    flex items-center 
    "
      >
        <select
          onChange={onChange}
          value={value}
          className="font-semibold placeholder:font-semibold placeholder:text-black
      focus:outline-none text-sm w-full
      "
          id="category"
        >
          <option value="mercado">Mercado</option>
          <option value="contas">Contas</option>
          <option value="freelancer">Freelancer</option>
          <option value="Saúde">Saúde</option>
          <option value="outros">Outros</option>
          <option value="alimentacao">Alimentação</option>
        </select>
      </div>
    </>
  );
}

export default SelectCategory;