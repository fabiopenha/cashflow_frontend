import React, { useState } from 'react';
type Props = {
    name: string;
    type: string;
}


const Select = () => {
  const [select, useSelect] = useState('')

  return (
    <div className="border rounded-md p-4 border-slate-300 mb-4 h-[62px] 
    flex items-center 
    ">
      <select className="font-semibold placeholder:font-semibold placeholder:text-black
      focus:outline-none text-sm w-full

      ">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
    </div>
  );
}

export default Select;