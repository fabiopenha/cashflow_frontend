import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

type Props = {
    name: string;
    type: string;
}

const PasswordInput = ({name, type}: Props) => {
  const [openEye, setOpenEye] = useState(false);  

  const HandleOpenEye = () => {
    openEye ? setOpenEye(false) : setOpenEye(true)
  }
  return (
    <div className="border rounded-md border-slate-300 mb-4 h-[62px] flex items-center pr-4">
        <input 
            className="
                placeholder:font-semibold placeholder:text-black w-full
                p-4 focus:outline-none text-sm
            "
            
            type={openEye ? 'text' : type} 
            placeholder={name}
        />
        {openEye ? 
        <AiFillEye className='text-2xl' onClick={HandleOpenEye} /> :
        <AiFillEyeInvisible className='text-2xl' onClick={HandleOpenEye} />
        }
    </div>
  )
}

export default PasswordInput;