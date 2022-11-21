import React from "react";
import Button from "../button/Button";
import InputLabel from "../inputs/InputLabel";
import SelectCategory from "../inputs/SelectCategory";

const FormAdd = () => {
  return (
    <div
      className="flex flex-col w-full md:w-[389px] rounded-xl mx-5
    justify-center bg-white px-5 sm:mb-4 md:border md:shadow-md md:py-5
    "
    >
      <form>
        <InputLabel name="date" type="date" title="Insira uma data" />
        <SelectCategory />
        <InputLabel name="Digite Aqui" type="text" title="Insira uma atividade" />
        <Button name="Criar" />
      </form>
    </div>
  );
};

export default FormAdd;
