import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import FormAdd from "../../forms/FormAdd";
import { Header } from "../../header";

const Add = () => {
  return (
    <>
      <Header />
      
      <div
        className="h-[100%] bg-white px-5
        
      "
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <Link to="/dashboard"><TiArrowLeftThick /></Link>
            <p className="text-center md:text-lg my-8 font-semibold w-full">
              Criar atividade
            </p>
          </div>

          <FormAdd />

        </div>

      </div>
      
    </>
  );
};

export default Add;
