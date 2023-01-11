import perfil from "../../images/perfil.jpg";
import { ImExit } from "react-icons/im";
import { api } from "../utils/api/api";
import { useEffect, useState } from "react";

export const Header = () => {
    
    const [user, setUser] = useState<{name?: string}>();
    
        useEffect(() => {
        (async ()=> {
            try {
                const {data} = await api.get('/v1/auth/authenticatedUser');
    
                setUser(data);
    
            } catch(err) {
                return err;
            }
        })();
      
        return () => {
          
        }
      }, []);
    

    return (
        <div
        className="w-full h-[140px] bg-[#21A136] flex items-center 
        justify-between px-5 lg:px-[20px]
      "
      >
        <div className="flex items-center">
          <img
            src={perfil}
            alt="perfil"
            className="rounded-full w-[68px] h-[68px]"
          />
          <p className="w-5 m-3 font-semibold text-white text-xs">
            Olá, {user?.name}!
          </p>
        </div>

        <ImExit className="text-2xl text-white" />
      </div>
    );
}