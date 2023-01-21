import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../../context/getUserContext";
import { createActivity } from "../../services/activities/CreateActivity";
import Button from "../button/Button";
import InputLabel from "../inputs/InputLabel";
import SelectCategory from "../inputs/SelectCategory";

interface IActivity {
  date?: string | null;
  category?: string | null;
  description?: string | null;
  cash?: number | null;
  }

const FormAdd = () => {
  const [date, setDate] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [cash, setCash] = useState<string>('0');
  const [select, setSelect] = useState<string>("freelancer");
  const id = useContext(ApiDataContext);

  useEffect(() => {
    
    return () => {
      
    }
  }, [id])

  
  const activity: IActivity = {
    date: date,
    category: select,
    description: description,
    cash: parseFloat(cash)
    }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(activity);

    createActivity(activity, id);
  };
  return (
    <div
      className="flex flex-col w-full md:w-[389px] rounded-xl mx-5
    justify-center bg-white md:px-5 sm:mb-4 md:border md:shadow-md md:py-5
    "
    >
      <form onSubmit={handleSubmit}>
        <InputLabel
          name="date"
          type="date"
          title="Insira uma data"
          onChange={(e) => setDate(e.target.value)}
        />
        <SelectCategory
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        />
        <InputLabel
          name="Digite Aqui"
          type="text"
          title="Insira uma atividade"
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputLabel
          name="Valor"
          type="number"
          title="Insira um Valor"
          onChange={(e) => setCash(e.target.value)}
        />
        <Button name="Criar" />
      </form>
    </div>
  );
};

export default FormAdd;
